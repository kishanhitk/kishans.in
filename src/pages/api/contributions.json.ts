import type { APIRoute } from 'astro'

// Server-rendered so the graph stays fresh between deploys; the CDN caches
// the response for an hour, so GitHub sees at most one request per hour.
export const prerender = false

const ACCOUNTS = ['kishanhitk', 'kishan-plivo']

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays { contributionCount date }
        }
      }
    }
  }
}`

type Day = { contributionCount: number; date: string }
type Calendar = {
  totalContributions: number
  weeks: { contributionDays: Day[] }[]
}

async function fetchCalendar(
  token: string,
  login: string,
): Promise<Calendar | null> {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query: QUERY, variables: { login } }),
    signal: AbortSignal.timeout(8000),
  })
  const json = await response.json()
  return json?.data?.user?.contributionsCollection?.contributionCalendar ?? null
}

// GitHub buckets nonzero days into quartiles per user; after merging two
// accounts the per-user levels are meaningless, so recompute them the same
// way from the combined counts.
function levelFor(count: number, thresholds: [number, number, number]): number {
  if (count === 0) return 0
  if (count <= thresholds[0]) return 1
  if (count <= thresholds[1]) return 2
  if (count <= thresholds[2]) return 3
  return 4
}

export const GET: APIRoute = async () => {
  const token = import.meta.env.GITHUB_TOKEN
  if (!token) {
    return new Response(JSON.stringify({ error: 'not configured' }), {
      status: 503,
    })
  }

  const calendars = (
    await Promise.allSettled(
      ACCOUNTS.map((login) => fetchCalendar(token, login)),
    )
  )
    .map((r) => (r.status === 'fulfilled' ? r.value : null))
    .filter((c): c is Calendar => c !== null)

  if (!calendars.length) {
    return new Response(JSON.stringify({ error: 'unavailable' }), {
      status: 502,
    })
  }

  // Both calendars span the same trailing year, but merge by date to stay
  // correct if the week grids ever differ by a day at the edges.
  const byDate = new Map<string, number>()
  for (const calendar of calendars) {
    for (const week of calendar.weeks) {
      for (const day of week.contributionDays) {
        byDate.set(
          day.date,
          (byDate.get(day.date) ?? 0) + day.contributionCount,
        )
      }
    }
  }

  const nonzero = [...byDate.values()]
    .filter((c) => c > 0)
    .sort((a, b) => a - b)
  const quartile = (q: number) =>
    nonzero[Math.min(nonzero.length - 1, Math.floor(nonzero.length * q))] ?? 0
  const thresholds: [number, number, number] = [
    quartile(0.25),
    quartile(0.5),
    quartile(0.75),
  ]

  const grid = calendars[0].weeks
  const payload = {
    total: calendars.reduce((sum, c) => sum + c.totalContributions, 0),
    weeks: grid.map((week) =>
      week.contributionDays.map((day) => {
        const count = byDate.get(day.date) ?? 0
        return [levelFor(count, thresholds), count, day.date] as [
          number,
          number,
          string,
        ]
      }),
    ),
  }

  return new Response(JSON.stringify(payload), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
