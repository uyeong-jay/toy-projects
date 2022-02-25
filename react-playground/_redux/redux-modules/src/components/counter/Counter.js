import React from "react";

//Presentatianal Component
const Counter = ({ number, diff, onSetDiff, onIncrease, onDecrease }) => {
  const onChange = (e) => {
    // console.log(typeof e.currentTarget.value);// string
    onSetDiff(parseInt(e.currentTarget.value, 10));
  };

  return (
    <>
      <h3>{number}</h3>
      <input type="number" value={diff} onChange={onChange} min="1" />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <p style={{ marginTop: 0 }}>(Enter the number to make the difference)</p>
    </>
  );
};

export default Counter;
