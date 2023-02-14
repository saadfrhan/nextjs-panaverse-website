"use client";

import MotionDiv from '@/utils/motion';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Courses() {

  const { push } = useRouter()

  return (<Flex direction="column" gap="1vw">
    <Heading size="3xl">Courses</Heading>
    <SimpleGrid columns={[1, 1, 2]} spacing={5}
    >
      {["Core Courses", "Specializations"].map((i, id) =>
        <MotionDiv key={id} negInit={true} dimension="y" transition={{ type: "spring", stiffness: 100 }}> <Flex
          boxShadow="lg" bgColor="gray.700" cursor="pointer"
          rounded={9} justifyContent="center" h="50vh" alignItems="center"
          onClick={() => push('/courses/' + i.toLowerCase().replace(' ', '-'))} _light={{
            bgColor: 'gray.200'
          }}
        >
          <Heading>{i}</Heading>
        </Flex></MotionDiv>)}
    </SimpleGrid>
  </Flex>)
}
