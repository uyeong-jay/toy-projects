import { getContext, takeLatest } from "redux-saga/effects";
import * as postApi from "../api/post_api"; //추출된 모든 함수 불러오기
import { promiseSaga, promiseSagaById } from "../utils/async_utils";
import { GET_POSTS, GET_POST, GO_BACK } from "../_types/types";

//saga함수 //최초 action 객체들
export const getPosts = () => ({ type: GET_POSTS }); //순수 액션 객체를 리턴
export const getPost = (id) => ({ type: GET_POST, data: id, meta: id }); //재사용을 대비해 data와 meta 두가지를 사용
export const goBack = () => ({ type: GO_BACK });

//saga함수 //util
export const getPostsSaga = promiseSaga(GET_POSTS, postApi.getPosts);
export const getPostSaga = promiseSagaById(GET_POST, postApi.getPostById);

//saga함수 //history
export function* goBackSaga() {
  const history = yield getContext("history");
  history.goBack();
}

//saga함수들 합쳐주기
export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsSaga);
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GO_BACK, goBackSaga);
}
