import { XMLParser } from 'fast-xml-parser'
import type { HashnodePost, HashnodePostFull } from '../types/hashnode'

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
})

const getRssUrl = (host: string) => `https://${host}/rss.xml`

const normalizeItems = (items: unknown) => {
  if (!items) return []
  return Array.isArray(items) ? items : [items]
}

const getSlugFromUrl = (url: string) => {
  const pathname = new URL(url).pathname
  return pathname.split('/').filter(Boolean).at(-1) ?? ''
}

const getRssPosts = async (host: string): Promise<HashnodePostFull[]> => {
  const response = await fetch(getRssUrl(host), {
    headers: {
      Accept: 'application/rss+xml, application/xml, text/xml',
    },
  })

  if (!response.ok) {
    throw new Error(`Hashnode RSS returned ${response.status}`)
  }

  const feed = parser.parse(await response.text())
  const items = normalizeItems(feed.rss?.channel?.item)

  return items.map((item: any) => {
    const url = item.link
    const publishedAt = new Date(item.pubDate).toISOString()

    return {
      title: item.title,
      slug: getSlugFromUrl(url),
      brief: item.description ?? '',
      url,
      publishedAt,
      updatedAt: publishedAt,
      coverImage: {
        url: item.enclosure?.url ?? '',
      },
      content: {
        markdown: '',
        html: item['content:encoded'] ?? item.description ?? '',
      },
    }
  })
}

export const getAllPostByUsername = async (
  host: string,
): Promise<HashnodePost[]> => {
  return getRssPosts(host)
}

export const getPostBySlug = async (
  slug: string,
  hostname: string,
): Promise<HashnodePostFull> => {
  const post = (await getRssPosts(hostname)).find((post) => post.slug === slug)
  if (!post) throw new Error(`Could not find Hashnode post "${slug}"`)
  return post
}

export const getPostMetadataBySlug = getPostBySlug
