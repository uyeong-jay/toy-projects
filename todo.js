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



//store



//dispatch


//subscribe