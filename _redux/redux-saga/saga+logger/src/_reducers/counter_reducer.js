//saga-effects
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

//type
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

//action-creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

//saga
function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); //put: dispatch
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); //INCREASE_ASYNC 액션을 여러번 디스패치 > 모두 처리됨
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); //DECREASE_ASYNC 액션을 여러번 디스패치 > 가장 마지막것만 처리됨
}

//초기상태값은 객체가 아니여도 상관 없음
const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
