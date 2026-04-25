import { useEffect, useRef, useState } from 'react'

export function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px', ...options },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options])

  return { ref, visible }
}
