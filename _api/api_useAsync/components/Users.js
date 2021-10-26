import React, { useState } from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import User from "./User";

const Users = () => {
  const [userId, setUserId] = useState(null);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  };

  //fetchUsers === callback
  //fetchUsers() === callback()
  //response.data === data
  const [state, getUsers] = useAsync(fetchUsers, [], true);

  //state 비구조화 할당
  //data키워드를 users로 변경
  const { loading, data: users, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!users) return <button onClick={getUsers}>Load Data</button>;
  return (
    <>
      <ul>
        {users.map((v, i) => (
          <li
            key={v.id}
            onClick={() => setUserId(v.id)}
            style={{ cursor: "pointer" }}
          >
            {v.name}
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Reload</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
