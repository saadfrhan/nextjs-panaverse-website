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
        className="flex-col text-left p-5 text-white gap-6"
        primary={{
          content: heading,
          className: "font-extrabold max-[640px]:text-2xl min-[640px]:text-4xl"
        }}
        secondary={{
          content: description
        }}
      />
      <SimpleGrid columns={courses.length > 2 ? [1, 1, 2, 3] : [1, 1, 2, 2]} spacing={2.5}
      >{courses.map((c, i) =>
        <MotionDiv
          key={i}
          negativeStart={true}
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
