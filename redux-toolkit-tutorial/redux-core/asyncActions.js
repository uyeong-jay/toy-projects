//redux - action을 비동기로 사용 (데이터를 상태에 따라 가져오기 위해)

//1. redux(store, applyMiddleware), thunkMiddleware, axios,
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

//2. initialState
const initialState = {
  loading: false,
  data: null,
  error: null,
};

//3. types
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//4. action creators (funcs)
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

//5. reducer
const fetchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    // default:
    //   // console.log(`Unhandled action type ${action.type}`);
    //   throw new Error(`Unhandled action type ${action.type}`);
  }
};

//action 비동기 처리 함수
//axios + [then, catch]
const fetchUsers = () => {
  // thunk에 의해 만들어진 함수
  // + const fetchUsers = () => (dispatch, getState) => {~}
  //   (위처럼 줄여쓰기 가능 현재는 일부러 풀어써놓음)
  // 이 함수 안 에서는 action 객체를 dispatch 할 수도 있고
  // getState를 사용하여 현재 상태도 조회 할 수 있다.
  return function (dispatch, getState) {
    dispatch(fetchUsersRequest()); //data-loading
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err)); //data-error
      });
  };
};

//6. store
const store = createStore(fetchUsersReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState()); //현재 데이터 상태 확인 콘솔
});

//thunk를 사용하여 함수(fetchUsers)를 dispatch 할수있게 됨
// ex) store.dispatch(fetchUsers())
//원래는 action 객체만 dispatch 가능함
// ex) store.dispatch(fetchUsersRequest())
store.dispatch(fetchUsers());
