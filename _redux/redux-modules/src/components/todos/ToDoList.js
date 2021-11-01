import React, { memo } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onRemove, onToggle }) => {
  return (
    <ul>
      {todos.map((v, i) => (
        <ToDoItem key={v.id} todo={v} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default memo(ToDoList);
