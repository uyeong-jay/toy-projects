//index: action을 dispatch 하기, subscribe로 상태 확인하기

//1. store.js에서 'store' 불러오기
const store = require("../react-redux-toolkit/src/app/store");

//2. 자신의 Slice에서 'actions' 불러오기
const { cakeActions } = require("./features/cake/cakeSlice");
const { coffeeActions } = require("./features/coffee/coffeeSlice");

//+ 자신의 Slice에서 '데이터 불러온 함수' 불러오기
const { fetchUsers } = require("./features/user/userSlice");

//3. subscribe로 현재 데이터 확인
//  - logger 미들웨어 연결시에는 getState와 subscribe로 데이터 상태 확인 안해도됨
console.log("Initial store", store.getState()); //초기 데이터 콘솔
const unsubscribe = store.subscribe(() => {
  console.log("Updateed state ", store.getState()); //업데이트된 데이터 콘솔
});

//4. dispatch 로 action 전달하기
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(coffeeActions.ordered());
// store.dispatch(coffeeActions.ordered());
// store.dispatch(coffeeActions.ordered());
// store.dispatch(coffeeActions.restocked(3));

//+ dispatch 로 데이터 함수 실행하기
store.dispatch(fetchUsers());

//5. subscribe 실행
// unsubscribe();
