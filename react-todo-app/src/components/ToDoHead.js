import React from "react";
import styled from "styled-components";
import { useToDoState } from "../hooks/useToDoContext";

const ToDoHeadBlock = styled.div`
  flex: 0.25;
  padding: 50px 0px 10px 25px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    font-size: 21px;
    color: #868e96;
  }
  .tasks-left {
    padding-top: 40px;
    font-size: 18px;
    color: #20c997;
  }
`;

const ToDoHead = () => {
  const toDoState = useToDoState();
  const todayToDos = toDoState.filter((v, i) => v.done === false).length;

  const date = new Date();
  const todayDateString = date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const todayWeekdayString = date.toLocaleString("ko-KR", { weekday: "long" });

  return (
    <ToDoHeadBlock>
      <h1>{todayDateString}</h1>
      <div className="day">{todayWeekdayString}</div>
      <div className="tasks-left">오늘 할일: {todayToDos}</div>
    </ToDoHeadBlock>
  );
};

export default ToDoHead;
