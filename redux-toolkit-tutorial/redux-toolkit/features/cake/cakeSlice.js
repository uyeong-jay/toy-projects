//Slice: createSlice 불러오기, initialState, reducer, action 생성

//1. createSlice 불러오기
//  - createSlice는 immer가 이미 적용된상태이다
const { createSlice } = require("@reduxjs/toolkit");

//+1. 추가할 리듀서에 넣을 action 가져오기
const { coffeeActions } = require("../coffee/coffeeSlice");

//2. initialState(객체) 생성
const initialState = {
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
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
  //+2. 리듀서 추가하기 - 다른곳에 이미 정의한 action을 사용하고 싶을때 사용
  // - 예를들어 누군가 커피(coffeeActions.ordered)를 사면 케이크(state.numOfCakes--)를 서비스로 주고 싶을때 사용
  extraReducers: (builder) => {
    builder.addCase(coffeeActions.ordered, (state) => {
      state.numOfCakes--;
    });
  },
});

//4. 자신의 Slice에서 reducer 와 actions 내보내기
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
