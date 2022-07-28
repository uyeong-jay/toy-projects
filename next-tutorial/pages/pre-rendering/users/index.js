import React from "react";
import User from "../../../components/pre-rendering/User/User";

const Users = ({ users }) => {
  return (
    <>
      <h3>List of users</h3>
      <ul>
        {users.map((user, i) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default Users;

//async는 에러를 중간에 못잡아내어 try,catch문 과 항상 세트로 써주기(next는 잘잡아 내주는거 같긴한데..)
export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (err) {
    console.log("error");
  }
};
