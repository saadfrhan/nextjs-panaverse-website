"use client";

import Items from "@/components/courses/Items";
import { specs } from "@/constants/course";

export default function Specs() {
  return <Items
    heading="Specializations"
    items={specs.specializations}
  />
}
