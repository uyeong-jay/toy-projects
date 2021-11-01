import { combineReducers } from "redux";
import counter from "../_reducers/counter_reducer";

const rootReducer = combineReducers({ counter });

export default rootReducer;
