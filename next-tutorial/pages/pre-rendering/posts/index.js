import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      <h3>Post list</h3>
      <ul>
        {posts.map((post, i) => {
          return (
            <Link href={`/pre-rendering/posts/${post.id}`} key={post.id} passHref>
              {/* Link는 오직 하나의 child만 지원 */}
              <li>{post.id}: {post.title}</li>
            </Link>
          );
        })}
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
