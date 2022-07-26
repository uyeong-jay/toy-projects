//store: reducer 모아놓기

//1. configureStore 불러오기
import { configureStore } from "@reduxjs/toolkit";

//미들웨어: logger 불러오기
// import reduxLogger from "redux-logger";

//2. 자신의 Slice에서 reducer 불러오기
import cakeReducer from "../features/cake/cakeSlice";
import coffeeReducer from "../features/coffee/coffeeSlice";
import userReducer from "../features/user/userSlice";

//미들웨어: logger 생성하기
// const logger = reduxLogger.createLogger();

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

//+ Add types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//4. store 내보내기
export default store;
