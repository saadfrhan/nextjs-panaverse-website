export type Heads = "Specialized Tracks" | "Core Courses"

export type Item = {
  [key in Heads]: {
    main?: string;
    mainDesc?: string;
    number: string;
    heading: string;
    description: string;
    courses?: {
      number: string;
      heading: string;
    }[];
  }[];
};

export interface ItemProps {
  number: string;
  heading: string;
  description?: string;
  isSpecialization?: boolean;
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
