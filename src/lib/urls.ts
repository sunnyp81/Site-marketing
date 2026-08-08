import type { CollectionEntry } from 'astro:content';

export function pillarPath(entry: CollectionEntry<'pillars'>): string {
  const s = entry.data.slug;
  return s ? `/${s.replace(/^\/+|\/+$/g, '')}/` : `/${entry.id}/`;
}

// Cluster collections resolve their route from frontmatter `slug` exactly the way
// the strategy collection does: take the last path segment and hang it off the
// section base. Frontmatter is authoritative — never hardcode a route.
type ClusterEntry = { id: string; data: { slug?: string } };

export function clusterSlug(entry: ClusterEntry): string {
  const s = entry.data.slug;
  return s ? s.replace(/^\/+|\/+$/g, '').split('/').pop()! : entry.id;
}

export function clusterPath(base: string, entry: ClusterEntry): string {
  return `/${base.replace(/^\/+|\/+$/g, '')}/${clusterSlug(entry)}/`;
}
