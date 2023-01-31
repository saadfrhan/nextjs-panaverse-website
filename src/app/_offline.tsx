"use client";

import { Flex, Heading } from '@chakra-ui/react';
import React from 'react'

export default function Fallback() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Heading>No internet</Heading>
    </Flex>
  )
}
