import CourseContainer from '@/components/courses/CourseContainer';
import { course_slugs, specs } from '@/constants/course'

export async function generateStaticParams() {
  return course_slugs.map((id) => ({ id }));
}

export default function Specialization({ params: { id } }: { params: { id: string } }) {

  const idx = specs.specializations.findIndex(i => i.heading.toLowerCase().replaceAll(' ', '-') === id);

  return <CourseContainer
    courses={specs.specializations[idx].courses}
    heading={specs.specializations[idx].heading}
    description={specs.specializations[idx].description}
  />
}
