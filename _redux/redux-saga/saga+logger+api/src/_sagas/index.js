import { all, fork } from "redux-saga/effects";
import { postsSaga } from "./posts_saga";

function* rootSaga() {
  yield all([fork(postsSaga)]); //지금은 하나만 있음
}

export default rootSaga;
