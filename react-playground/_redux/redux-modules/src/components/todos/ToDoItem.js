import React, { memo } from "react";

const ToDoItem = ({ todo, onRemove, onToggle }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={onToggle(todo.id)}
    >
      {todo.text}
      <button onClick={onRemove(todo.id)}>DEL</button>
    </li>
  );
};

export default memo(ToDoItem);
