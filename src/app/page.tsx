"use client";

import Container from "@/components/home/container";
import { gradientBg, home } from "@/constants/home";
import MotionDiv from "@/utils/motion";
import { Flex, Heading, SimpleGrid, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import KarachiImage from '../images/karachi.jpg';
import PeshawarImage from '../images/peshawar.jpg';
import LahoreImage from '../images/lahore.jpg';
import IslamabadImage from '../images/islamabad.jpg';

export default function Home() {

  const [isLandscape] = useMediaQuery('(min-width: 767px)');

  return (<Flex direction="column" gap="1rem">
    <Container
      padding={10}
      rounded={9}
      boxShadow="lg"
      bg={gradientBg}
      element={
        <Flex direction="column" color="white" padding={['0%', '0%', '10%', '10%', '10%']} textAlign={isLandscape ? "center" : "left"}>
          <MotionDiv negInit={true} dimension="y" transition={{ type: "spring", stiffness: 100 }}>
            <Heading fontWeight="extrabold" size={["lg", "xl"]} mb={4} color="white">
              {home[0].heads?.first!}
              <br />
              {home[0].heads?.second!}
            </Heading>
          </MotionDiv>
          <MotionDiv negInit={true} dimension="y">
            <Heading size="1xl">
              {home[0].heads?.third}
            </Heading>
          </MotionDiv>
        </Flex>
      }
    />

    <Container boxShadow="lg"
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
      element={<SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={5} justifyContent="center" alignItems="center">
        <MotionDiv transition={{ type: "tween" }} dimension="y">
          <Flex direction="column" p={6}>
            <Heading mb={3}>
              {home[2].info?.head}
            </Heading>
            <Text textAlign="left">
              {home[2].info?.text}
            </Text>
          </Flex>
        </MotionDiv>
        <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={2}>
          <Flex direction="column" gap={2} justifyContent="center" alignItems="center">
            <MotionDiv transition={{ type: "tween" }} dimension="y">
              <Image src={KarachiImage} alt="karachi" className="city" />
            </MotionDiv>
            <MotionDiv transition={{ type: "tween" }} dimension="y">
              <Image src={LahoreImage} alt="lahore" className="city" />
            </MotionDiv>
          </Flex>
          <Flex direction="column" gap={2} justifyContent="center" alignItems="center">
            <MotionDiv transition={{ type: "tween" }} dimension="y">
              <Image src={PeshawarImage} alt="peshawar" className="city" />
            </MotionDiv>
            <MotionDiv transition={{ type: "tween" }} dimension="y">
              <Image src={IslamabadImage} alt="islamabad" className="city" />
            </MotionDiv>
          </Flex>
        </SimpleGrid>
      </SimpleGrid>
      }
    />

    <Container
      element={<MotionDiv dimension="y" transition={{ type: "tween" }}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          paddingInline="8vw"
          paddingBlock="3vw"
          gap={4}
        >
          <Heading>
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
      boxShadow="lg"
      element={<MotionDiv negInit={true} dimension="y">
        <Flex
          direction={['column', 'column', 'column', 'row']}
          gap={6}
        >
          <Flex
            direction="column"
            bgColor="gray.200"
            _dark={{
              bgColor: "gray.700"
            }}
            rounded={9}
            p={5}
          >
            <Heading
              mb={3}
              size={["lg", "xl", "lg", "xl"]}
            >
              {home[4].prog2?.head}
            </Heading>
            <Text>{home[4].prog2?.text}</Text>
          </Flex>
        </Flex>
      </MotionDiv>
      }
    />

    <Container
      element={<MotionDiv dimension="y">
        <Flex direction="column" gap={6} p={5}>
          <Heading textAlign="left">{home[5].out?.head}</Heading>
          <Text>{home[5].out?.text}</Text>
        </Flex>
      </MotionDiv>
      }
    />
  </Flex>)
}
