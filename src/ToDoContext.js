import React, { createContext, useReducer } from 'react';
import { CREATE, REMOVE, TOGGLE } from './actions/types';

const initialToDos = [
  {
    id: 1,
    text: '리액트',
    done: true,
  },
  {
    id: 2,
    text: '리액트공',
    done: true,
  },
  {
    id: 3,
    text: '리액트공부',
    done: false,
  }
];

const reducer = (state, action) => {
  switch(action.type) {
    case CREATE:
      return state.concat(action.data);
    case REMOVE:
      return state.filter((v,i) => v.id !== action.data);
    case TOGGLE:
      return state.map((v,i) => v.id === action.data 
        ? { ...v, done: !v.done } : v );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ToDoState = createContext(null);
export const ToDosDispatch = createContext(null);

const ToDoContext = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialToDos);
  

  return(
    <ToDoState.Provider value={state}>
      <ToDosDispatch.Provider value={dispatch}>
        {children}
      </ToDosDispatch.Provider>
    </ToDoState.Provider>
  )
}

export default ToDoContext;