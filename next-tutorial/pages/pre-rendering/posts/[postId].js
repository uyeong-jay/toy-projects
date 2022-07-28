import React from "react";

const DetailPost = ({ post }) => {
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
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const paths = posts.map((post, i) => ({
      params: { postId: `${post.id}` },
      //params는 문자열이 들어가야 하는데
      //post.id 이게 jsonplaceholder에는 숫자로 되어있어 `${}`을 씌워줌
    }));
    return { paths, fallback: false };

    // 밑에 처럼 데이터 fetch 없이 가져올 데이터 갯수만큼 하드 코딩으로도 작성 가능
    // return {
    //   paths: [
    //     {
    //       params: { postId: "1" },
    //     },
    //   ],
    //   fallback: false,
    // };
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

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log("error");
  }
};
