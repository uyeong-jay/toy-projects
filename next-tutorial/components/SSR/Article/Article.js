import Link from "next/link";
import React from "react";

const Article = ({ article }) => {
  return (
    <>
      <Link href={`/pre-rendering/SSR/news/${article.category}`} passHref>
        <li>{article.title}</li>
      </Link>
      <Link href={`/pre-rendering/SSR/news/${article.category}`} passHref>
        <li>{article.category}</li>
      </Link>
      <br />
    </>
  );
};

export default Article;
