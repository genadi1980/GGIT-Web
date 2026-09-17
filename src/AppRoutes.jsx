import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import Payments from './pages/Payments.jsx'
import NotFound from './pages/NotFound.jsx'
import { getPageMeta } from './seo.js'

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/* Keeps <head> in sync on client-side navigation and resets scroll
   position (unless navigating to an in-page #anchor). */
function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const meta = getPageMeta(pathname)
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
    setMeta('meta[name="robots"]', 'content', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    if (meta.canonical) {
      setMeta('link[rel="canonical"]', 'href', meta.canonical)
      setMeta('meta[property="og:url"]', 'content', meta.canonical)
    }
  }, [pathname])

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

export default function AppRoutes() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
