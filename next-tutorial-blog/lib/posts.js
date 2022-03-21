import fs from 'fs' //file system module
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts')


//getSortedPostsData
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


  //최종적으로 이런 식으로 배열을 리턴함(날짜순 정렬됨)
  // [
  //   {
  //     id: "ssg-ssr",
  //     title: "When to Use Static...,
  //     date: "2020-01-02"
  //   },
  //   {
  //     id: "...",
  //     title: "...",
  //     date: "..."
  //   }
  // ]

}


//getAllPostIds =ID
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }));

  //이런 식의 배열을 리턴하도록 함
  // [
  //   {
  //     params: {
  //       [id]: '...(ex ssg-ssr)' 
  //     }
  //   }
  // ]
};



//getPostData =DATA
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  //파일의 metadata를 파싱 하기위해 gray-matter라이브러리 사용
  const matterResult = matter(fileContents);

  //markdown 파일을 HTML(string)로 변경 하기 위해 remark 라이브러리 사용하기
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  //id와 파싱된 data들 모아서 리턴
  return {
    id,
    ...matterResult.data,
    contentHtml,
  }

  //id에 맞는 하나의 post 데이터 만 리턴함
  //   {
  //     id: "ssg-ssr",
  //     title: "When to Use Static...,
  //     date: "2020-01-02",
  //     contentHtml
  //   }

};

