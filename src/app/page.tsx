"use client";

import Container from "@/components/home/container";
import { gradientBg, home } from "@/constants/home";
import MotionDiv from "@/utils/motion";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (<Flex direction="column">
    <Container
      padding={10}
      gap={10}
      height="auto"
      rounded={9}
      bg={gradientBg}
      left={
        <Flex direction="column" color="white">
          <MotionDiv negInit={true} dimension="y" transition={{ type: "spring", stiffness: 100 }}>
            <Heading fontWeight="extrabold" textAlign="left" size={["lg", "xl", "lg", "xl"]} mb={4} lineHeight='tall' as="h1" >
              {home[0].heads?.first!}
            </Heading>
          </MotionDiv>
          <MotionDiv negInit={true} dimension="x">
            <Heading size="1xl">
              {home[0].heads?.second}
            </Heading>
          </MotionDiv>
        </Flex>
      }
    />

    <Container
      height={["auto", "60vh", "auto", "auto"]}
      gap={3}
      marginBlock={50}
      center={<MotionDiv negInit={true} dimension="y">
        <Flex direction="column">
          <Heading
            mb={3}
            as="h1" size={["lg", "xl", "lg", "xl"]}>
            {home[1].quote?.text}
          </Heading>
          <Text fontStyle="italic">{home[1].quote?.author}</Text>
        </Flex>
      </MotionDiv>
      }
    />

    <Container
      height={["auto", "60vh", "auto", "auto"]}
      center={<MotionDiv transition={{ type: "tween" }} dimension="y">
        <Flex direction="column" justifyContent="center" className="diagonal-box" as="div">
          <Heading mb={3}>
            {home[2].info?.head}
          </Heading>
          <Text textAlign="justify">
            {home[2].info?.text}
          </Text>
        </Flex >
      </MotionDiv>
      }
    />

    <Container
      height={["auto", "60vh", "auto", "auto"]}
      center={<MotionDiv dimension="y" transition={{ type: "tween" }}>
        <Flex direction="column">
          <Heading mb={5}>
            {home[3].prog?.head}
          </Heading>
          <Text>
            {home[3].prog?.text}
          </Text>
        </Flex>
      </MotionDiv>
      }
    />
  </Flex>)
}
