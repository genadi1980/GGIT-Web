import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element is within the viewport. Used to pause
 * decorative intervals while they are off-screen (saves CPU/battery).
 */
export default function useInView(options = { rootMargin: '100px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), options)
    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}
