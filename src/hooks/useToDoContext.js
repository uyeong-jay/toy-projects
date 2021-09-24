import { useContext, createContext } from 'react';

const ToDoState = createContext(null);
const ToDoDispatch = createContext(null);
const ToDoNewId = createContext(null);

//Context 커스텀 hooks
const useToDoState = () => {
  const context = useContext(ToDoState);
  if (!context) {
    //Provider로 감싸지지않은 바깥에서 컨텍스트 사용시 에러
    throw new Error('1. Cannot find ToDoProvider');
  }
  return context;
}

const useToDoDispatch = () => {
  const context = useContext(ToDoDispatch);
  if (!context) {
    throw new Error('2. Cannot find ToDoProvider');
  }
  return context;
}

const useToDoNewId = () => {
  const context = useContext(ToDoNewId);
  if (!context) {
    throw new Error('3. Cannot find ToDoProvider');
  }
  return context;
}

export { 
  ToDoState, ToDoDispatch, ToDoNewId, 
  useToDoState, useToDoDispatch, useToDoNewId 
}

