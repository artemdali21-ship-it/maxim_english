'use client'

import { useEffect, useRef, useState } from 'react'

interface ParallaxBackgroundProps {
  src: string
  alt?: string
  speed?: number
  overlay?: React.ReactNode
  children?: React.ReactNode
}

export function ParallaxBackground({ 
  src, 
  alt = '', 
  speed = 0.3,
  overlay,
  children 
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const img = imgRef.current
    if (!container || !img) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          if (rect.bottom > 0 && rect.top < windowHeight) {
            const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height)
            const yOffset = (scrollPercent - 0.5) * rect.height * speed
            img.style.transform = `translate3d(0, ${yOffset}px, 0) scale(1.2)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ 
          transform: 'translate3d(0, 0, 0) scale(1.2)',
          minHeight: '120%',
          top: '-10%'
        }}
      />
      {overlay}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
