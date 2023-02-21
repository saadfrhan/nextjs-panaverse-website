"use client";

import MotionDiv from '@/utils/motion';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import CoreCourses from '../../images/Courses.png';
import Specializations from '../../images/Specializations.png';

export default function Courses() {

  const { push } = useRouter()

  return (<Flex direction="column" gap="1vw">
    <Heading size="3xl">Courses</Heading>
    <SimpleGrid columns={[1, 1, 1, 1, 2]} spacing={5}
    >
      {[{
        heading: "Core Courses", image: CoreCourses
      }, {
        heading: "Specializations", image: Specializations
      }].map((i, id) =>
        <MotionDiv negInit={true} key={id} dimension="y" transition={{ type: "spring", stiffness: 100 }}>
          <Flex gap={3}
            boxShadow="lg" bgColor="gray.700" cursor="pointer"
            rounded={9} justifyContent="center" h="50vh" alignItems="center"
            onClick={() => push('/courses/' + i.heading.toLowerCase().replace(' ', '-'))} _light={{
              bgColor: 'gray.200'
            }} direction={['column', 'column', 'row', 'row', 'row']}
          >

            <Image src={i.image} alt={i.heading} width="200" />
            <Heading>{i.heading}</Heading>
          </Flex></MotionDiv>
      )
      }
    </SimpleGrid >
  </Flex >)
}
