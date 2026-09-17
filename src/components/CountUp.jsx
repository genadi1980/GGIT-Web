import { useEffect, useRef, useState } from 'react'

/**
 * Animated counter. Server-rendered HTML contains the final value so
 * crawlers (and users without JS) see real numbers; the client resets
 * to 0 after hydration and counts up once the element scrolls into view.
 */
export default function CountUp({ end, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(end)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!el || reduceMotion || typeof IntersectionObserver === 'undefined') return

    setValue(0)
    let raf
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const startTs = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - startTs) / duration)
          setValue(Math.round(end * (1 - Math.pow(1 - t, 3)))) // ease-out cubic
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end, duration])

  return (
    <span ref={ref} className="tabular-nums font-extrabold">
      {value}
      {suffix}
    </span>
  )
}
