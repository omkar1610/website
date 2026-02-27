'use client'

import { useEffect, useRef, HTMLAttributes } from 'react'

type Direction = 'up' | 'left' | 'right' | 'fade'

interface Props extends HTMLAttributes<HTMLDivElement> {
  delay?: number
  direction?: Direction
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) el.style.transitionDelay = `${delay}ms`
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const dirClass =
    direction === 'left' ? 'from-left' :
    direction === 'right' ? 'from-right' :
    direction === 'fade' ? 'from-fade' : ''

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  )
}
