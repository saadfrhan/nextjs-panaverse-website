import { Transition } from "framer-motion";
import { StaticImageData } from "next/image";
import { AriaAttributes, DOMAttributes } from "react";

export type Heads = "Specialized Tracks" | "Core Courses"

export interface ItemProps {
  number: string;
  heading: string;
  image?: StaticImageData
}

export interface HeadingBlock {
  heading: string
}

export interface NumberLabel {
  number: string
}

export interface MotionDivI {
  dimension?: 'x' | 'y',
  negativeStart: boolean,
  transition?: Transition
}
