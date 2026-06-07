import { useReducedMotion } from 'motion/react'

export function useRevealProps() {
  const reduced = useReducedMotion()
  if (reduced) return {}
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const },
    viewport: { once: true, margin: '-6% 0px' } as const,
  }
}
