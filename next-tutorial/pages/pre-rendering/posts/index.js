import React from "react";
import Post from "../../../components/pre-rendering/post/post";

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
      posts: posts.slice(0, 3),
    },
  };
};
