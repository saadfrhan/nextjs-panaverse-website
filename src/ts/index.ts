import { StaticImageData } from "next/image";

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
