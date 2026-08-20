import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Menu,
  X,
  Upload,
  ArrowRight,
  Activity,
  Calendar,
  Bot,
  Zap,
  Sparkles,
  AlertCircle,
  MessageSquareCode,
  Shield,
  Layers,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content for GGIT.AI (Dental AI Voice Assistant)
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#kontakt' },
]

const SERVICES_FULL = [
  {
    icon: Phone,
    title: '24/7 AI Voice Reception',
    text: 'Answers every patient call instantly on the first ring, 24/7/365. No more holds, no busy signals, and zero voicemails left cold.',
  },
  {
    icon: Calendar,
    title: 'Smart PMS Sync Scheduling',
    text: 'Checks live open slots in your dental software (Dentrix, Open Dental, etc.) and books appointments directly during the call.',
  },
  {
    icon: MessageSquareCode,
    title: 'Accurate Clinic FAQs',
    text: 'Answers local patient questions regarding parking spots, pricing tiers, accepted insurances, and pre/post-op care guidelines.',
  },
  {
    icon: Bot,
    title: 'Automated Recalls',
    text: 'Runs outbound voice agent campaigns to reactivate past patient databases, fill last-minute cancelations, and schedule cleanings.',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA & GDPR Guarded',
    text: 'Engineered with military-grade 256-bit encryption. Fully compliant with US HIPAA, UK GDPR, and Swiss FADP privacy architectures.',
  },
  {
    icon: Zap,
    title: 'Done-For-You Integration',
    text: 'Our systems engineers map your clinic guidelines and set up call routing in under 7 days. Your team needs zero training.',
  },
]

