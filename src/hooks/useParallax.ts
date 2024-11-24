import { useTransform, useScroll, MotionValue } from 'framer-motion'

export const useParallax = (distance: number): MotionValue<string> => {
  const { scrollYProgress } = useScroll()
  return useTransform(scrollYProgress, [0, 1], ['0%', `${distance}%`])
}

