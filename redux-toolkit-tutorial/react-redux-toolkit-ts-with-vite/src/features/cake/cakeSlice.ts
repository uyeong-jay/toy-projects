//Slice: createSlice 불러오기, initialState, reducer, action 생성

//1. createSlice 불러오기
//  - createSlice는 immer가 이미 적용된상태이다
//+ ts일 경우 PayloadAction도 불러오기
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//+1. 추가할 리듀서에 넣을 action 가져오기
import { ordered as coffeeOrdered } from "../coffee/coffeeSlice";

//+ Add types
interface initialState {
  numOfCakes: number;
}

//2. initialState(객체) 생성
const initialState: initialState = {
  numOfCakes: 10,
};

//3. 자신의 Slice 만들기
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    //immer가 이미 적용되어있음
    ordered: (state) => {
      state.numOfCakes--;
    },
    //+ Add types
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
  //+2. 리듀서 추가하기 - 다른곳에 이미 정의한 action을 사용하고 싶을때 사용
  // - 예를들어 누군가 커피를 사면(coffeeActions.ordered) 케이크를 서비스로(state.numOfCakes--) 주고 싶을때 사용
  extraReducers: (builder) => {
    builder.addCase(coffeeOrdered, (state) => {
      state.numOfCakes--;
    });
  },
});

//4. 자신의 Slice에서 reducer 와 actions 내보내기
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
