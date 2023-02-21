"use client";

import Container from "@/components/home/container";
import { gradientBg, home } from "@/constants/home";
import MotionDiv from "@/utils/motion";
import { Flex, Heading, SimpleGrid, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import ZiaKhanImage from '../images/zia.png';
import KarachiImage from '../images/karachi.jpg';
import PeshawarImage from '../images/peshawar.jpg';
import LahoreImage from '../images/lahore.jpg';
import IslamabadImage from '../images/islamabad.jpg';
import Outcome from '../images/money.png';

export default function Home() {

  const [isLandscape] = useMediaQuery('(min-width: 767px)');

  return (<Flex direction="column" gap="4rem">
    <Container
      padding={10}
      rounded={9}
      bg={gradientBg}
      element={
        <Flex direction="column" color="white" padding={['0%', '0%', '10%', '10%', '10%']} textAlign={isLandscape ? "center" : "left"}>
          <MotionDiv negInit={true} dimension="y" transition={{ type: "spring", stiffness: 100 }}>
            <Heading fontWeight="extrabold" size={["lg", "xl"]} mb={4}>
              {home[0].heads?.first!}
              <br />
              {home[0].heads?.second!}
            </Heading>
          </MotionDiv>
          <MotionDiv negInit={true} dimension="x">
            <Heading size="1xl">
              {home[0].heads?.third}
            </Heading>
          </MotionDiv>
        </Flex>
      }
    />

    <Container
      element={<MotionDiv negInit={true} dimension="y">
        <Flex direction="column" bgColor="gray.100" _dark={{
          bgColor: "gray.700"
        }} rounded={9} alignItems="center" p={10}>
          <Heading
            mb={3} size={["md", "lg", "md", "lg"]}>
            {home[1].quote?.text}
          </Heading>
          <Text fontStyle="italic">{home[1].quote?.author}</Text>
        </Flex>
      </MotionDiv>
      }
    />

    <Container
      element={<SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={10}>
        <MotionDiv transition={{ type: "tween" }} dimension="y">
          <Heading mb={3}>
            {home[2].info?.head}
          </Heading>
          <Text textAlign="left">
            {home[2].info?.text}
          </Text>
        </MotionDiv>
        <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={10}>
          <Flex direction="column" gap={8} justifyContent="center" alignItems="center">
            <Image src={KarachiImage} alt="karachi" className="city" />
            <Image src={LahoreImage} alt="lahore" className="city" />
          </Flex>
          <Flex direction="column" gap={8} justifyContent="center" alignItems="center">
            <Image src={PeshawarImage} alt="peshawar" className="city" />
            <Image src={IslamabadImage} alt="islamabad" className="city" />
          </Flex>
        </SimpleGrid>
      </SimpleGrid>
      }
    />

    <Container
      element={<MotionDiv dimension="y" transition={{ type: "tween" }}>
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

    <Container
      element={<MotionDiv negInit={true} dimension="y">
        <Flex direction={['column', 'column', 'column', 'row']} gap={6}>
          <Flex direction="column" bgColor="gray.200" _dark={{
            bgColor: "gray.700"
          }} rounded={9} p="8%">
            <Heading
              mb={3} size={["lg", "xl", "lg", "xl"]}>
              {home[4].prog2?.head}
            </Heading>
            <Text>{home[4].prog2?.text}</Text>
          </Flex>
        </Flex>
      </MotionDiv>
      }
    />

    <Container
      element={<MotionDiv negInit={true} dimension="y">
        <Heading mb={5}>{home[5].out?.head}</Heading>
        <Flex direction={['column', 'column', 'column', 'row']} gap={6} justifyContent="center" alignItems="center">
          <Image src={Outcome} alt="Outcome" className="outcome-img" />
          <Text>{home[5].out?.text}</Text>
        </Flex>
      </MotionDiv>
      }
    />
  </Flex>)
}
