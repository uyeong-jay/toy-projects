//redux - 기본

// 1. redux
// import { createStore } from "redux";
const redux = require("redux");
const { createStore, applyMiddleware } = redux;

// 1-2. 여러 reducer 합치기 위한 combineReducers 불러오기
const combineReducers = redux.combineReducers;

// 1-3. redux-logger 미들웨어 사용 하기
const reduxLogger = require("redux-logger");
const loggerMiddleware = reduxLogger.createLogger();

// 2. initialState
// const initialState = {
//   numOfCoffee: 10,
//   anotherProperty: 0,
// };
// 2-1. initialState 분리하기
const initialCoffeeState = {
  numOfCoffee: 10,
  anotherProperty: 0,
};

// 2-1. initialState 분리하기
const initialCakeState = {
  numOfCake: 5,
  anotherProperty: 0,
};

// 3. type
const COFFEE_ORDERED = "COFFEE_ORDERED";
const COFFEE_RESTOCKED = "COFFEE_RESTOCKED";
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// 4. action(=객체)
// 4-1. action을 리턴하는 함수(action creator) - Coffee
const orderCoffee = () => {
  return {
    type: COFFEE_ORDERED, //type: 속성값
    paylaod: 1, //추가된 속성은 모두 payload에 담기
  };
};
const restockCoffee = (qty = 1) => {
  //'qty = 1': qty에 아무것도 전달이 안되면 1 로 전달 되도록 함
  return {
    type: COFFEE_RESTOCKED,
    paylaod: qty,
  };
};

// 4-1. action을 리턴하는 함수(action creator) - Cake
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    paylaod: 1,
  };
};
const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    paylaod: qty,
  };
};

// 5. rducer
// 5-1. rducer - Coffee
const coffeeReducer = (state = initialCoffeeState, action) => {
  switch (action.type) {
    case COFFEE_ORDERED:
      return {
        //new state
        ...state, //나머지는 그대로 유지
        numOfCoffee: state.numOfCoffee - action.paylaod, //action에 추가된 속성 action.paylaod 이렇게 사용가능
      };
    case COFFEE_RESTOCKED:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee + action.paylaod,
      };

    default:
      return state;
  }
};
// 5-2. rducer - Cake
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - action.paylaod,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCake: state.numOfCake + action.paylaod,
      };
    default:
      return state;
  }
};

// 6. store
// 6-1. 여러 리듀서 합친 combineReducers를 rootReducer에 저장하기
//rootReducer는 따로 새 파일을 만들어 분리해서 사용하면 좋음
const rootReducer = combineReducers({
  coffee: coffeeReducer,
  cake: cakeReducer,
});
// 6-2. rootReducer와 미들웨어로 store 만들기
// 미들웨어는 store에 applyMiddleware를 넣고 그 안에 넣어주기
// 미들웨어를 여러개 적용할때는 logger미들웨어(loggerMiddleware)는 맨마지막에 넣기
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

// 7. getState: store의 현재 상태 값 가져옴
console.log("Initial state", store.getState());

// 8. subscribe(unsubscribe): store에 변화가 있을 경우 인수로 들어간 callback함수 실행됨
const unsubscribe = store.subscribe(() => {
  //logger미들웨어를 넣은 경우에는 console해주지 않아도 됨
  // console.log("Update state", store.getState())
  return;
});

// 9. dispatch: action(=객체)을 reducer로 보내줌
store.dispatch(orderCoffee());
store.dispatch(orderCoffee());
store.dispatch(orderCoffee());
store.dispatch(restockCoffee(3));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

//10. unsubscribe
unsubscribe();
