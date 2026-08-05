import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../site';
import { toDate } from '../utils/dates';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: toDate(post.data.pubDate),
        link: `/blog/${post.id}/`,
      })),
  });
}
