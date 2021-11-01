import { combineReducers } from "redux";
import counter from "./counter_reducer";
import todos from "./todos_reducer";
// import 여기 이름을 바꿀수 있나? from "./todos_reducer";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
