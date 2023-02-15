"use client";

import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/navigation';
import { specs } from '@/constants/course';
import MotionDiv from '@/utils/motion';

export default function Specs() {

  const { push } = useRouter()

  return (<Flex direction="column" gap="1vw">
    <Heading size="3xl">Specializations</Heading>
    <MotionDiv negInit={true} dimension="y" transition={{ type: "spring", stiffness: 100 }}>
      <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={5}
      >
        {specs.specializations.map((s, i) => {
          const id = specs.specializations.findIndex(i => i.heading.toLowerCase().replaceAll(' ', '-') === s.heading.toLowerCase().replaceAll(' ', '-'));
          return (<Flex key={i} boxShadow="lg" bgColor="gray.700" cursor="pointer" onClick={() => push(`/courses/specializations/${id}`)} _light={{
            bgColor: 'gray.200'
          }} rounded={9} justifyContent="center" h="40vh" alignItems="center">
            <Heading textAlign="center" size="md" p={10}>{s.heading}</Heading>
          </Flex>)
        })}
      </SimpleGrid>
    </MotionDiv>
  </Flex>
  )
}
