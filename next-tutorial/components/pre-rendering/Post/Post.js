import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <Link href={`/pre-rendering/posts/${post.id}`} passHref>
      {/* Link태그 안에는 오직 하나의 child만 지원 */}
      <li>
        ID: {post.id}, Title: {post.title}
      </li>
    </Link>
  );
};

export default Post;
