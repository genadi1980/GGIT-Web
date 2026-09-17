import { Link } from 'react-router-dom'
import { EMAIL, LEGAL_NAME, PHONE_DISPLAY, PHONE_E164 } from '../seo.js'

export default function Footer() {
  return (
    <footer className="relative bg-deep text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Block */}
          <div className="lg:col-span-2 text-left">
            <a href="#hjem" className="inline-flex items-center gap-2.5 mb-6 group">
              <img
                src="/logo-160.webp"
                alt=""
                width="36"
                height="36"
                loading="lazy"
                className="h-9 w-9 object-cover rounded-full bg-white p-0.5 border border-white/10 shadow-sm group-hover:scale-105 transition duration-300"
              />
              <span className="font-display font-bold tracking-tight text-lg text-white">ggit.ai</span>
            </a>
            <p className="text-white/60 text-sm max-w-sm mb-6 leading-relaxed">
              The clinical-grade AI Voice Assistant and automated workflow platform engineered exclusively for growing dental clinics.
            </p>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-[10px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              System Operational · Live Sync Active
            </div>
          </div>

          {/* Services Links */}
          <nav className="text-left" aria-label="AI solutions">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-4">AI Solutions</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="#services" className="hover:text-white transition">24/7 Voice Reception</a></li>
              <li><a href="#services" className="hover:text-white transition">PMS Calendar Sync</a></li>
              <li><a href="#services" className="hover:text-white transition">Clinical FAQ Playbooks</a></li>
              <li><a href="#services" className="hover:text-white transition">Outbound Recall Agents</a></li>
            </ul>
          </nav>

          {/* Company Links */}
          <nav className="text-left" aria-label="Platform">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-4">Platform</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="#problem" className="hover:text-white transition">The Problem</a></li>
              <li><a href="#proces" className="hover:text-white transition">The Protocol</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Lost Revenue Calculator</a></li>
              <li><a href="#showcase" className="hover:text-white transition">System Showcase</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><Link to="/payments" className="hover:text-white transition text-primary-light font-medium">Pricing & Payments</Link></li>
            </ul>
          </nav>

          {/* Contact Details */}
          <div className="text-left">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-4">Direct Contact</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <span className="font-semibold text-white">Phone:</span>{' '}
                <a href={`tel:${PHONE_E164}`} className="hover:text-white transition">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition">{EMAIL}</a>
              </li>
              <li><span className="font-semibold text-white">Hours:</span> 24 / 7 / 365</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center gap-4 text-xs text-white/40">
          <p className="font-semibold text-white/80 text-sm">{LEGAL_NAME.toUpperCase()}</p>
          <address className="max-w-md not-italic">41 Rowan Court Peter Street, Folkestone, England CT20 1JE</address>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full mt-4 border-t border-white/5 pt-4">
            <div suppressHydrationWarning>
              © {new Date().getFullYear()} GGIT. All rights reserved. | Built in Switzerland
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
