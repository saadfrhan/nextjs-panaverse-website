import CourseContainer from '@/components/courses/CourseContainer';
import { specs } from '@/constants/course'

export async function generateStaticParams() {
  return ["0", "1", "2", "3", "4", "5"].map((id) => ({ id }));
};

export async function generateMetadata(
  { params: { id } }: { params: { id: number } }
): Promise<{ title: string, description: string }> {
  return {
    title: specs.specializations[id].heading,
    description: specs.specializations[id].description
  }
}

export default function Specialization({ params: { id } }: { params: { id: number } }) {

  return <CourseContainer
    courses={specs.specializations[id].courses}
    heading={specs.specializations[id].heading}
    description={specs.specializations[id].description}
  />
}
