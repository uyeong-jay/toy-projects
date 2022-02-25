import React from "react";
import ToDoItem from "./ToDoItem";

import styled from "styled-components";
import { useToDoState } from "../hooks/useToDoContext";

const ToDoListBlock = styled.div`
  flex: 0.75;
  padding: 25px 25px;
  padding-bottom: 50px;
  overflow-y: auto;
`;

const ToDoList = () => {
  const toDoState = useToDoState();

  return (
    <ToDoListBlock>
      {toDoState.map((v, i) => (
        <ToDoItem key={v.id} {...v} />
      ))}
    </ToDoListBlock>
  );
};

export default ToDoList;
