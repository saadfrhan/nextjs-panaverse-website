"use client";

import QuarterItem from '@/components/courses/QuarterItem';
import Container from '@/components/home/container';
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'

export default function CourseContainer({
  heading,
  description,
  courses
}: {
  heading: string,
  description: string,
  courses: {
    number: string,
    heading: string,
    slug?: string
  }[]
}) {

  return (
    <Flex direction="column" gap={6}>
      <Container
        pl={10}
        pt={10}
        element={
          <Flex direction="column" gap={3}>
            <Heading size={["lg", "lg", "lg", "2xl"]}>
              {heading}
            </Heading>
            <Text>{description}</Text>
          </Flex>
        }
      />
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}
      >{courses.map((c, i) =>
        <QuarterItem
          key={i}
          {...c}
        />
      )}
      </SimpleGrid>
    </Flex>
  );
}
