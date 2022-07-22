//store: reducer 모아놓기

//1. configureStore 불러오기
const { configureStore } = require("@reduxjs/toolkit");

//미들웨어: logger 불러오기
const reduxLogger = require("redux-logger");

//2. 자신의 Slice에서 reducer 불러오기
const cakeReducer = require("../features/cake/cakeSlice");
const coffeeReducer = require("../features/coffee/coffeeSlice");
const userReducer = require("../features/user/userSlice");

const logger = reduxLogger.createLogger();

//3. configureStore에 불러온 reducer 저장하기
//  - redux의 combine reducer 와 비슷한 역할
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    coffee: coffeeReducer,
    user: userReducer,
  },
  //미들웨어: logger 추가하기
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//4. store 내보내기
module.exports = store;
