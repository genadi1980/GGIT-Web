import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'
import { PAGES } from './seo.js'
import './index.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are pre-rendered at build time (scripts/prerender.js) and
// tagged with their route. Hydrate only when that markup belongs to the current
// URL — a host SPA fallback (e.g. /payments served index.html) or the dev server
// gets a fresh client render instead of a hydration mismatch.
const path = location.pathname.length > 1 ? location.pathname.replace(/\/+$/, '') : '/'
const prerendered = container.dataset.route
const matches = prerendered === path || (prerendered === '/404' && !(path in PAGES))

if (container.firstElementChild && matches) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
