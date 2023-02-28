import Markdown from "markdown-to-jsx";
import styles from './course.module.css';
import { getPostData } from "../../../utils/post_gen";
import { course_slugs } from "@/constants/course";
import { Metadata } from "next";

export async function generateStaticParams() {
  return course_slugs.map((id) => ({ id }));
}

export async function generateMetadata(
  { params: { id } }: { params: { id: string } }
): Promise<Metadata> {
  function customizeTitle(_title: string[]) {
    let title = (_title[0] + "-" + _title[1]).toUpperCase();
    for (let i = 2; i < _title.length; i++) {
      title = title + " " + _title[i][0].toUpperCase() + _title[i].substring(1)
    }
    return title
  }
  return {
    title: customizeTitle(id.split('-'))
  }
}

export default async function Course({ params: { id } }:
  { params: { id: string } }
) {

  const { fileContents } = await getPostData(id);

  return <div className={styles.content}>
    <Markdown>{fileContents}</Markdown>
  </div>

}
