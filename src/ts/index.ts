import { StaticImageData } from "next/image";

export type Heads = "Specialized Tracks" | "Core Courses"

export interface ItemProps {
  number: string;
  heading: string;
  description?: string;
  isSpecialization?: boolean;
  image: StaticImageData
}

export interface HeadingBlock {
  description?: string,
  heading: string,
  isSpecialization: boolean,
  number?: string,
}

export interface NumberLabel {
  number: string
}
