import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { clusterPath } from '../../lib/urls';

export async function GET(context: APIContext) {
  const entries = await getCollection('contentOps', ({ data }) => !data.draft);
  return rss({
    title: 'site.marketing — Content Operations',
    description: 'Content operations for live sites: pruning, merging, refreshing and expanding an existing inventory.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.data.dateModified.valueOf() - a.data.dateModified.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.dateModified,
        link: clusterPath('content', entry),
      })),
  });
}
