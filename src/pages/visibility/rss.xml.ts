import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { pillarPath, clusterPath } from '../../lib/urls';

export async function GET(context: APIContext) {
  const pillars = await getCollection(
    'pillars',
    ({ data }) => !data.draft && data.section === 'visibility',
  );
  const clusters = await getCollection('visibility', ({ data }) => !data.draft);
  const entries = [
    ...pillars.map((entry) => ({ entry, link: pillarPath(entry) })),
    ...clusters.map((entry) => ({ entry, link: clusterPath('visibility', entry) })),
  ];
  return rss({
    title: 'site.marketing — Search Visibility',
    description: 'Search visibility for existing websites: getting retrieved and cited by AI engines.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.entry.data.dateModified.valueOf() - a.entry.data.dateModified.valueOf())
      .map(({ entry, link }) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.dateModified,
        link,
      })),
  });
}
