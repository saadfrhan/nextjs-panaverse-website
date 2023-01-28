"use client";

import { Flex, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Panaverse from '../../images/panaverse.png';

export default function Welcome() {
  return (
    <HStack bgImage="linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)" height="50vh" paddingInline={20}>
      <Heading>Certified Web 3.0 and Metaverse Developer</Heading>
      <Image alt="panaverse" src={Panaverse} width={500} height={800} />
    </HStack>
  )
}
