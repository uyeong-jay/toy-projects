import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseAsync, decreaseAsync } from "../_reducers/counter_reducer";

const Counter = () => {
  const number = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
