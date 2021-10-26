export const pormiseDispatcher = (type, promiseFn) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return async (dispatch, param) => {
    dispatch({ type });
    try {
      const data = await promiseFn(param);
      dispatch({ type: SUCCESS, data });
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  };
};
