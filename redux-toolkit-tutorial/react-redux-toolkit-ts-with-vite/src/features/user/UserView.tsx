import React, { useEffect } from "react";
//+ Add typs
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useAppSelector((state) => state.user);
  //state.user: initialState
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers()); //dispatch에 함수 넣어주는 것도 가능
  }, []);
  return (
    <>
      <h2>List of users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users?.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
      <button onClick={() => dispatch(fetchUsers())}>데이터 재요청</button>
    </>
  );
};

export default UserView;
