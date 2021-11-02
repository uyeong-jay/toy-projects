import { posts } from "./post_dummy";

//fake api

//delay
const delay = (n) => {
  return new Promise((resolve) => setTimeout(() => resolve(), n));
};

//get data
export const getPosts = async () => {
  await delay(500);
  return posts;
};

export const getPostById = async (id) => {
  await delay(500);
  return posts.find((post) => post.id === id); //같은 id중 첫번째 요소 반환
};
