"use client";

import QuarterItem from '@/components/courses/QuarterItem';
import Container from '@/components/home/container';
import { courses } from '@/constants/course';
import { gradientBg } from '@/constants/home';
import { Heads } from '@/ts';
import { Flex, Heading, Text } from '@chakra-ui/react'

export default function Courses() {

  const heads = ["Core Courses", "Specialized Tracks"];

  return (<div>
    <title>Courses - Panaverse</title>
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
                center={
                  <Flex direction="column">
                    <Heading size={["lg", "xl", "lg", "2xl"]} mb={5}>{props.main}</Heading>
                    <Text>{props.mainDesc}</Text>
                  </Flex>
                }
              />
            )}
            <QuarterItem
              key={idx}
              {...props}
              isSpecialization={props.courses?.length! > 0 && true}
            />
            {props.courses?.length! > 0 &&
              props.courses?.map((c, index) => (
                <QuarterItem key={index} {...c} />
              ))}
          </Flex>
        ))
      ))}
    </Flex>
  </div>);
}
