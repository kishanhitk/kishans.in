import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import * as React from 'react'

// GitHub contribution calendar, fetched from /api/contributions.json and
// drawn as an SVG in foreground-alpha steps so it follows the site theme.
// One glass tooltip chip: it animates in once, then glides between cells
// while scrubbing and fades out fast on leave.

const CELL = 10
const GAP = 3

const LEVEL_CLASSES = [
  'fill-foreground/8',
  'fill-foreground/25',
  'fill-foreground/45',
  'fill-foreground/70',
  'fill-foreground',
]

type Calendar = {
  total: number
  weeks: [level: number, count: number, date: string][][]
}

function fmtDay(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

interface Tooltip {
  leftPct: number
  topPct: number
  text: string
}

export default function ContributionGraph() {
  const [calendar, setCalendar] = React.useState<Calendar | null>(null)
  const [tooltip, setTooltip] = React.useState<Tooltip | null>(null)
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    const controller = new AbortController()
    fetch('/api/contributions.json', { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.weeks?.length) setCalendar(data)
      })
      .catch(() => {})
    return () => controller.abort()
  }, [])

  if (!calendar) return null

  const weeks = calendar.weeks
  const width = weeks.length * (CELL + GAP) - GAP
  const height = 7 * (CELL + GAP) - GAP

  return (
    <div>
      {/* svg + tooltip share a positioning context that matches the svg box
          exactly — the caption below must not stretch the % coordinates */}
      <div className="relative">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="block w-full overflow-visible"
          role="img"
          aria-label={`${calendar.total} GitHub contributions in the last year`}
          onMouseLeave={() => setTooltip(null)}
        >
          {weeks.map((week, w) =>
            week.map(([level, count, date], d) => (
              // biome-ignore lint/a11y/noStaticElementInteractions: hover tooltip is a pointer-only enhancement; the data is exposed via the svg's aria-label
              <rect
                key={date}
                x={w * (CELL + GAP)}
                y={d * (CELL + GAP)}
                width={CELL}
                height={CELL}
                rx={2}
                className={`contrib-cell ${LEVEL_CLASSES[level] ?? LEVEL_CLASSES[0]}`}
                style={{ '--d': `${w * 8}ms` } as React.CSSProperties}
                onMouseEnter={() =>
                  setTooltip({
                    leftPct: ((w * (CELL + GAP) + CELL / 2) / width) * 100,
                    topPct: ((d * (CELL + GAP)) / height) * 100,
                    text: `${count} contribution${count === 1 ? '' : 's'} · ${fmtDay(date)}`,
                  })
                }
              />
            )),
          )}
        </svg>

        <AnimatePresence>
          {tooltip ? (
            // outer div owns position + centering; inner motion.div owns the
            // enter/exit transform so the two never fight over `transform`
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+3px)]"
              style={{
                left: `${tooltip.leftPct}%`,
                top: `${tooltip.topPct}%`,
                transition: reduceMotion
                  ? undefined
                  : 'left 120ms cubic-bezier(0.23,1,0.32,1), top 120ms cubic-bezier(0.23,1,0.32,1)',
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 0.96,
                  y: reduceMotion ? 0 : 2,
                }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformOrigin: 'bottom center' }}
                className="tooltip-glass whitespace-nowrap rounded-md px-2 py-1 font-mono text-[11px] text-foreground"
              >
                {tooltip.text}
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>

      <p className="mt-2 text-right font-mono text-[11px] text-muted-foreground">
        <a
          href="https://github.com/kishanhitk"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-150 hover:text-foreground"
        >
          {calendar.total.toLocaleString('en-US')} contributions in the last
          year ↗
        </a>
      </p>
    </div>
  )
}
