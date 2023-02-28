"use client";

import CourseContainer from '@/components/courses/CourseContainer';
import { core_courses } from '@/constants/course';

export const metadata = {
  title: 'Home',
  description: 'Every participant of the program will start by completing the following three core courses: CS-101: Object-Oriented Programming using TypeScript, W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform & W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps.',
};

export default function CoreCourses() {

  return <CourseContainer
    courses={core_courses.courses}
    description={core_courses.description}
    heading="Core Courses"
  />
}
