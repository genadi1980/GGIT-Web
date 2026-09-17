import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { BOOKING_URL } from '../seo.js'

const NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#kontakt' },
]

function Logo({ className }) {
  return (
    <img
      src="/logo-160.webp"
      alt=""
      width="40"
      height="40"
      className={`h-10 w-10 object-cover rounded-full bg-white p-0.5 border border-divider ${className}`}
    />
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header>
      <nav
        aria-label="Main"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 glass shadow-lg shadow-primary/10 border border-divider/50 rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#hjem" className="flex items-center gap-2.5 group" aria-label="GGIT home">
            <Logo className="shadow-md group-hover:scale-105 transition duration-300" />
            <span className="font-display font-black tracking-tight text-xl text-ink transition-colors">
              GGIT
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-base font-extrabold tracking-wide lift-on-hover text-ink hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Book Demo
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-full text-ink"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu — `inert` keeps hidden links out of the tab order */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-4 top-4 left-4 max-h-[85vh] rounded-3xl bg-surface border border-divider p-6 shadow-2xl transition-all duration-500 transform ${
            open ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-extrabold text-lg text-ink flex items-center gap-2.5">
              <Logo className="shadow-sm" />
              GGIT
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-background text-ink/70 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-ink/80 hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-1.5 bg-primary text-white py-3 rounded-2xl font-bold shadow-lg shadow-primary/30"
            >
              Book Demo
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
