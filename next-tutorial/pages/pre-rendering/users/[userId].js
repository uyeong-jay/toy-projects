import React from "react";

const DetailUser = ({ user }) => {
  return (
    <>
      <h3>Detail user</h3>
      <ul>
        <li>name: {user.name}</li>
        <li>email: {user.email}</li>
        <li>address: {user.address.street}</li>
      </ul>
    </>
  );
};

export default DetailUser;

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const paths = users.map((user, i) => ({
      params: {
        userId: `${user.id}`,
      },
    }));
    return { paths, fallback: false };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.userId}`
    );
    const user = await res.json();
    return {
      props: {
        user,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
