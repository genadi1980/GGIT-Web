/* oxlint-disable react/only-export-components -- server entry, not a component module */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'

export { getPageMeta, PAGES, SITE_URL } from './seo.js'
export { FAQS } from './content/faq.js'

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  )
}
