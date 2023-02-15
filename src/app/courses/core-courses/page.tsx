"use client";

import CourseContainer from '@/components/courses/CourseContainer';
import QuarterItem from '@/components/courses/QuarterItem';
import Container from '@/components/home/container';
import { core_courses } from '@/constants/course';
import { gradientBg } from '@/constants/home';
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'

export default function CoreCourses() {

  return <CourseContainer
    courses={core_courses.courses}
    description={core_courses.description}
    heading="Core Courses"
  />
}
