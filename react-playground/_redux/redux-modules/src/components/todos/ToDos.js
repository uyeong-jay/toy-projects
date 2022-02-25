import React, { useState } from "react";
import ToDoList from "./ToDoList";

//Presentatianal Component
const ToDos = ({ todos, onCreate, onRemove, onToggle }) => {
  const [text, setText] = useState("");

  const onSubmitTodo = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  const onChangeTodo = (e) => {
    setText(e.currentTarget.value);
  };

  return (
    <div>
      <h3>To Do List</h3>
      <form onSubmit={onSubmitTodo}>
        <input
          type="text"
          value={text}
          onChange={onChangeTodo}
          placeholder="What's your to do"
        />
        <button type="submit">Enter</button>
        <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </form>
    </div>
  );
};

export default ToDos;
