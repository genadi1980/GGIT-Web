/* ----------------------------------------------------------------
   Build-time pre-rendering.

   Renders every route to static HTML so search engines, AI crawlers
   (GPTBot, ClaudeBot, PerplexityBot… which don't execute JavaScript)
   and social link previews get real content and per-page metadata.
   The client then hydrates the markup (see src/main.jsx).

   Runs after `vite build` and `vite build --ssr` — see package.json.
---------------------------------------------------------------- */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, getPageMeta, PAGES, SITE_URL, FAQS } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender: tag not found in template: ${pattern}`)
  return html.replace(pattern, replacement)
}

function buildPage(route) {
  const meta = getPageMeta(route)
  const title = escapeAttr(meta.title)
  const desc = escapeAttr(meta.description)
  let html = template

  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = setTag(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${desc}" />`)
  html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
  html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${desc}" />`)
  html = setTag(html, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
  html = setTag(html, /<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${desc}" />`)
  html = setTag(
    html,
    /<meta name="robots" content="[^"]*"\s*\/>/,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`
  )

  if (meta.canonical) {
    html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${meta.canonical}" />`)
    html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${meta.canonical}" />`)
  } else {
    html = setTag(html, /\s*<link rel="canonical" href="[^"]*"\s*\/>/, '')
  }

  const faqLd =
    route === '/'
      ? jsonLd({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        })
      : ''
  html = setTag(html, /<!--faq-jsonld-->/, faqLd)
  html = setTag(html, /<div id="root"><!--app-html--><\/div>/, `<div id="root" data-route="${route}">${render(route)}</div>`)

  return html
}

function writeFile(relPath, contents) {
  const file = path.join(distDir, relPath)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, contents)
  console.log(`  ✓ ${relPath} (${(Buffer.byteLength(contents) / 1024).toFixed(1)} kB)`)
}

console.log('Pre-rendering routes:')
for (const route of Object.keys(PAGES)) {
  writeFile(route === '/' ? 'index.html' : `${route.slice(1)}/index.html`, buildPage(route))
}
writeFile('404.html', buildPage('/404'))

// sitemap.xml — generated from the same page list
const today = new Date().toISOString().slice(0, 10)
const priority = { '/': '1.0', '/payments': '0.8' }
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(PAGES)
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority[route] ?? '0.3'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
writeFile('sitemap.xml', sitemap)

fs.rmSync(ssrDir, { recursive: true, force: true })
