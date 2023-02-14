"use client";

import QuarterItem from '@/components/courses/QuarterItem';
import Container from '@/components/home/container';
import { core_courses } from '@/constants/course';
import { gradientBg } from '@/constants/home';
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'

export default function CoreCourses() {

  return (
    <Flex direction="column" gap={6}>
      <Container
        padding={10}
        justifyContent="center"
        rounded={9}
        textAlign="center"
        color="white"
        bg={gradientBg}
        element={
          <Flex direction="column">
            <Heading size={["lg", "xl", "lg", "2xl"]}>
              Core Courses
            </Heading>
            <Text>{core_courses.description}</Text>
          </Flex>
        }
      />
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}
      >{core_courses.courses.map((c, i) =>
        <QuarterItem
          key={i}
          {...c}
        />
      )}
      </SimpleGrid>
    </Flex>
  );
}
