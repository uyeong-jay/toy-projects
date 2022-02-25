import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ dispatchDeleteToDo, toDoText, toDoId }) => {
  return (
    <li>
      <Link to={`/${toDoId}`}>{toDoText}</Link>
      <button onClick={dispatchDeleteToDo}>DEL</button>
    </li>
  );
};

//disptach 기능 추가
//ownProps: 자신의 컴포넌트 props 정보를 전달해줌
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchDeleteToDo: () => {
      dispatch(remove(ownProps.toDoId));
    },
  };
};

//connect로 store.js에 접근
export default connect(null, mapDispatchToProps)(ToDo);
