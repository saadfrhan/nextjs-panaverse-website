"use client";

import Items from "@/components/courses/Items";
import { specs } from "@/constants/course";

export const metadata = {
  title: 'Specializations - Panaverse',
  description: `After completing the first three quarters the participants will select one or more specializations consisting of two courses each: Web 3.0 (Blockchain) and Metaverse Specialization, Artificial Intelligence (AI) and Deep Learning Specialization, Cloud-Native Computing Specialization, Ambient Computing and IoT Specialization, Genomics and Bioinformatics Specialization & Network Programmability and Automation Specialization`,
};

export default function Specs() {
  return <Items
    heading="Specializations"
    items={specs.specializations}
  />
}
