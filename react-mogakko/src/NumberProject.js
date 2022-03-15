import React, { useState } from "react";
import Gugudan from "./Gugudan";
import styles from "./styles/CountNumber.module.css";

const NumberProject = () => {
  const [number, setNumber] = useState(0);

  const onClickMinus = () => {
    setNumber(number - 1);
  };

  const onClickPlus = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h3>Number Project</h3>
      <button onClick={onClickMinus}>-</button>
      <span className={styles.countNumber}>{number}</span>
      <button onClick={onClickPlus}>+</button>
      <Gugudan number={number} />
    </div>
  );
};

export default NumberProject;
