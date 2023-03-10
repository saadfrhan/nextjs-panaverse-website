import path from 'path';
import fs from 'fs'

export async function getPostData(id: string) {

  const fullPath = path.join(process.cwd(), `//src//constants//course_outline//${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return {
    id,
    fileContents,
  };
}