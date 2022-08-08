import React from "react";
import { useRouter } from "next/router";

const DetailPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  return (
    <>
      <h3>Detail post</h3>
      <ul>
        <li>id: {post.id}</li>
        <li>title: {post.title}</li>
        <li>body: {post.body}</li>
      </ul>
    </>
  );
};

export default DetailPost;

export const getStaticPaths = async () => {
  try {
    //fallback: false 일때 주로 사용하는 코드
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();
    // const paths = posts.map((post, i) => ({
    //   params: { postId: `${post.id}` },
    //   //params는 문자열이 들어가야 하는데
    //   //post.id 이게 jsonplaceholder에는 숫자로 되어있어 `${}`을 씌워줌
    // }));
    // return { paths, fallback: false };

    //fallback: true 일때 주로 사용하는 코드(가져올 몇개만 하드코딩 함)
    //fallback: true 와 하드코딩한 것 외에도 사용자가 알맞은 경로(ex) /posts/4)로 웹페이지를 띄울경우 내가 만들어놓은 fallback의 Loading창을 보여준후 해당 페이지의 JSON 파일이 다운로드되면 바로 해당 웹페이지를 띄워줌
    return {
      paths: [
        {
          params: { postId: "1" },
        },
        {
          params: { postId: "2" },
        },
        {
          params: { postId: "3" },
        },
      ],
      fallback: true,
    };
  } catch (err) {
    console.log("error");
  }
};

export const getStaticProps = async (context) => {
  try {
    const { params } = context; //getStaticPaths에서 params 가져오기
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );

    const post = await res.json();

    //fallback: true 라도 경로가 완전 틀렸을때는 404 페이지 보여주는 코드
    if (!post.id) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log("error");
  }
};
