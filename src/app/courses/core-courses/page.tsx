'use client';
import CourseContainer from '@/components/courses/CourseContainer';
import { core_courses } from '@/constants/course';

export default function CoreCourses() {

  return <CourseContainer
    courses={core_courses.courses}
    description={core_courses.description}
    heading='Core Courses'
  />;
};
