import React, { useState } from "react";
import User from "./User";
import { useUsersState, useUersDispatch } from "../hooks/useContext";
import { fetchUsers } from "../apis/apis";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUersDispatch();

  const { loading, data: users, error } = state.users;
  const getUsers = () => {
    fetchUsers(dispatch);
  };

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
