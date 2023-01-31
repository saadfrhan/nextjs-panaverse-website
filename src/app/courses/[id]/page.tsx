import React from "react";

import Markdown from "markdown-to-jsx";
import styles from './course.module.css';
import { getPostData } from "../../../utils/post_gen";
import { course_slugs } from "@/constants/course";

export async function generateStaticParams() {
  return course_slugs.map((id) => ({ id }));
}

export default async function Course({ params }: {
  params: { id: string }
}) {

  const { fileContents } = await getPostData(params.id);

  return <div className={styles.content}>
    <Markdown>{fileContents}</Markdown>
  </div>

}