"use client";

import Container from "@/components/home/container";
import { home } from "@/constants/home";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
  return (<div>
    <Container
      padding={10}
      gap={10}
      height="auto"
      bg="linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
      left={
        <Flex direction={["column"]} color="white">
          <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}>
            <Heading fontWeight="extrabold" textAlign="left" size={["lg", "xl", "lg", "2xl"]} mb={4} lineHeight='tall' as="h1" >
              {home[0].heads?.first}
            </Heading>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Heading size="1xl">
              {home[0].heads?.second}
            </Heading>
          </motion.div>
        </Flex>
      }
    />
    <Container
      height={["auto", "60vh", "auto", "auto"]}
      gap={3}
      marginBlock={50}
      paddingInline="10%"
      center={<motion.div initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}><Flex direction="column">
          <Heading
            mb={3}
            as="h1" size={["lg", "xl", "lg", "xl"]}>
            {home[1].quote?.text}
          </Heading>
          <Text fontStyle="italic">{home[1].quote?.author}</Text>
        </Flex >
      </motion.div>
      }
    />
    <Container
      height={["auto", "60vh", "auto", "auto"]}
      marginInline="10%"
      marginBlock={50}
      center={<motion.div initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween" }}>
        <Flex direction="column" justifyContent="center" className="diagonal-box" as="div">
          <Heading marginBlock={3}>
            {home[2].info?.head}
          </Heading>
          <Text textAlign="justify">
            {home[2].info?.text}
          </Text>
        </Flex >
      </motion.div>
      }
    />

    < Container
      marginBlock={50}
      height={["auto", "60vh", "auto", "auto"]}
      marginInline="10%"
      center={<motion.div initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween" }}>< Flex direction="column">
          <Heading mb={5}>
            {home[3].prog?.head}
          </Heading>
          <Text>
            {home[3].prog?.text}
          </Text>
        </Flex></motion.div>
      }
    />
  </div >)
}
