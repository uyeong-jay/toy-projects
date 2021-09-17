//createStore
import { createStore } from 'redux';

//type
const ADD = 'ADD';
const DELETE = 'DELETE';

//action-creator
const addToDo = (text) => {
  return {
    type: ADD,
    id: Date.now(),
    text,
  }
};
const deleteToDo = () => {
  return {
    type: DELETE,

  }
};

//reducer
const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD: 
      return [...state, {id: action.id, text: action.text,}]
    case DELETE: 
      return state.filter((v) => v.id !== action.id)
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

//action-creators
export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;