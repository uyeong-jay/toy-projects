import React from "react";

const Home = (props) => {
  console.log(props.match.params);
  return <h2>Home Page</h2>;
};

export default Home;
