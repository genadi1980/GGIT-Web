import { useEffect, useState } from 'react'
import { Activity } from 'lucide-react'
import useInView from '../hooks/useInView.js'

/* ----------------------------------------------------------------
   Feature Card 1 — Interactive Calls Shuffler
---------------------------------------------------------------- */
const CALL_ITEMS = [
  { tag: 'Voice Agent', label: 'Dental Emergency: "I broke a tooth & need a slot tonight!"', metric: 'Booked in 42s' },
  { tag: 'Clinical FAQ', label: 'Patient Inquiry: "Do you take MetLife & is parking free?"', metric: 'Answered instantly' },
  { tag: 'Database Recall', label: 'Cleaning Campaign: "Schedule routine scaling automatically"', metric: 'Sync: 100%' },
]

export function CallsShuffler() {
  const [ref, inView] = useInView()
  const [stack, setStack] = useState(CALL_ITEMS)

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => {
      setStack((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)])
    }, 3000)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <div ref={ref} className="relative h-44 w-full">
      {stack.map((item, offset) => (
        <div
          key={item.tag}
          aria-hidden={offset !== 0}
          style={{
            transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
            zIndex: stack.length - offset,
            transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
              {item.tag}
            </span>
            <span className="font-mono text-xs text-muted">{item.metric}</span>
          </div>
          <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">{item.label}</div>
          <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: 24 }, (_, idx) => (
              <span
                key={idx}
                className="h-1 w-1 rounded-full"
                style={{ background: idx < 24 - offset * 6 ? '#6366f1' : '#E2E8F0' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Soundwave Signature Animation
---------------------------------------------------------------- */
const VOICE_STATUSES = [
  { text: 'System Online · Listening 24/7', tone: 'emerald' },
  { text: 'Answering incoming patient call...', tone: 'accent' },
  { text: 'Checking PMS scheduling calendar...', tone: 'primary' },
  { text: 'Booking complete · confirmation SMS sent!', tone: 'emerald', success: true },
]

const SIGNAL_NODES = [
  { left: '15%', delay: '0.0s', dur: '2.6s', size: 10 },
  { left: '25%', delay: '1.3s', dur: '3.0s', size: 8 },
  { left: '38%', delay: '0.6s', dur: '2.8s', size: 12 },
  { left: '50%', delay: '1.8s', dur: '2.4s', size: 9 },
  { left: '62%', delay: '0.9s', dur: '3.1s', size: 11 },
  { left: '74%', delay: '2.0s', dur: '2.7s', size: 8 },
  { left: '85%', delay: '0.4s', dur: '2.9s', size: 10 },
]

const RIPPLES = [
  { left: '22%', delay: '0.2s' },
  { left: '48%', delay: '1.0s' },
  { left: '76%', delay: '1.8s' },
]

const TONE_DOT = {
  emerald: 'bg-emerald-500',
  accent: 'bg-accent animate-ping',
  primary: 'bg-primary',
}

export function AIVoiceStream() {
  const [ref, inView] = useInView()
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(14)

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => {
      setStatusIdx((idx) => (idx + 1) % VOICE_STATUSES.length)
    }, 2300)
    return () => clearInterval(interval)
  }, [inView])

  // Increment the counter as a reaction to state, not inside a state
  // updater (updaters run twice in StrictMode and must stay pure).
  useEffect(() => {
    if (VOICE_STATUSES[statusIdx].success) setCount((c) => c + 1)
  }, [statusIdx])

  const status = VOICE_STATUSES[statusIdx]

  return (
    <div
      ref={ref}
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/30 shadow-inner"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)' }}
    >
      {/* Atmospheric blobs */}
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/70 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/60 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20 bg-white px-2.5 py-1.5 rounded-full border border-divider shadow-sm">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink font-extrabold">
            Real-Time Latency
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-black text-sm text-primary tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink font-black">calls handled</span>
        </div>
      </div>

      {/* Audio Waveform Beam */}
      <svg className="absolute left-3 right-3 top-14 h-5" viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true">
        <rect x="0" y="6" width="400" height="8" rx="4" fill="#6366f1" />
        <rect x="0" y="7" width="400" height="2" fill="#4f46e5" />
        <circle cx="10" cy="10" r="4.5" fill="#4f46e5" />
        <circle cx="390" cy="10" r="4.5" fill="#4f46e5" />
        {[60, 152, 248, 340].map((x) => (
          <circle key={x} cx={x} cy="10" r="3.5" fill="#6366f1" />
        ))}
      </svg>

      {/* Falling Voice Particles (keyframes live in index.css) */}
      <div className="absolute inset-x-0 top-16 bottom-11 overflow-hidden" aria-hidden="true">
        {SIGNAL_NODES.map((n, i) => (
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
        {RIPPLES.map((r, i) => (
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
      <svg className="absolute bottom-8 left-0 right-0 h-5" viewBox="0 0 400 16" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,8 Q50,0 100,8 T200,8 T300,8 T400,8 L400,16 L0,16 Z" fill="#6366f1" className="animate-pulse" />
        <path d="M0,8 Q30,12 80,8 T180,8 T280,8 T380,8 L400,16 L0,16 Z" fill="#4f46e5" />
      </svg>

      {/* Footer status strip */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 z-20 bg-white px-2.5 py-1 rounded-full border border-divider shadow-sm justify-center">
        <span className={`h-2.5 w-2.5 rounded-full ${TONE_DOT[status.tone]} transition-all duration-300`} />
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
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const ACTIVE_DAY = 3 // Thursday
const CURSOR_POSITIONS = [
  { x: 8, y: 110, opacity: 0 },
  { x: 60, y: 60, opacity: 1 },
  { x: 60 + ACTIVE_DAY * 36, y: 60, opacity: 1 },
  { x: 60 + ACTIVE_DAY * 36, y: 60, opacity: 1 },
  { x: 130, y: 130, opacity: 1 },
]

export function AppointmentScheduler() {
  const [ref, inView] = useInView()
  const [step, setStep] = useState(0) // 0..4

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => setStep((prev) => (prev + 1) % CURSOR_POSITIONS.length), 1400)
    return () => clearInterval(interval)
  }, [inView])

  const cursorPos = CURSOR_POSITIONS[step]

  return (
    <div ref={ref} className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Active Slots · April</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          PMS Live Sync
        </span>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {DAYS.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === ACTIVE_DAY
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 14}</span>
          </div>
        ))}
      </div>

      {/* Decorative "save" bar (not an interactive button) */}
      <div
        className={`w-full py-2.5 rounded-2xl font-medium text-xs text-center transition-all duration-300 ${
          step === 4 ? 'bg-primary text-white scale-[1.02] shadow-md shadow-primary/30' : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Booking Sync Completed' : 'Analyzing available slots...'}
      </div>

      {/* Animated cursor */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#1A1A1A" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
