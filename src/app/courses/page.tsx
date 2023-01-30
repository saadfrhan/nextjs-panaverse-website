"use client";

import Item from '@/components/courses/Item';
import Container from '@/components/home/container';
import { courses } from '@/constants/course';
import { gradientBg } from '@/constants/home';
import { Heads } from '@/ts';
import MotionDiv from '@/utils/motion';
import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react';

export default function Courses() {

  const heads = ["Core Courses", "Specialized Tracks"];

  return (
    <Flex direction="column" gap={6}>
      {heads.map(head => (
        courses[head as Heads].map((props, idx) => (
          <Flex key={idx} direction="column">
            {props.main && (
              <Container
                padding={10}
                justifyContent="center"
                gap={3}
                rounded={9}
                direction="column"
                textAlign="center"
                color="white"
                bg={gradientBg}
                mb={3}
                center={<MotionDiv negInit={true} dimension='y' transition={{ type: "spring" }}>
                  <Heading size={["lg", "xl", "lg", "2xl"]}>{props.main}</Heading>
                  <Text>{props.mainDesc}</Text>
                </MotionDiv>}
              />
            )}
            <Item
              key={idx}
              {...props}
              isSpecialization={props.courses?.length! > 0 && true}
            />
            {props.courses?.length! > 0 &&
              props.courses?.map((c, index) => (
                <Item key={index} {...c} />
              ))}
          </Flex>
        ))
      ))}
    </Flex>
  );
}
