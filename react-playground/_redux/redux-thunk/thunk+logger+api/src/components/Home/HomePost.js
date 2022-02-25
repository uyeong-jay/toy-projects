import React from "react";
import { Link } from "react-router-dom";

const HomePost = ({ post }) => {
  const { id, title } = post;
  return (
    <li>
      <Link to={`/${id}`}>{title}</Link>
    </li>
  );
};

export default HomePost;
