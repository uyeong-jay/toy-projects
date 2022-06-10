import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./components/global/NotFound";

// https://lakelouise.tistory.com/84 - React.creatElement
// https://gomgomkim.tistory.com/11 - require(`./pages/${name}`).default
const generatePage = (name: string) => {
  const component = () => require(`./pages/${name}`).default;

  try {
    // ./pages/${name}경로의 component를 보여주기
    return React.createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};

const PageRenderer = () => {
  const { page, slug } = useParams();
  let name = "";
  if (page) name = slug ? `${page}/${slug}` : `${page}`;

  return generatePage(name);
};

export default PageRenderer;
