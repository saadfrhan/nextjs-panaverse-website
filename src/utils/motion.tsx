import { MutableRefObject, useRef } from 'react';
import { motion, Transition, useInView } from "framer-motion";

export default function MotionDiv({
  children,
  dimension,
  negInit = false,
  transition
}: {
  children: React.ReactNode,
  dimension: 'x' | 'y',
  negInit?: boolean,
  transition?: Transition
}) {

  const ref = useRef(null)
  const isInView = useInView(ref)

  const dimensionInitial = negInit ? -50 : 50

  return (
    <motion.div initial={{
      opacity: 0,
      [dimension]: dimensionInitial
    }} animate={{
      opacity: isInView ? 1 : 0,
      [dimension]: isInView ? 0 : dimensionInitial
    }} transition={transition}>
      <div ref={ref}>
        {children}
      </div>
    </motion.div>
  )
}