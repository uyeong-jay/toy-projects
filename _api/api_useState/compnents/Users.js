import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true); //로딩 활성화
    try {
      setUsers(null); //유저 초기화
      setError(null); //에러 초기화
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data); //유저 데이터
    } catch (e) {
      setError(e); //에러 발생
    }
    setLoading(false); //로딩 비활성화
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //에러가 먼저 통과 되도록 users위에 위치해두기
  if (loading) return <div>Loading...</div>; //로딩중
  if (error) return <div>ERROR</div>; //에러발생
  if (!users) return null; //users아직 없음
  return (
    <>
      <ul>
        {users.map((v, i) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
      <button onClick={fetchUsers}>재요청</button>
    </>
  );
};

export default Users;
