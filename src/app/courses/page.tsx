"use client";

import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Courses() {

  const { push } = useRouter()

  return (<Flex direction="column" gap="1vw">
    <Heading size="3xl">Courses</Heading>
    <SimpleGrid columns={[1, 1, 2]} spacing={5}
    >
      <Flex boxShadow="lg" bgColor="gray.700" cursor="pointer" onClick={() => push('/courses/core')} _light={{
        bgColor: 'gray.200'
      }} rounded={9} justifyContent="center" h="40vh" alignItems="center">
        <Heading>Core Courses</Heading>
      </Flex>
      <Flex boxShadow="lg" onClick={() => push('/courses/specs')} cursor="pointer" bgColor="gray.700" _light={{
        bgColor: 'gray.200'
      }} rounded={9} justifyContent="center" h="40vh" alignItems="center">
        <Heading>Specializations</Heading>
      </Flex>
    </SimpleGrid>
  </Flex>)
}
