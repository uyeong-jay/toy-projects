//redux - immer 사용시

// 1. redux
const redux = require("redux");
const createStore = redux.createStore;

//1-1. immer 불러오기
const produce = require("immer").produce;

// 2. initialState
const initialCakeState = {
  numOfCake: 5,
  anotherProperty: 0,
};

// 3. type
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// 4. action (function)
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

// 5. rducer with immer
const cakeReducer = (state = initialCakeState, action) =>
  //불변성 안지켜도됨(with immer)
  produce(state, (draft) => {
    switch (action.type) {
      case CAKE_ORDERED:
        draft.numOfCake = state.numOfCake - action.paylaod;
        break;
      case CAKE_RESTOCKED:
        draft.numOfCake = state.numOfCake + action.paylaod;
        break;
      default:
        break;
    }
  });

//불변성 지켜야함(without immer)
// switch (action.type) {
//   case CAKE_ORDERED:
//     return {
//       ...state,
//       numOfCake: state.numOfCake - action.paylaod,
//     };
//   case CAKE_RESTOCKED:
//     return {
//       ...state,
//       numOfCake: state.numOfCake + action.paylaod,
//     };
//   default:
//     return state;
// }

// 6. store
const store = createStore(cakeReducer);

// 7. getState: store의 현재 상태 값 가져옴
console.log("Initial state", store.getState());

// 8. subscribe(unsubscribe): store에 변화가 있을 경우 인수로 들어간 callback함수 실행됨
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

// 9. dispatch: action(=객체)을 reducer로 보내줌
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

// 10. unsubscribe
unsubscribe();
