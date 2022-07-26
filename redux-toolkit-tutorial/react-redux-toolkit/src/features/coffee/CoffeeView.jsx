import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./coffeeSlice";

const CoffeeView = () => {
  const numOfCoffee = useSelector((state) => state.coffee.numOfCoffee);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number of coffee: {numOfCoffee}</h2>
      <button onClick={() => dispatch(ordered())}>Order coffee</button>
      <button onClick={() => dispatch(restocked(1))}>Restock coffee</button>
    </>
  );
};

export default CoffeeView;
