import { call, put } from "redux-saga/effects";

export const promiseSaga = (type, promiseFn) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    //action을 파라미터로 사용가능
    try {
      const data = yield call(promiseFn, action.data); // 재사용 대비용으로  action.data을 넘겨줌
      yield put({ type: SUCCESS, data });
    } catch (e) {
      yield put({ type: ERROR, error: e });
    }
  };
};

export const promiseSagaById = (type, promiseFn) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    const id = action.meta;
    try {
      const data = yield call(promiseFn, action.data);
      yield put({ type: SUCCESS, data, meta: id });
    } catch (e) {
      yield put({ type: ERROR, error: e, meta: id });
    }
  };
};
