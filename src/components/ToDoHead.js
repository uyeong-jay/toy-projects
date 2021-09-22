import React from 'react';
import styled from 'styled-components';

const ToDoHeadBlock = styled.div`
  border: 1px solid black;
  flex: 0.25;
  padding: 50px 0px 10px 25px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    border: 1px solid black;
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    border: 1px solid black;
    font-size: 21px;
    color: #868e96;
  }
  .tasks-left {
    border: 1px solid black;
    padding-top: 40px; 
    font-size: 18px;
    color: #20c997;
  }
`;

const ToDoHead = () => {
  return(
    <ToDoHeadBlock>
      <h1>2021년 9월 22일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">오늘 할일: 2</div>
    </ToDoHeadBlock>
  );
}

export default ToDoHead;