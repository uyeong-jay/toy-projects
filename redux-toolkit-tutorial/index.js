// 1. redux
// import { createStore } from "redux";
const redux = require("redux");
const createStore = redux.createStore;

// 2. initialState
const initialState = {
  numOfCoffee: 10,
  anotherProperty: 0,
};

// 3. type
const COFFEE_ORDERED = "COFFEE_ORDERED";

// 4. action
//action(=객체)을 리턴하는 함수
const orderCoffee = () => {
  return {
    type: COFFEE_ORDERED, //type: 속성값
    quantity: 1, //추가된 속성
  };
};

// 5. rducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COFFEE_ORDERED:
      return {
        //new state
        ...state,
        numOfCoffee: state.numOfCoffee - 1,
      };
    default:
      return state;
  }
};

// 6. store
const store = createStore(reducer);

// 7. getState, subscribe(unsubscribe), dispatch
//getState: store의 현재 상태 값 가져옴
console.log("Initial state", store.getState());

//subscribe: store에 변화가 있을 경우 인수로 들어간 callback함수 실행됨
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

//dispatch: action(=객체)을 reducer로 보내줌
store.dispatch(orderCoffee());
store.dispatch(orderCoffee());
store.dispatch(orderCoffee());

unsubscribe();
