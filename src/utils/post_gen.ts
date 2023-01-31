import path from 'path';
import fs from 'fs'

export async function getPostData(id: string) {
  const fullPath = path.join("C:\\Users\\hp\\Downloads\\development\\nextjs-projects\\nextjs-panaverse-website\\src\\constants\\course_outline", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');


  return {
    id,
    fileContents,
  };
}