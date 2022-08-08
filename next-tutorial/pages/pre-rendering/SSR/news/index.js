import React from "react";
import Article from "../../../../components/SSR/Article/Article";

const News = ({ articles }) => {
  return (
    <>
      <h3>News article list</h3>
      <ul>
        {articles.map((article, i) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
};

export default News;

//요청시마다 새페이지가 실행되기 때문에 html은 생성되지 않음
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/news");
  const articles = await res.json();

  console.log("Pre-rendering (file name: News)"); //매요청마다 실행됨

  return {
    props: {
      articles,
    },
  };
};
