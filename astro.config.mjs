import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Zero-dependency rehype plugin: wrap every markdown <table> in
// <div class="table-scroll"> so horizontal overflow lives on the wrapper
// while the table itself keeps native table display (accessibility tree intact).
// Zero-dependency rehype plugin: strip every HTML comment from the rendered
// output. Comments in markdown source (PRODUCTION NOTES editorial blocks, and
// the `<!-- relink: /target/ -->` de-link markers) otherwise ship verbatim in
// dist HTML — readable by every AI crawler the site invites in. This removes
// them from output while leaving them intact in the repo source.
function rehypeStripComments() {
  const isCommentRaw = (node) =>
    node?.type === 'raw' && /^\s*<!--[\s\S]*-->\s*$/.test(node.value || '');

  const strip = (node) => {
    if (!node || !Array.isArray(node.children)) return;
    node.children = node.children.filter(
      (child) => child?.type !== 'comment' && !isCommentRaw(child),
    );
    for (const child of node.children) strip(child);
  };

  return (tree) => strip(tree);
}

function rehypeTableScroll() {
  const hasScrollClass = (node) =>
    node?.type === 'element' &&
    Array.isArray(node.properties?.className) &&
    node.properties.className.includes('table-scroll');

  const visit = (node) => {
    if (!node || !Array.isArray(node.children)) return;
    node.children = node.children.map((child) => {
      if (child?.type === 'element' && child.tagName === 'table' && !hasScrollClass(node)) {
        visit(child);
        return {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'] },
          children: [child],
        };
      }
      visit(child);
      return child;
    });
  };

  return (tree) => visit(tree);
}

export default defineConfig({
  site: 'https://site.marketing',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/ops/'),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeStripComments, rehypeTableScroll],
  },
  build: { format: 'directory' },
});
