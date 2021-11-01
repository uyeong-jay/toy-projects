import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDiff, increase, decrease } from "../../reducers/counter_reducer";

import Counter from "./Counter";

//Container Component
const CounterContainer = () => {
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff
  // }));

  //useSelector 성능 최적화를 위해 각각 따로 불러옴
  const { number } = useSelector((state) => state.counter);
  const { diff } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onSetDiff = (diff) => {
    dispatch(setDiff(diff));
  };
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    //state, dispatch
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
