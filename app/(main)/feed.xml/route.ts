import RSS from 'rss'

import { siteConfig } from '~/config/siteMetadata'
import { getLatestBlogPosts } from '~/sanity/queries'

export const revalidate = 60 * 60 // 1 hour

export async function GET() {
  const feed = new RSS({
    title: siteConfig.authors + siteConfig.name,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}feed.xml`,
    language: siteConfig.locale,
    image_url: `${siteConfig.url}opengraph-image.webp`,
    generator: 'PHP 9.0',
  })

  const data = await getLatestBlogPosts({ limit: 999 })
  if (!data) {
    return new Response('Not found', { status: 404 })
  }

  data.forEach((post) => {
    feed.item({
      title: post.title,
      guid: post._id,
      url: `${siteConfig.url}blog/${post.slug}`,
      description: post.description,
      date: new Date(post.publishedAt),
      enclosure: {
        url: post.mainImage.asset.url,
      },
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
