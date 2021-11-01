import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDos from "./ToDos";
import { addToDo, removeToDo, toggleToDo } from "../../reducers/todos_reducer";

//Container Component
const ToDosContainer = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onCreateTodo = (text) => {
    dispatch(addToDo(text));
  };
  const onRemoveTodo = (id) => () => {
    dispatch(removeToDo(id));
  };
  const onToggleTodo = (id) => () => {
    dispatch(toggleToDo(id));
  };

  return (
    <ToDos
      todos={todos}
      onCreate={onCreateTodo}
      onRemove={onRemoveTodo}
      onToggle={onToggleTodo}
    />
  );
};

export default ToDosContainer;
