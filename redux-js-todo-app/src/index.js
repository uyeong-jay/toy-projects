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







const createToDo = (arrToDos) => {
  ulToDo.textContent = '';
  arrToDos.forEach((toDo) => {
    const liToDo = document.createElement('li');//생성
    const delbtn = document.createElement('button');

    delbtn.textContent = '❌';
    liToDo.textContent = toDo.text;//내용
    inputToDo.value = '';

    liToDo.after(delbtn);//위치
    ulToDo.append(liToDo);
  });
  
}

//store
const store = createStore(reducer);



//subscribe(onChange)
const onChange = () => {
  const arrayToDos = store.getState();//reducer 현재상태 가져오기
  createToDo(arrayToDos);
}


//subscribe
//dispatch > reducer > subscribe > onChange 실행
store.subscribe(onChange);




//dispatch: reducer 실행
const dispatchAddToDo = (v) => {
  store.dispatch(addToDo(v));
}
const dispatchDeleteToDo = (v) => {
  store.dispatch(deleteToDo(v));
}


const handleToDoSubmit = (e) => {
  e.preventDefault();
  const inputToDoValue = inputToDo.value;
  dispatchAddToDo(inputToDoValue);
}

formToDo.addEventListener('submit', handleToDoSubmit);


