import React, { useState } from "react";
import styles from "./styles/Number.module.css";

const Number = () => {
  const [number, setNumber] = useState(0);

  const onClickMinus = () => {
    setNumber(number - 1);
  };

  const onClickPlus = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <h3>Count Number</h3>
      <button onClick={onClickMinus}>-</button>
      <span className={styles.number}>{number}</span>
      <button onClick={onClickPlus}>+</button>
    </>
  );
};

export default Number;
