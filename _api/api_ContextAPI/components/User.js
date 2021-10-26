import React, { useEffect } from "react";
import { useUsersState, useUersDispatch } from "../hooks/useContext";
import { fetchUser } from "../apis/apis";

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUersDispatch();

  useEffect(() => {
    fetchUser(dispatch, id);
  }, [dispatch, id]);

  const { loading, data: user, error } = state.user;
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
