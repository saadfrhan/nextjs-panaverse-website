import { motion, Transition } from "framer-motion";

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
  return (
    <motion.div initial={{
      opacity: 0,
      [dimension]: negInit ? -50 : 50
    }} animate={{
      opacity: 1,
      [dimension]: 0
    }} transition={transition}>
      {children}
    </motion.div>
  )
}