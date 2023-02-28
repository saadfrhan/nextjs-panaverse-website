import Markdown from "markdown-to-jsx";
import styles from './course.module.css';
import { getPostData } from "../../../utils/post_gen";
import { course_slugs } from "@/constants/course";

export async function generateStaticParams() {
  return course_slugs.map((id) => ({ id }));
}

export async function generateMetadata(
  { params: { id } }: { params: { id: string } }
) {
  const title = (
    id.split('-')[0] + "-" + id.split('-')[1]
  ).toUpperCase();
  return {title}
}

export default async function Course({ params: { id } }:
  { params: { id: string } }
) {

  const { fileContents } = await getPostData(id);

  return <div className={styles.content}>
    <Markdown>{fileContents}</Markdown>
  </div>

}
