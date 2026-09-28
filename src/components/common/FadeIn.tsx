import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  duration?: number
}

const FadeIn = ({ children, delay = 0, direction = 'up', className = '', duration = 0.6 }: FadeInProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 }
      case 'down': return { opacity: 0, y: -40 }
      case 'left': return { opacity: 0, x: 40 }
      case 'right': return { opacity: 0, x: -40 }
      case 'none': return { opacity: 0 }
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down': return { opacity: 1, y: 0 }
      case 'left':
      case 'right': return { opacity: 1, x: 0 }
      case 'none': return { opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
