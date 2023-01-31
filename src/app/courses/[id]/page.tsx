import { getPostData } from "@/utils/post_gen"
import Markdown from "markdown-to-jsx";
import styles from '../../../styles/course.module.css';

export default async function Course({ params }: {
  params: { id: string }
}) {
  const { fileContents } = await getPostData(params.id);
  return <div className={styles.content}><Markdown>{fileContents}</Markdown></div>
}