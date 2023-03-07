"use client";

import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { MotionDivI } from '@/ts';

export default function MotionDiv({
  children,
  dimension,
  negativeStart,
  transition
}: MotionDivI & { children: React.ReactNode }) {

  const ref = useRef(null)
  const isInView = useInView(ref)

  const dimensionInitial = negativeStart ? -50 : 50

  return (
    <motion.div initial={{
      opacity: 0,
      [dimension ? dimension : 'x']: dimensionInitial
    }} animate={{
      opacity: isInView ? 1 : 0,
      [dimension ? dimension : 'x']: isInView ? 0 : dimensionInitial
    }} transition={transition}>
      <div ref={ref}>
        {children}
      </div>
    </motion.div>
  )
}