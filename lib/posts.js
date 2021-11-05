import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {

  // post폴더 안의 파일이름 변수에 저장 
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {

    //파일 이름에서 .md 지운후 변수 id에 저장
    const id = fileName.replace(/\.md$/, '')

    //markdown된 파일 문자열로 변환
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    //파일의 metadata를 파싱 하기위해 gray-matter라이브러리 사용
    const matterResult = matter(fileContents);

    //id와 파싱된 data들 모아서 리턴
    return {
      id,
      ...matterResult.data
    };

  });

  //post data들을 date 순으로 정렬하기
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  });

}