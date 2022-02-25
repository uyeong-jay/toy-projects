export const reducerStateUtils = {
  initial: () => ({
    loaing: false,
    data: null,
    error: null
  }),

  //기본값을 null로 지정해주고 인수를 전달 받으면 언제든 바뀔수 있도록함
  loading: (data = null) => ({
    loading: true,
    data,
    error: null
  }),

  success: (data) => ({
    loading: false,
    data,
    error: null
  }),

  error: (error) => ({
    loading: false,
    data: null,
    error
  })
};

const { loading, success, error } = reducerStateUtils;

export const reducerUtil = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loading(keepData ? state[key].data : null)
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data)
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error)
        };
      default:
        return state;
    }
  };
};
