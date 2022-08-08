import React from "react";
import Post from "../../../../components/SSG/Post/Post";

const Posts = ({ posts }) => {
  return (
    <>
      <h3>List of posts</h3>
      <ul>
        {posts.map((post, i) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  return {
    props: {
      // posts: posts.slice(0, 3), //post 3개만 가져오기
      posts, //post 100개 다 가져오기
      //빌드시에는 화면에 보이는 것만 Json 파일을 다운로드해주고
      //스크롤을 하면 스크롤 하면서 보이는 post목록들의 Json 파일들을 다운로드함(빌드를 한 후 .next 폴더 > server > pages > 해당파일 에서 확이 가능)
      //따라서 [postId]에서 fallback:ture 일때 내가 만들어준 Loading... 화면을 안띄울수 있을 뿐더러 이미 다운로드 되어 져있기 때문에 이후 사용자가 요청시에는 아무 네크워크 요청 없이 빠른 속도로 해당 페이지 보여주기 가능
      // ( Loading... 화면은 fallback:ture 일때 Json파일이 다운되어있지 않은 경우 사용자가 해당 Json파일이 있는 페이지를 들어갈때 보여진다(주로 url을 통해 직접 치고 들어갈때 보임) )
    },
  };
};
