import React from "react";
import "./Button.css"; //적용할 css 불러오기

const Button = ({ variant = "primary", children, ...rest }) => {
  return (
    <>
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
