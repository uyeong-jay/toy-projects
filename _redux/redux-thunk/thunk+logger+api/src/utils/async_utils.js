//Promise with Thunk
export const promiseThunk = (type, promiseFn) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  //return thunk
  return () => async (dispatch) => {
    dispatch({ type }); //action 을 객체로 넣어서 dispatch
    try {
      const data = await promiseFn();
      dispatch({ type: SUCCESS, data });
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  };
};

//Promise and id with Thunk
export const promiseThunkById = (type, promiseFn) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  //return thunk
  return (param) => async (dispatch) => {
    const id = param; //id 자체
    dispatch({ type, meta: id });
    try {
      const data = await promiseFn(param); // id에 의한 data
      dispatch({ type: SUCCESS, data, meta: id });
    } catch (e) {
      dispatch({ type: ERROR, error: e, meta: id });
    }
  };
};
