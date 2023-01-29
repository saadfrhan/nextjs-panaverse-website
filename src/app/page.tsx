"use client";

import Container from "@/components/home/container";
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
            <Heading textAlign="left" size={["lg", "xl", "lg", "2xl"]} mb={4} lineHeight='tall' as="h1" >
              Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
            </Heading>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Heading size="1xl">
              Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
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
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3.0 and Metaverse developers, designers, trainers, startup founders and service providers.
          </Heading>
          <Text fontStyle="italic">~ Zia Khan</Text>
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
        <Flex direction="column" justifyContent="center" >
          <Heading marginBlock={3}>Classes in Karachi, Lahore, Islamabad, and Peshawar</Heading>
          <Text textAlign="justify">
            The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.

            Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
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
            The Program in a Nutshell: Earn while you learn
          </Heading>
          <Text>
            In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.
          </Text>
        </Flex></motion.div>
      }
    />
  </div >)
}
