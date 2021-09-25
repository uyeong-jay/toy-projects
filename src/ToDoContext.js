import React, { useReducer, useRef } from "react";
import { CREATE, REMOVE, TOGGLE } from "./actions/types";
import { ToDoState, ToDoDispatch, ToDoNewId } from "./hooks/useToDoContext";

const initialToDos = [
  // {
  //   id: 1,
  //   text: "리액트",
  //   done: true,
  // },
  // {
  //   id: 2,
  //   text: "리액트공",
  //   done: true,
  // },
  // {
  //   id: 3,
  //   text: "리액트공부",
  //   done: false,
  // },
];

const toDoReducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return state.concat(action.data);
    case REMOVE:
      return state.filter((v, i) => v.id !== action.data);
    case TOGGLE:
      return state.map((v, i) =>
        v.id === action.data ? { ...v, done: !v.done } : v
      );
    default:
      //미처리된 action type 에러
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

//감싸주는 컴포넌트 with children
const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toDoReducer, initialToDos);
  const newId = useRef(state.length);

  return (
    <ToDoState.Provider value={state}>
      <ToDoDispatch.Provider value={dispatch}>
        <ToDoNewId.Provider value={newId}>{children}</ToDoNewId.Provider>
      </ToDoDispatch.Provider>
    </ToDoState.Provider>
  );
};

export default ToDoProvider;
