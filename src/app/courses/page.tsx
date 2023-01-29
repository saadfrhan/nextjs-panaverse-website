"use client";

import Item from '@/components/courses/Item';
import { courses_core } from '@/constants/course';
import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Courses() {
  return (
    <Flex paddingInline="3%" direction="column">
      <Heading size={["lg", "xl", "lg", "2xl"]} textAlign="center">Core Courses</Heading>
      {
        courses_core.map((item, idx) => (
          <Item
            key={idx}
            {...item}
          />
        ))
      }
    </Flex>
  )
}
