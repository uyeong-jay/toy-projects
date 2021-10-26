import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User";

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);

  //reload 로 promiseFn 호출
  //최초렌더링시 promiseFn 호출
  // const { data: users, error, isLoading, reload } = useAsync({
  //   promiseFn: fetchUsers
  // });

  //run 으로 deferFn 호출
  //원하는 시점에 deferFn 호출
  const { data: users, error, isLoading, run } = useAsync({
    deferFn: fetchUsers
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!users) return <button onClick={run}>Load Data</button>; //버튼클릭시 데이터 호출
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
      <button onClick={run}>Reload</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
