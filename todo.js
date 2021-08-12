//createStore
import { createStore } from 'redux';

const formToDo = document.querySelector('#formToDo');
const inputToDo = document.querySelector('input');
const ulToDo = document.querySelector('#ulToDo');


//type
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//action
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
    id: Date.now(),
  };
}
const deleteToDo = (deleteId) => {
  return {
    type: DELETE_TODO,
    id: deleteId,
  }
}


//reducer
const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD_TODO :
      return [...state, {text: action.text, id: action.id}];
    case DELETE_TODO :
      return state.filter((v) => action.id !== v.id);
      // mutate를 하지 못해서 새로운 배열을 반환해주는 filter메소드를 씀
    default :
      return state;
  }

}



//store
const store = createStore(reducer);


//dispatch


//subscribe


