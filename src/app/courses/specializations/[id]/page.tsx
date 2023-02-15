import CourseContainer from '@/components/courses/CourseContainer';
import { course_slugs, specs } from '@/constants/course'

export async function generateStaticParams() {
  return course_slugs.map((id) => ({ id }));
}

export default function Specialization({ params: { id } }: { params: { id: number } }) {

  return <CourseContainer
    courses={specs.specializations[id].courses}
    heading={specs.specializations[id].heading}
    description={specs.specializations[id].description}
  />
}
