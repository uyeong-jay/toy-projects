import React from "react";
import "./Input.css";

const Input = ({ type = "text", size = "medium", ...rest }) => {
  return (
    <>
      <input type={`${type}`} className={`input ${size}`} {...rest} />
    </>
  );
};

export default Input;
