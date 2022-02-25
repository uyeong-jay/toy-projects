import { posts } from "./post_dummy";

//fake api(1,2)

//1.delay
const delay = (n) => {
  return new Promise((resolve) => setTimeout(() => resolve(), n));
};

//2.get data
export const getPosts = async () => {
  await delay(1000);
  return posts;
};

export const getPostById = async (id) => {
  await delay(1000);
  return posts.find((post) => post.id === id); //같은 id중 첫번째 요소 반환
};
