import React from "react";
import axios from "axios";
import { useAsync } from "react-async";

const fetchUser = async (id) => {
  const response = await axios.get(
    //users중 한 user만 가져옴
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};

const User = ({ id }) => {
  const { data: user, error, isLoading } = useAsync({
    promiseFn: fetchUser, //호출할 함수 넣기
    id, //객체 형태로 전달된 id
    watch: id // id가 바뀔때 마다 promiseFn 재호출
    //watch, watchFn
  });

  if (isLoading) return <div>Loading...</div>;
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
