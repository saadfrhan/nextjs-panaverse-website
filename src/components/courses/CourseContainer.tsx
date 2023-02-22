"use client";

import QuarterItem from '@/components/courses/QuarterItem';
import Container from '@/components/home/container';
import { gradientBg } from '@/constants/home';
import MotionDiv from '@/utils/motion';
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
    <Flex direction="column" gap={3}>
      <Container
        bg={gradientBg}
        p={5}
        color="white"
        rounded={9}
        element={
          <Flex direction="column">
            <Heading size={["md", "lg", "lg", "xl"]}>
              {heading}
            </Heading>
            <Text>{description}</Text>
          </Flex>
        }
      />
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={2.5}
      >{courses.map((c, i) =>
        <MotionDiv
          key={i}
          negInit={true}
          dimension="y"
          transition={{ type: "spring", stiffness: 100 }}
        >
          <QuarterItem
            {...c}
          />
        </MotionDiv>
      )}
      </SimpleGrid>
    </Flex>
  );
}
