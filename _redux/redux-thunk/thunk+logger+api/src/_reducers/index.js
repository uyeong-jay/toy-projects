import { combineReducers } from "redux";
import { postsReducer } from "../_reducers/posts_reducer";

const rootReducer = combineReducers({ postsReducer });

export default rootReducer;
