import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./coffeeSlice";

const CoffeeView = () => {
  const numOfCoffee = useAppSelector((state) => state.coffee.numOfCoffee);
  const dispatch = useAppDispatch();
  return (
    <>
      <h2>Number of coffee: {numOfCoffee}</h2>
      <button onClick={() => dispatch(ordered())}>Order coffee</button>
      <button onClick={() => dispatch(restocked(1))}>Restock coffee</button>
    </>
  );
};

export default CoffeeView;
