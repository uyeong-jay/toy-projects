import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";

const User = ({ id }) => {
  const fetchUser = async (id) => {
    const response = await axios.get(
      //users중 한 user만 가져옴
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  };

  const [state] = useAsync(() => fetchUser(id), [id]); // id가 바뀔때마다 재호출

  const { loading, data: user, error } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!user) return null;
  return (
    <>
      <h2>{user.name}</h2>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
    </>
  );
};

export default User;
