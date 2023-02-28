import Markdown from 'markdown-to-jsx';
import { course_slugs } from '@/constants/course';
import { getPostData } from '../../../utils/post_gen';
import styles from './course.module.scss';

export async function generateStaticParams() {
  return course_slugs.map((id) => ({ id }));
}

export default async function Course({ params: { id } }:
  { params: { id: string } }
) {

  const { fileContents } = await getPostData(id);

  const title = (
    id.split('-')[0] + '-' + id.split('-')[1]
  ).toUpperCase();

  return <div className={styles.content}>
    <title>{title + ' - Panaverse'}</title>
    <Markdown>{fileContents}</Markdown>
  </div>;
};