/* ----------------------------------------------------------------
   CountUp Helper Component
---------------------------------------------------------------- */
function CountUp({ end, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTs = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - startTs) / duration)
          const eased = 1 - Math.pow(1 - t, 3) // Ease out cubic
          setValue(Math.round(end * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])

  return <span ref={ref} className="tabular-nums font-extrabold">{value}{suffix}</span>
}

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 glass shadow-lg shadow-primary/10 border border-divider/50 rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#hjem" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="ggit.ai logo"
              className="h-10 w-10 object-cover rounded-full bg-white p-0.5 border border-divider shadow-md group-hover:scale-105 transition duration-300"
            />
            <span
              className="font-display font-black tracking-tight text-xl text-ink transition-colors"
            >
              GGIT
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-extrabold tracking-wide lift-on-hover text-ink hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://calendar.app.google/jShLVgGnrGSahVDn7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Book Demo
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-full text-ink"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-deep/90 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-4 top-4 left-4 max-h-[85vh] rounded-3xl bg-surface border border-divider p-6 shadow-2xl transition-all duration-500 transform ${
            open ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-extrabold text-lg text-ink flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="ggit.ai logo"
                className="h-10 w-10 object-cover rounded-full bg-white p-0.5 border border-divider shadow-sm"
              />
              GGIT
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-background text-ink/70 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
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
              href="https://calendar.app.google/jShLVgGnrGSahVDn7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-1.5 bg-primary text-white py-3 rounded-2xl font-bold shadow-lg shadow-primary/30"
            >
              Book Demo
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Interactive Calls Shuffler
---------------------------------------------------------------- */
function CallsShuffler() {
  const items = [
    { tag: 'Voice Agent', label: 'Dental Emergency: "I broke a tooth & need a slot tonight!"', metric: 'Booked in 42s' },
    { tag: 'Clinical FAQ', label: 'Patient Inquiry: "Do you take MetLife & is parking free?"', metric: 'Answered instantly' },
    { tag: 'Database Recall', label: 'Cleaning Campaign: "Schedule routine scaling automatically"', metric: 'Sync: 100%' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.metric}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{
                    background: idx < 24 - offset * 6 ? '#6366f1' : '#E2E8F0',
                  }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Re-skinned Soundwave Signature Animation
---------------------------------------------------------------- */
function AIVoiceStream() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(14)

  const statuses = [
    { text: 'System Online · Listening 24/7', label: 'Active', tone: 'emerald' },
    { text: 'Answering incoming patient call...', label: 'Active', tone: 'accent' },
    { text: 'Checking PMS scheduling calendar...', label: 'Query', tone: 'primary' },
    { text: 'Booking complete · confirmation SMS sent!', label: 'Success', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Success') {
          setCount((c) => c + 1)
        }
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const signalNodes = [
    { left: '15%', delay: '0.0s', dur: '2.6s', size: 10 },
    { left: '25%', delay: '1.3s', dur: '3.0s', size: 8 },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 12 },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 9 },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 11 },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 8 },
    { left: '85%', delay: '0.4s', dur: '2.9s', size: 10 },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-600' :
    status.tone === 'accent' ? 'text-accent-dark' :
    'text-primary-dark'
  const toneDot =
    status.tone === 'emerald' ? 'bg-emerald-500' :
    status.tone === 'accent' ? 'bg-accent animate-ping' :
    'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/30 shadow-inner"
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
      }}
    >
      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Atmospheric blue blobs */}
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/70 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/60 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20 bg-white px-2.5 py-1.5 rounded-full border border-divider shadow-sm">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary font-bold animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink font-extrabold">
            Real-Time Latency
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-black text-sm text-primary tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink font-black">
            calls handled
          </span>
        </div>
      </div>

      {/* Audio Waveform Beam */}
      <svg
        className="absolute left-3 right-3 top-14 h-5"
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
      >
        <rect x="0" y="6" width="400" height="8" rx="4" fill="#6366f1" fillOpacity="1.0" />
        <rect x="0" y="7" width="400" height="2" fill="#4f46e5" fillOpacity="1.0" />
        <circle cx="10" cy="10" r="4.5" fill="#4f46e5" />
        <circle cx="390" cy="10" r="4.5" fill="#4f46e5" />
        {[60, 152, 248, 340].map((x) => (
          <g key={x}>
            <circle cx={x} cy="10" r="3.5" fill="#6366f1" />
          </g>
        ))}
      </svg>

      {/* Falling Voice Particles */}
      <div className="absolute inset-x-0 top-16 bottom-11 overflow-hidden">
        {signalNodes.map((n, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-dark"
            style={{
              left: n.left,
              width: `${n.size}px`,
              height: `${n.size}px`,
              animation: `rain-fall ${n.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${n.delay} infinite`,
              boxShadow: '0 0 10px rgba(79, 70, 229, 1.0)',
              transform: 'translateX(-50%)',
            }}
          />
        ))}

        {/* Waves Ripples */}
        {ripples.map((r, i) => (
          <div
            key={i}
            className="absolute bottom-0 h-1.5 border border-primary rounded-full"
            style={{
              left: r.left,
              width: '60px',
              animation: `rain-ripple 3.2s cubic-bezier(0.1,0.8,0.3,1) ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Fluctuating Audio Surface Waveform (bottom) */}
      <svg
        className="absolute bottom-8 left-0 right-0 h-5"
        viewBox="0 0 400 16"
        preserveAspectRatio="none"
      >
        <path
          d="M0,8 Q50,0 100,8 T200,8 T300,8 T400,8 L400,16 L0,16 Z"
          fill="#6366f1"
          fillOpacity="1.0"
          className="animate-pulse"
        />
        <path
          d="M0,8 Q30,12 80,8 T180,8 T280,8 T380,8 L400,16 L0,16 Z"
          fill="#4f46e5"
          fillOpacity="1.0"
        />
      </svg>

      {/* Footer status strip */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 z-20 bg-white px-2.5 py-1 rounded-full border border-divider shadow-sm justify-center">
        <span className={`h-2.5 w-2.5 rounded-full ${toneDot} transition-all duration-300`} />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-black text-ink transition-all duration-300">
          {status.text}
        </span>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Scheduler Animation (Direct PMS Booking)
---------------------------------------------------------------- */
function AppointmentScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0) // 0..4
  const activeDay = 3 // Thursday

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 }
      case 1:
        return { x: 60, y: 60, opacity: 1 }
      case 2:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4:
        return { x: 130, y: 130, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Active Slots · April
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          PMS Live Sync
        </span>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 14}</span>
          </div>
        ))}
      </div>

      {/* Save button */}
      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4
            ? 'bg-primary text-white scale-[1.02] shadow-md shadow-primary/30'
            : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Booking Sync Completed' : 'Analyzing available slots...'}
      </button>

      {/* Animated cursor */}
      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3L19 12L12 13L9 20L5 3Z"
            fill="#1A1A1A"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Main Application Page Component
---------------------------------------------------------------- */
export default function App() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)

  // Carousel State (Showcase Gallery)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoSlide, setAutoSlide] = useState(true)
  const [heroBgIdx, setHeroBgIdx] = useState(0)
  const slidesCount = 6

  // Hero background slider rotation effect (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIdx((prev) => (prev + 1) % 6)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Lost Revenue Calculator State
  const [missedCalls, setMissedCalls] = useState(50)
  const lostPatients = Math.round(missedCalls * 0.20)
  const lostRevenue = lostPatients * 500

  // Contact Form State
  const [formState, setFormState] = useState('idle') // 'idle' | 'sending' | 'sent'
  const [contactMode, setContactMode] = useState('calendar') // 'calendar' | 'form'
  const [uploadedFiles, setFiles] = useState([])
  const fileInputRef = useRef(null)

  // pricing currency state
  const [currency, setCurrency] = useState('US')
  const pricingPlans = {
    'US': { price: '$250', unit: '/month' },
    'UK': { price: '£249', unit: '/month' },
    'CH': { price: 'CHF 279', unit: '/month' }
  }

  // Refesh ScrollTrigger once mounted
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  // Hero animation stagger
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.12, ease: 'power3.out' })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // Feature cards are statically 100% visible on mount (no animations or opacity transitions to avoid loading issues)

  // Card shuffler interval for Showcase slides
  useEffect(() => {
    if (!autoSlide) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount)
    }, 4500)
    return () => clearInterval(interval)
  }, [autoSlide])

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
    }, 1500)
  }

  // Drag-and-drop file upload helpers
  const handleFileDrop = (e) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files).slice(0, 5)
    setFiles((prev) => [...prev, ...files].slice(0, 5))
  }

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files).slice(0, 5)
    setFiles((prev) => [...prev, ...files].slice(0, 5))
  }

  return (
    <div className="relative bg-background text-ink">
      <div className="noise-overlay" />
      
      <Navbar />

      {/* 1. HERO SECTION */}
      <section
        id="hjem"
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden clip-wave border-b border-divider"
      >
        {/* Background Image Carousel of Clinical Dental office (100% opaque, zero transparency) */}
        <div className="absolute inset-0 z-0">
          {[1, 2, 3, 4, 5, 6].map((num, idx) => (
            <div
              key={num}
              style={{
                backgroundImage: `url('/${num}.jpg')`,
                opacity: heroBgIdx === idx ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
              }}
              className="absolute inset-0 bg-cover bg-center"
            />
          ))}
          {/* No overlays covering the carousel images */}
        </div>

        {/* Floating digital particles */}
        <div className="absolute top-20 right-20 hidden md:block w-48 h-48 bg-primary/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 hidden md:block w-72 h-72 bg-accent/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Decorative Grid Mesh */}
        <div className="absolute inset-0 grid-bg z-0 pointer-events-none opacity-20" />

        {/* Buttons at the bottom of the carousel pictures */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 w-full max-w-4xl px-6 text-center">
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/jShLVgGnrGSahVDn7"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-primary/25"
            >
              Secure My Free Demo
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
            <a
              href="tel:+18039823119"
              className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-divider hover:bg-background text-ink font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Call GiGi Live: +1 (803) 982-3119 🔊
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none">
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted/60 font-bold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. THE PROBLEM & SOLUTION SECTION (UNIFIED) */}
      <section id="problem" className="relative py-24 bg-slate-50 border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Main Solution Headers */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
              Clinical-Grade AI Voice Automation
            </span>
            
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display tracking-tight text-ink leading-[1.05]">
              Book More Patients <br />
              <span className="font-serif italic text-primary-dark">With AI Automation</span>
            </h2>

            <p className="font-body text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The 24/7 AI Voice Assistant.
            </p>
          </div>

          {/* Combined Hard Reality Divider */}
          <div className="text-center max-w-3xl mx-auto mt-20 mb-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink">
              Your Dental Clinic Closes. <span className="text-rose-500 italic">Patient Phone Calls Don't.</span>
            </h3>
          </div>

          {/* 3 Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-divider p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl mb-4">🚨</div>
              <h4 className="text-xl font-bold font-display text-ink mb-2">35% Missed Revenue</h4>
              <p className="text-muted text-sm leading-relaxed">
                Over a third of clinic booking requests happen outside office hours. Automated dental systems secure this revenue directly without extra receptionist overhead.
              </p>
            </div>
            <div className="bg-white border border-divider p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl mb-4">😰</div>
              <h4 className="text-xl font-bold font-display text-ink mb-2">Overwhelmed Staff</h4>
              <p className="text-muted text-sm leading-relaxed">
                Your reception desk starts every chaotic morning stressed, sorting through a mountain of messy, garbled, or incomplete evening voicemails.
              </p>
            </div>
            <div className="bg-white border border-divider p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold font-display text-ink mb-2">Friction-Full Bookings</h4>
              <p className="text-muted text-sm leading-relaxed">
                Emergency patients in severe pain demand immediate, confirmed appointments. They cannot wait hours for a callback next morning.
              </p>
            </div>
          </div>

          {/* Security compliance seal at the bottom of the section */}
          <div className="pt-8 border-t border-divider/60 text-center">
            <p className="text-[11px] font-mono uppercase tracking-widest text-muted/80 flex items-center justify-center gap-1.5 font-bold">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              US HIPAA, UK GDPR & Swiss FADP Compliant Data Architectures
            </p>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE FEATURES SECTION */}
      <section ref={sectionRef} id="how-it-works" className="relative py-32 grid-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">Interactive Showcase</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-ink mt-3">
              Automate Clinic Workflows in Real-Time
            </h2>
            <p className="text-muted text-base sm:text-lg font-body mt-4 leading-relaxed">
              Experience the visual live mechanics behind ggit.ai's clinical integrations and real-time appointment scheduler engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 relative z-10">
            {/* Feature Card A */}
            <div className="feature-card bg-surface border border-divider rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-ink/5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-extrabold block mb-2">Live Dialogues</span>
                <h3 className="text-2xl font-bold font-display text-ink mb-4">Conversational Agent</h3>
                <CallsShuffler />
              </div>
              <p className="text-ink text-sm mt-6 leading-relaxed">
                Qualifies emergency toothaches, handles routine scaler scheduling, and explains accepted dental insurances automatically with zero latency.
              </p>
            </div>

            {/* Feature Card B */}
            <div className="feature-card bg-surface border border-divider rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-ink/5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-extrabold block mb-2">Streaming Stream</span>
                <h3 className="text-2xl font-bold font-display text-ink mb-4">AIVoiceStream™ Loop</h3>
                <AIVoiceStream />
              </div>
              <p className="text-ink text-sm mt-6 leading-relaxed">
                Visualizes real-time soundwave packet processing and instant calendar queries with human-like, friendly phone dialogue guidelines.
              </p>
            </div>

            {/* Feature Card C */}
            <div className="feature-card bg-surface border border-divider rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-ink/5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-extrabold block mb-2">Integration Engine</span>
                <h3 className="text-2xl font-bold font-display text-ink mb-4">Smart PMS Calendar</h3>
                <AppointmentScheduler />
              </div>
              <p className="text-ink text-sm mt-6 leading-relaxed">
                Connects directly to your practice calendar software. Automatically searches, matches, and writes confirmed slots instantly into the database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILLARS / STATISTICS SECTION */}
      <section className="relative py-24 bg-white border-y border-divider overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-divider gap-12 lg:gap-0">
            {/* Stat Pillar 1 */}
            <div className="text-center lg:px-12 relative overflow-hidden group">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted font-bold">Revenue Recovered</span>
              <div className="text-6xl sm:text-7xl font-extrabold text-ink font-display mt-2 mb-4">
                <CountUp end={35} suffix="%" />
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                Of high-value dental appointments and clean consults booked outside typical 9-to-5 working hours.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[3s] infinite" />
            </div>

            {/* Stat Pillar 2 */}
            <div className="text-center lg:px-12 pt-12 lg:pt-0 relative overflow-hidden group">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted font-bold">Calendar Synchronized</span>
              <div className="text-6xl sm:text-7xl font-extrabold text-ink font-display mt-2 mb-4">
                <CountUp end={100} suffix="%" />
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                Automated calendar write rate directly to major practice management softwares (PMS) with zero double-booking risk.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[3s] infinite" />
            </div>

            {/* Stat Pillar 3 */}
            <div className="text-center lg:px-12 pt-12 lg:pt-0 relative overflow-hidden group">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted font-bold">Receptionist Uptime</span>
              <div className="text-6xl sm:text-7xl font-extrabold text-ink font-display mt-2 mb-4">
                <CountUp end={24} suffix="/7" />
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                Seamless call answering performance without sick leaves, coffee breaks, holidays, or busy-signal limits.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[3s] infinite" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE LOST REVENUE CALCULATOR */}
      <section id="calculator" className="relative py-32 bg-background border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">ROI Calculator</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-ink mt-3">
              Calculate Your Practice Losses
            </h2>
            <p className="text-muted text-base sm:text-lg font-body mt-4 leading-relaxed">
              Drag or adjust your estimated missed patient calls below to calculate the real, monthly revenue slipping through your clinic phone lines to voicemail.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white border border-divider rounded-3xl p-8 sm:p-12 shadow-2xl shadow-ink/5 mt-16 text-center">
            <div className="mb-10 max-w-md mx-auto">
              <label htmlFor="callsRange" className="block text-lg font-bold font-display text-ink mb-4">
                Average Missed Calls Per Month
              </label>
              <div className="flex items-center justify-center gap-4 mb-3">
                <input
                  type="range"
                  id="callsRange"
                  min="5"
                  max="200"
                  step="5"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                  className="w-full h-2 bg-divider rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="font-display font-extrabold text-3xl text-primary w-16 tabular-nums">{missedCalls}</span>
              </div>
              <p className="text-muted text-xs font-mono">Drag slider to adjust values</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-divider">
              <div className="bg-background rounded-2xl p-6 border border-divider">
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-muted font-bold">Lost Patient Bookings</h4>
                <div className="text-4xl font-extrabold text-ink font-display mt-2 tabular-nums">
                  {lostPatients}
                </div>
                <p className="text-[10px] text-muted mt-2">Based on conservative 20% scheduling efficiency.</p>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-primary/10 shadow-lg shadow-primary/5">
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">Lost Monthly Revenue</h4>
                <div className="text-4xl font-extrabold text-red-500 font-display mt-2 tabular-nums">
                  ${lostRevenue.toLocaleString()}
                </div>
                <p className="text-[10px] text-muted mt-2">Assumes $500 dental patient lifetime value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROTOCOL / STICKY STACK PROCESS */}
      <section id="proces" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">The Protocol</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-ink mt-3">
              3 Steps to Complete Automation
            </h2>
            <p className="text-muted text-base sm:text-lg font-body mt-4 leading-relaxed">
              A seamless, highly integrated pipeline designed to elevate patient intake and synchronizations with zero friction.
            </p>
          </div>

          {/* Sticky overlapping steps */}
          <div className="space-y-16 max-w-5xl mx-auto relative">
            {/* Step 1 */}
            <div className="bg-background border border-divider rounded-3xl p-8 sm:p-12 shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-left">
                  <span className="font-mono text-xs text-primary font-extrabold block mb-2">Step 01</span>
                  <h3 className="text-3xl font-extrabold font-display text-ink mb-4">Patient Calls Your Clinic</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Whether they dial on a Sunday evening, during dental clinic closure, or during extreme front-desk busy hours, your call is immediately intercepted.
                  </p>
                  <ul className="space-y-2 text-sm text-ink/80 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Immediate response in 0.2s
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Multi-line concurrent answering
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600"
                    alt="Dental Patient Calling"
                    className="w-full h-48 sm:h-64 object-cover rounded-2xl border border-divider shadow"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-background border border-divider rounded-3xl p-8 sm:p-12 shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-left">
                  <span className="font-mono text-xs text-primary font-extrabold block mb-2">Step 02</span>
                  <h3 className="text-3xl font-extrabold font-display text-ink mb-4">AI Dialogues and Qualifies</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Our human-sounding voice agent fields inquiries, provides clinical answers to parking/pricing details, and gauges the emergency level of the dental toothache.
                  </p>
                  <ul className="space-y-2 text-sm text-ink/80 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Warm, professional in-office tone
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Expert clinical FAQ guidelines
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                    alt="AI Dental Assistant Conversing"
                    className="w-full h-48 sm:h-64 object-cover rounded-2xl border border-divider shadow"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-background border border-divider rounded-3xl p-8 sm:p-12 shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-left">
                  <span className="font-mono text-xs text-primary font-extrabold block mb-2">Step 03</span>
                  <h3 className="text-3xl font-extrabold font-display text-ink mb-4">Direct Sync to Calendar & SMS</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    The voice system checks, reserves, and writes the timeslot straight into your dental practice management software (PMS). Patient receives an immediate booking confirmation SMS.
                  </p>
                  <ul className="space-y-2 text-sm text-ink/80 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Real-time Dentrix / Open Dental sync
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Automated appointment reminders SMS
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600"
                    alt="Clinic Calendar Sync"
                    className="w-full h-48 sm:h-64 object-cover rounded-2xl border border-divider shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SHOWCASE GALLERY / CAROUSEL SECTION */}
      <section id="showcase" className="relative py-32 bg-background border-y border-divider">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">GGIT.AI In Action</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-ink mt-3">
              Interactive System Showcase
            </h2>
            <p className="text-muted text-base sm:text-lg font-body mt-4 leading-relaxed">
              Study the visual workflows, dashboards, and advanced pipeline configurations created by our system integration engineers.
            </p>
          </div>

          <div
            className="relative max-w-4xl mx-auto h-[320px] sm:h-[480px] bg-white border border-divider rounded-3xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setAutoSlide(false)}
            onMouseLeave={() => setAutoSlide(true)}
          >
            {/* Carousel track */}
            <div
              className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: slidesCount }).map((_, idx) => (
                <div key={idx} className="min-w-full h-full relative">
                  <img
                    src={`/${idx + 1}.jpg`}
                    alt={`AI System Workflow ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback image in case static images are missing
                      e.target.src = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200`
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
                    <span className="font-mono text-[10px] text-primary-light uppercase tracking-widest font-semibold">Workflow Configuration</span>
                    <h4 className="text-white font-display font-bold text-lg sm:text-xl mt-1">Dental Practice Integration Model {idx + 1}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-primary hover:text-white text-ink flex items-center justify-center shadow-lg border border-divider z-20 transition"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slidesCount)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-primary hover:text-white text-ink flex items-center justify-center shadow-lg border border-divider z-20 transition"
            >
              ›
            </button>

            {/* Navigation dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {Array.from({ length: slidesCount }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-6 bg-primary' : 'w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Live AI Assistant Demo */}
          <div className="mt-28 text-center max-w-4xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">Live Interaction</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink mt-3 mb-4">
              Test GiGi — Your 24/7 AI Voice & Chat Assistant
            </h3>
            <p className="text-muted text-sm sm:text-base font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Chat with GiGi live. Ask dental-related questions, practice management scenarios, or try booking a demo appointment to see how our clinical agent responds instantly.
            </p>

            <div className="glass rounded-3xl p-2 max-w-4xl mx-auto border border-divider shadow-xl overflow-hidden bg-white/50">
              <iframe
                src="https://buildmyagent.io/shared/s4CVIQRME2?embed=true"
                width="100%"
                height="500"
                className="rounded-2xl bg-white"
                style={{ border: 'none', width: '100%', height: '500px' }}
                allowFullScreen
                loading="lazy"
                title="GiGi AI Assistant Live Demo"
                allow="microphone; camera; clipboard-write; read-clipboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. SERVICES GRID (DARK THEME TILE SECTION) */}
      <section id="services" className="relative py-32 bg-deep text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-light font-bold">Solutions Stack</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white mt-3">
              Full Suite Clinical Integrations
            </h2>
            <p className="text-white/60 text-base sm:text-lg font-body mt-4 leading-relaxed">
              We construct custom playbooks, call redirections, and SMS trigger protocols tailored directly for your specific practice size.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {SERVICES_FULL.map((s, idx) => {
              const IconComp = s.icon
              return (
                <div key={idx} className="bg-deep p-8 sm:p-10 hover:bg-white/[0.02] transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary-light group-hover:text-white group-hover:bg-primary/20 transition-all duration-300 mb-6">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 9. TRUST SIGNALS SECTION */}
      <section className="relative py-32 bg-white border-b border-divider">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">Trust & Compliance</span>
          <h2 className="text-4xl font-extrabold font-display tracking-tight text-ink mt-3 mb-16">
            Engineered to Swiss & US Compliance Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-divider rounded-2xl p-6 shadow-sm hover:translate-y-[-2px] transition duration-300">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold font-display text-ink mb-2">HIPAA Compliance</h4>
              <p className="text-muted text-xs leading-relaxed">
                Full end-to-end patient metadata and audio protection. We securely process data under strict Business Associate Agreement (BAA) guidelines.
              </p>
            </div>

            <div className="border border-divider rounded-2xl p-6 shadow-sm hover:translate-y-[-2px] transition duration-300">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold font-display text-ink mb-2">Swiss FADP Secured</h4>
              <p className="text-muted text-xs leading-relaxed">
                Our server storage clusters and API gateways align tightly with Swiss data security acts and global GDPR standards.
              </p>
            </div>

            <div className="border border-divider rounded-2xl p-6 shadow-sm hover:translate-y-[-2px] transition duration-300">
              <div className="w-12 h-12 bg-accent/5 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold font-display text-ink mb-2">Zero-Training Needed</h4>
              <p className="text-muted text-xs leading-relaxed">
                We handle the heavy lifting. Simply set up call forwarding from your existing landline to ggit.ai. No complex hardware required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT FORM SECTION */}
      <section id="kontakt" className="relative py-32 bg-background border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact cards */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">Contact</span>
                <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-ink mt-3 mb-6">
                  Book a LiveWalkthrough
                </h2>
                <p className="text-muted text-base leading-relaxed mb-10">
                  Connect with our systems engineers to audit your clinic's missed call ratios and map out a custom voice guidelines playbook.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white border border-divider flex items-center justify-center text-primary shadow-sm">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Call Us</h4>
                      <p className="text-ink font-semibold">+1 (803) 982-3119</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white border border-divider flex items-center justify-center text-primary shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Email Us</h4>
                      <p className="text-ink font-semibold">info@ggit.ai</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white border border-divider flex items-center justify-center text-primary shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Locations</h4>
                      <p className="text-ink font-semibold">Switzerland & United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-divider text-xs text-muted leading-relaxed">
                *We sign formal Business Associate Agreements (BAAs) with all HIPAA-covered dental practitioners prior to voice stream activations.
              </div>
            </div>

            {/* Form card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-divider rounded-3xl p-8 sm:p-12 shadow-2xl shadow-ink/5 relative z-10">
                
                {/* Mode Selector Tabs */}
                <div className="flex border-b border-divider mb-8">
                  <button
                    type="button"
                    onClick={() => setContactMode('calendar')}
                    className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider transition outline-none ${
                      contactMode === 'calendar'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted border-b border-transparent hover:text-ink'
                    }`}
                  >
                    📅 Book Instantly
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMode('form')}
                    className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider transition outline-none ${
                      contactMode === 'form'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted border-b border-transparent hover:text-ink'
                    }`}
                  >
                    📩 Request Callback
                  </button>
                </div>

                {contactMode === 'calendar' ? (
                  <div className="text-center py-6 flex flex-col items-center">
                    <div className="text-5xl mb-6 animate-float">📅</div>
                    <h3 className="text-2xl font-bold font-display text-ink mb-3">Book Your Walkthrough Instantly</h3>
                    <p className="text-muted text-sm max-w-md mx-auto leading-relaxed mb-8">
                      Select your exact date and timeslot directly in our schedule calendar. Confirm your live ggit.ai dental voice system demo instantly with zero waiting.
                    </p>
                    <a
                      href="https://calendar.app.google/jShLVgGnrGSahVDn7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-primary/25"
                    >
                      Launch Live Scheduler
                      <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                    </a>
                    <p className="text-[10px] text-muted mt-6 font-semibold">📅 Direct integration with Google Calendar</p>
                  </div>
                ) : formState === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-emerald-500/10">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-ink mb-2">Walkthrough Booked!</h3>
                    <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
                      Our system integration engineers are auditing your details. We will contact you shortly to schedule your live walkthrough session.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="text-left">
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono">Your Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Dr. Alex Carter"
                          className="w-full bg-background border border-divider focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3 text-sm text-ink outline-none transition"
                        />
                      </div>
                      <div className="text-left">
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono">Work Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="alex@clinicname.com"
                          className="w-full bg-background border border-divider focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3 text-sm text-ink outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="text-left">
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono">Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-background border border-divider focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3 text-sm text-ink outline-none transition"
                        />
                      </div>
                      <div className="text-left">
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono">Clinic Name / PMS</label>
                        <input
                          name="clinic"
                          type="text"
                          required
                          placeholder="Apex Dental Group / Dentrix"
                          className="w-full bg-background border border-divider focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3 text-sm text-ink outline-none transition"
                        />
                      </div>
                      <div className="text-left">
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono">Target Market</label>
                        <select
                          name="country"
                          required
                          className="w-full bg-background border border-divider focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3 text-sm text-ink outline-none transition"
                        >
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="CH">Switzerland</option>
                        </select>
                      </div>
                    </div>

                    <div className="text-left">
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono">Additional Details</label>
                      <textarea
                        name="details"
                        rows="4"
                        placeholder="Tell us about your weekly missed calls or specific guidelines..."
                        className="w-full bg-background border border-divider focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3 text-sm text-ink outline-none transition resize-none"
                      />
                    </div>

                    {/* Drag & drop file upload */}
                    <div className="text-left">
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono">Clinic Guidelines / FAQ Script (Optional)</label>
                      <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleFileDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-divider hover:border-primary bg-background/50 hover:bg-background rounded-2xl p-6 text-center cursor-pointer transition"
                      >
                        <Upload className="h-6 w-6 text-muted mx-auto mb-2 group-hover:text-primary transition" />
                        <p className="text-xs text-ink font-semibold">Drag & drop FAQ document here or <span className="text-primary">browse</span></p>
                        <p className="text-[10px] text-muted mt-1">PDF, DOCX, TXT (Max 5MB)</p>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileSelect}
                          className="hidden"
                          accept=".pdf,.docx,.txt"
                          multiple
                        />
                      </div>

                      {/* Display uploaded files */}
                      {uploadedFiles.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          {uploadedFiles.map((file, i) => (
                            <div key={i} className="flex items-center justify-between bg-background border border-divider px-3 py-1.5 rounded-lg text-xs">
                              <span className="truncate text-ink font-medium">{file.name}</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFiles((prev) => prev.filter((_, idx) => idx !== i))
                                }}
                                className="text-red-500 hover:text-red-600 font-bold px-1"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl text-sm transition shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                      {formState === 'sending' ? (
                        <>Processing Your Session... 🕒</>
                      ) : (
                        <>
                          Secure My Live Walkthrough Call
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FOOTER SECTION */}
      <footer className="relative bg-deep text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Brand Block */}
            <div className="lg:col-span-2 text-left">
              <a href="#hjem" className="inline-flex items-center gap-2.5 mb-6 group">
                <img
                  src="/logo.png"
                  alt="ggit.ai logo"
                  className="h-9 w-9 object-cover rounded-full bg-white p-0.5 border border-white/10 shadow-sm group-hover:scale-105 transition duration-300"
                />
                <span className="font-display font-bold tracking-tight text-lg text-white">
                  ggit.ai
                </span>
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
            <div className="text-left">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-4">AI Solutions</h4>
              <ul className="space-y-2.5 text-sm text-white/60">
                <li><a href="#services" className="hover:text-white transition">24/7 Voice Reception</a></li>
                <li><a href="#services" className="hover:text-white transition">PMS Calendar Sync</a></li>
                <li><a href="#services" className="hover:text-white transition">Clinical FAQ Playbooks</a></li>
                <li><a href="#services" className="hover:text-white transition">Outbound Recall Agents</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="text-left">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2.5 text-sm text-white/60">
                <li><a href="#problem" className="hover:text-white transition">The Problem</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">The Protocol</a></li>
                <li><a href="#calculator" className="hover:text-white transition">Lost Revenue Calculator</a></li>
                <li><a href="#showcase" className="hover:text-white transition">System Showcase</a></li>
                <li><Link to="/payments" className="hover:text-white transition text-primary-light font-medium">Payments</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="text-left">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-white font-bold mb-4">Direct Contact</h4>
              <ul className="space-y-2.5 text-sm text-white/60">
                <li><span className="font-semibold text-white">Phone:</span> +1 (803) 982-3119</li>
                <li><span className="font-semibold text-white">Email:</span> info@ggit.ai</li>
                <li><span className="font-semibold text-white">Hours:</span> 24 / 7 / 365</li>
              </ul>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center gap-4 text-xs text-white/40">
            <p className="font-semibold text-white/80 text-sm">GLOBAL GROUP INTELLIGENCE TECHNOLOGIES LTD</p>
            <p className="max-w-md">
              41 Rowan Court Peter Street, Folkestone, England CT20 1JE
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full mt-4 border-t border-white/5 pt-4">
              <div>
                © 2026 GGIT. All rights reserved. | Built in Switzerland
              </div>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
