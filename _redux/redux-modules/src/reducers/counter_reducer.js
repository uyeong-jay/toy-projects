//initialState
const initialState = {
  number: 0,
  diff: 1
};

//type
//type with prefix: 다른파일의 타입들과 중복 방지
//Ducks pattern
const SET_DIFF = "count/SET_DIFF";
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

//action-creator-func
//export (다른 컴포넌트에 써주기)
export const setDiff = (data) => ({
  type: SET_DIFF,
  data
});
export const increase = () => ({
  type: INCREASE
});
export const decrease = () => ({
  type: DECREASE
});

//reducer
//export (리듀서 끼리 합쳐주기)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.data
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
};

export default counterReducer;
