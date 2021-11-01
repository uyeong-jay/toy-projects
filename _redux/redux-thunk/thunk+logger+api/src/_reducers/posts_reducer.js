import * as postApi from "../api/post_api"; //추출된 모든 함수 불러오기
import { promiseThunk, promiseThunkById } from "../utils/async_utils";
import {
  reducerStateUtils,
  reducerUtil,
  reducerUtilById
} from "../utils/reducer_utils";
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR
} from "../_types/types";

//Thunk함수 => 함수를 리턴 //util 사용
export const getPosts = promiseThunk(GET_POSTS, postApi.getPosts);
export const getPost = promiseThunkById(GET_POST, postApi.getPostById);
export const goBack = () => (dispatch, getState, { history }) =>
  history.goBack();

const { initial } = reducerStateUtils;

const initialState = {
  posts: initial(),
  post: {} //초기에는 상태 데이터 없음
  // [key]: {
  //   loading: ~
  //   data: ~
  //   error: ~
  // },
  // [key]: {
  //   [id]: {
  //     loading: ~
  //     data: ~
  //     error: ~
  //   }
  // }
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      //위 3개의 case 일때 return
      return reducerUtil(GET_POSTS, "posts", true)(state, action); //고차함수 호출 줄여쓰기
    // const posts = reducerUtil(GET_POSTS, "posts");
    // return posts(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return reducerUtilById(GET_POST, "post", true)(state, action);
    default:
      return state;
  }
};
