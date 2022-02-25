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
          //[key] ex) ['posts'], ['post']
          //최초 로딩(화면): 로딩화면표시(데이터없음)
          //리로딩(화면): 최신데이터 표시
          //다시 돌아올때 데이터를 이미 받아온 데이터가 아닌 최신데이터로 유지
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

//상태에 id를 단 유틸함수
export const reducerUtilById = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: loading(
              keepData ? state[key][id] && state[key][id].data : null
              //state[key][id] && :초기에 상태 데이터 없을때가 있으므로 유효성 검사 추가
            )
          }
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: success(action.data)
          }
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: error(action.error)
          }
        };
      default:
        return state;
    }
  };
};
