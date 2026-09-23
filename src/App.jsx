import { useEffect, useState } from 'react'
import {
  Phone,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Calendar,
  Bot,
  Zap,
  MessageSquareCode,
  Shield,
  Layers,
} from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import CountUp from './components/CountUp.jsx'
import { CallsShuffler, AIVoiceStream, AppointmentScheduler } from './components/FeatureDemos.jsx'
import Faq from './components/Faq.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import useInView from './hooks/useInView.js'
import { BOOKING_URL, PHONE_DISPLAY, PHONE_E164 } from './seo.js'

/* ----------------------------------------------------------------
   Constants / Content for GGIT.AI (Dental AI Voice Assistant)
---------------------------------------------------------------- */
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

// Hero + showcase imagery (1408×768 WebP with a 704w variant)
const SLIDES = [
  { alt: 'Patient at home talking to the GiGi AI dental assistant on a smart display about his treatment plan', caption: 'AI Patient Intake, Day or Night' },
  { alt: 'AI dental assistant transferring a patient call to the dentist over a live video connection', caption: 'Seamless Hand-Off to Your Dentist' },
  { alt: 'Dentist in her clinic on a secure video consultation with a remote patient prepared by the AI assistant', caption: 'Secure Remote Consultations' },
  { alt: 'Dentist smiling during a remote consultation after the AI assistant shared the patient chart', caption: 'Patient Chart Ready Before the Call' },
  { alt: 'Patient at home reviewing 3D dental scans with his dentist over a video call', caption: 'Remote Treatment Plan Review' },
  { alt: 'Dentist explaining a treatment plan to a patient in the dental chair with 3D CT scans on screen', caption: 'In-Clinic Follow-Through' },
].map((s, i) => ({
  ...s,
  src: `/${i + 1}.webp`,
  srcSet: `/${i + 1}-sm.webp 704w, /${i + 1}.webp 1408w`,
}))

