/* ----------------------------------------------------------------
   Single source of truth for site-wide SEO metadata.
   Used by the client (document head updates on navigation) and by
   scripts/prerender.js (static HTML generation at build time).
---------------------------------------------------------------- */
export const SITE_URL = 'https://www.ggit.ai'
export const SITE_NAME = 'GGIT'
export const LEGAL_NAME = 'Global Group Intelligence Technologies Ltd'
export const PHONE_DISPLAY = '+1 (803) 982-3119'
export const PHONE_E164 = '+18039823119'
export const EMAIL = 'info@ggit.ai'
export const BOOKING_URL = 'https://calendar.app.google/jShLVgGnrGSahVDn7'

export const PAGES = {
  '/': {
    title: 'GiGi — 24/7 AI Voice Receptionist for Dental Clinics | GGIT',
    description:
      'GiGi by GGIT answers every dental patient call 24/7, books appointments straight into Dentrix, Open Dental and other PMS software, and answers clinic FAQs. Setup in 7 days. US, UK & Switzerland.',
  },
  '/payments': {
    title: 'Subscribe to GiGi AI Voice Assistant — Pricing & Payments | GGIT',
    description:
      'Subscribe to GiGi, the 24/7 AI voice receptionist for dental clinics: $250/month (US), £249/month (UK) or CHF 279/month (Switzerland). Secure checkout via Stripe.',
  },
  '/privacy': {
    title: 'Privacy Policy | GGIT — Global Group Intelligence Technologies Ltd',
    description:
      'How GGIT collects, uses and protects personal data across our website, GiGi AI voice agents and chatbots, including UK GDPR rights, retention periods and AI processing.',
  },
  '/terms': {
    title: 'Terms of Service | GGIT — Global Group Intelligence Technologies Ltd',
    description:
      'Terms of Service governing the GGIT website and B2B AI services, including GiGi AI voice agents, payment terms, AI-specific terms and governing law (England & Wales).',
  },
}

export const NOT_FOUND_META = {
  title: 'Page Not Found | GGIT',
  description: 'The page you are looking for does not exist.',
}

export function getPageMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const page = PAGES[path]
  return page
    ? { ...page, canonical: SITE_URL + (path === '/' ? '/' : path), noindex: false }
    : { ...NOT_FOUND_META, canonical: null, noindex: true }
}
