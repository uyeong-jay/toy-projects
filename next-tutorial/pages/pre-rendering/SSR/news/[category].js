import React from "react";

const ArticlesByCategory = ({ articles, category }) => {
  return (
    <>
      <h3>
        Articles ( category: <i>{category}</i> )
      </h3>
      {articles.map((article, i) => (
        <ul key={article.id}>
          <li>{article.title}</li>
          <li>{article.category}</li>
          <li>{article.description}</li>
        </ul>
      ))}
    </>
  );
};

export default ArticlesByCategory;

//요청시마다 새페이지가 실행되기 때문에 html은 생성되지 않음
export const getServerSideProps = async ({ params, req, res, query }) => {
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Uyeong"]); //쿠키 생성

  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const articles = await response.json();

  console.log("Pre-rendering (flie name: ArticlesByCategory)"); //매요청마다 실행됨

  return {
    props: {
      articles,
      category,
    },
  };
};
