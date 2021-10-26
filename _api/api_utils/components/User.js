import React, { useEffect } from "react";
import { useUsersState, useUersDispatch } from "../hooks/useContext";
import { getUser } from "./UsersContext";

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUersDispatch();

  const { loading, data: user, error } = state.user;

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  if (loading && !user) return <div>Loading...</div>;
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
