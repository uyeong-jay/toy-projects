import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { counterReducer, counterSaga } from "../_reducers/counter_reducer";

//reducer모음(combine: reducer들을 합쳐줌)
const rootReducer = combineReducers({ counterReducer });

//saga모음(all: saga들을 동시에 실행 시켜줌)
function* rootSaga() {
  yield all([fork(counterSaga)]);
}

export { rootReducer, rootSaga };