/* ----------------------------------------------------------------
   Main Application Page Component
---------------------------------------------------------------- */
export default function App() {
  // Hero background crossfade (5 seconds). Slides are mounted progressively
  // (current + next) so the page doesn't download every image up front.
  const [heroBgIdx, setHeroBgIdx] = useState(0)
  const [heroMounted, setHeroMounted] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIdx((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setHeroMounted((m) => Math.min(SLIDES.length, Math.max(m, heroBgIdx + 2)))
  }, [heroBgIdx])

  // Showcase carousel — pauses on hover and while off-screen
  const [showcaseRef, showcaseInView] = useInView()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoSlide, setAutoSlide] = useState(true)

  useEffect(() => {
    if (!autoSlide || !showcaseInView) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [autoSlide, showcaseInView])

  // Lost Revenue Calculator State
  const [missedCalls, setMissedCalls] = useState(50)
  const lostPatients = Math.round(missedCalls * 0.2)
  const lostRevenue = lostPatients * 500

  return (
    <div className="relative bg-background text-ink">
      <div className="noise-overlay" />

      <Navbar />

      <main>
      {/* 1. HERO SECTION */}
      <section
        id="hjem"
        aria-label="GiGi AI voice receptionist"
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden clip-wave border-b border-divider"
      >
        {/* Background Image Carousel (100% opaque, zero overlays) */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {SLIDES.slice(0, heroMounted).map((slide, idx) => (
            <img
              key={slide.src}
              src={slide.src}
              srcSet={slide.srcSet}
              sizes="100vw"
              alt=""
              width="1408"
              height="768"
              fetchPriority={idx === 0 ? 'high' : 'low'}
              decoding="async"
              style={{ opacity: heroBgIdx === idx ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ))}
        </div>

        {/* Floating digital particles */}
        <div className="absolute top-20 right-20 hidden md:block w-48 h-48 bg-primary/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 hidden md:block w-72 h-72 bg-accent/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Decorative Grid Mesh */}
        <div className="absolute inset-0 grid-bg z-0 pointer-events-none opacity-20" />

        {/* Buttons at the bottom of the carousel pictures */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 w-full max-w-4xl px-6 text-center">
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-primary/25"
            >
              Secure My Free Demo
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-divider hover:bg-background text-ink font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Call GiGi Live: {PHONE_DISPLAY} <span aria-hidden="true">🔊</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none" aria-hidden="true">
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
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display tracking-tight text-ink leading-[1.05]">
              Book More Patients <br />
              <span className="font-serif italic text-primary-dark">With AI Automation</span>
            </h1>

            <p className="font-body text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              <strong className="text-ink">GiGi is the 24/7 AI voice receptionist for dental clinics.</strong>{' '}
              It answers every patient call on the first ring, books appointments directly into your practice management software, and handles clinic FAQs — day or night.
            </p>
          </div>

          {/* Combined Hard Reality Divider */}
          <div className="text-center max-w-3xl mx-auto mt-20 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink">
              Your Dental Clinic Closes. <span className="text-rose-500 italic">Patient Phone Calls Don't.</span>
            </h2>
          </div>

          {/* 3 Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-divider p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold font-display text-ink mb-2">35% Missed Revenue</h3>
              <p className="text-muted text-sm leading-relaxed">
                Over a third of clinic booking requests happen outside office hours. Automated dental systems secure this revenue directly without extra receptionist overhead.
              </p>
            </div>
            <div className="bg-white border border-divider p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold font-display text-ink mb-2">Overwhelmed Staff</h3>
              <p className="text-muted text-sm leading-relaxed">
                Your reception desk starts every chaotic morning stressed, sorting through a mountain of messy, garbled, or incomplete evening voicemails.
              </p>
            </div>
            <div className="bg-white border border-divider p-8 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold font-display text-ink mb-2">Friction-Full Bookings</h3>
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
      <section id="how-it-works" className="relative py-32 grid-bg">
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
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-extrabold block mb-2">Voice Stream</span>
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
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[3s]" />
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
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[3s]" />
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
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[3s]" />
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
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full h-2 bg-divider rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="font-display font-extrabold text-3xl text-primary w-16 tabular-nums">{missedCalls}</span>
              </div>
              <p className="text-muted text-xs font-mono">Drag slider to adjust values</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-divider">
              <div className="bg-background rounded-2xl p-6 border border-divider">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-muted font-bold">Lost Patient Bookings</h3>
                <div className="text-4xl font-extrabold text-ink font-display mt-2 tabular-nums">
                  {lostPatients}
                </div>
                <p className="text-[10px] text-muted mt-2">Based on conservative 20% scheduling efficiency.</p>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-primary/10 shadow-lg shadow-primary/5">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">Lost Monthly Revenue</h3>
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
                    alt="Dental patient calling the clinic"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
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
                    alt="AI dental assistant answering a patient call"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
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
                    alt="Dental clinic appointment calendar synced automatically"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
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
            ref={showcaseRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="GiGi in action"
            className="relative max-w-4xl mx-auto h-[320px] sm:h-[480px] bg-white border border-divider rounded-3xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setAutoSlide(false)}
            onMouseLeave={() => setAutoSlide(true)}
          >
            {/* Carousel track */}
            <div
              className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {SLIDES.map((slide, idx) => (
                <div
                  key={slide.src}
                  className="min-w-full h-full relative"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} of ${SLIDES.length}`}
                  aria-hidden={idx !== currentSlide}
                >
                  <img
                    src={slide.src}
                    srcSet={slide.srcSet}
                    sizes="(min-width: 896px) 896px, 100vw"
                    alt={slide.alt}
                    width="1408"
                    height="768"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-12 text-left">
                    <span className="font-mono text-[10px] text-primary-light uppercase tracking-widest font-semibold">Workflow Configuration</span>
                    <p className="text-white font-display font-bold text-lg sm:text-xl mt-1">{slide.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-primary hover:text-white text-ink flex items-center justify-center shadow-lg border border-divider z-20 transition"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-primary hover:text-white text-ink flex items-center justify-center shadow-lg border border-divider z-20 transition"
            >
              <span aria-hidden="true">›</span>
            </button>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === currentSlide}
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
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-ink mt-3 mb-4">
              Test GiGi — Your 24/7 AI Voice & Chat Assistant
            </h2>
            <p className="text-muted text-sm sm:text-base font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Chat with GiGi live. Ask dental-related questions, practice management scenarios, or try booking a demo appointment to see how our clinical agent responds instantly.
            </p>

            <div className="glass rounded-3xl p-2 max-w-4xl mx-auto border border-divider shadow-xl overflow-hidden bg-white/50">
              <iframe
                src="https://ggit-agents.vercel.app/chat/ggit-advy4?embed=1"
                width="100%"
                height="500"
                className="rounded-2xl bg-white"
                style={{ border: 'none', width: '100%', height: '500px' }}
                allowFullScreen
                loading="lazy"
                title="GiGi AI Assistant Live Demo"
                allow="microphone; camera; clipboard-read; clipboard-write"
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
              <h3 className="text-lg font-bold font-display text-ink mb-2">HIPAA Compliance</h3>
              <p className="text-muted text-xs leading-relaxed">
                Full end-to-end patient metadata and audio protection. We securely process data under strict Business Associate Agreement (BAA) guidelines.
              </p>
            </div>

            <div className="border border-divider rounded-2xl p-6 shadow-sm hover:translate-y-[-2px] transition duration-300">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">Swiss FADP Secured</h3>
              <p className="text-muted text-xs leading-relaxed">
                Our server storage clusters and API gateways align tightly with Swiss data security acts and global GDPR standards.
              </p>
            </div>

            <div className="border border-divider rounded-2xl p-6 shadow-sm hover:translate-y-[-2px] transition duration-300">
              <div className="w-12 h-12 bg-accent/5 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">Zero-Training Needed</h3>
              <p className="text-muted text-xs leading-relaxed">
                We handle the heavy lifting. Simply set up call forwarding from your existing landline to ggit.ai. No complex hardware required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <Faq />

      {/* 11. CONTACT SECTION */}
      <ContactSection />
      </main>

      {/* 12. FOOTER SECTION */}
      <Footer />
    </div>
  )
}
