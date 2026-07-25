import type { CollectionEntry } from 'astro:content';
export function pillarPath(entry: CollectionEntry<'pillars'>): string {
  const s = entry.data.slug;
  return s ? `/${s.replace(/^\/+|\/+$/g, '')}/` : `/${entry.id}/`;
}
