import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const Users = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //state 비구조화 할당
  //data키워드 users로 변경
  const { loading, data: users, error } = state;

  //에러가 먼저 통과 되도록 users 보다 위에 위치해두기
  if (loading) return <div>Loading...</div>; //로딩중
  if (error) return <div>ERROR</div>; //에러발생
  if (!users) return null; //users아직 없을 때
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
