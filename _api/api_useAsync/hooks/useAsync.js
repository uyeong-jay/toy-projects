import { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const useAsync = (callback, deps = [], flag = false) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  //최초렌더링을 할때마다 data를 가져오도록 하지 않고,
  //flag가 false일때만 최초렌더링시 data를 가져오도록 함
  useEffect(() => {
    if (flag) return;
    fetchData();

    // 바로 다음줄만 비활성화 되도록 eslint 설정을 주석으로 추가
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
};

export default useAsync;
