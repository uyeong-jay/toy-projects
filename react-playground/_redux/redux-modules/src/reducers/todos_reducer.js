//initialState
const initialState = [
  // {
  //   id: 1,
  //   text: "",
  //   done: false,
  // }
];

//type
const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

//action-creator-func
//add: text, delete: id, toggle: id
let nextId = 1;
export const addToDo = (text) => ({
  type: ADD_TODO,
  data: {
    id: nextId++,
    text,
    done: false
  }
});
export const removeToDo = (data) => ({
  type: REMOVE_TODO,
  data
});
export const toggleToDo = (data) => ({
  type: TOGGLE_TODO,
  data
});

//reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.data);
    case REMOVE_TODO:
      return state.filter((v, i) => v.id !== action.data);
    case TOGGLE_TODO:
      return state.map((v, i) =>
        v.id === action.data ? { ...v, done: true } : v
      );
    default:
      return state;
  }
};

export default todosReducer;
