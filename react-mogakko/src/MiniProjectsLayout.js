import React from "react";
import styles from "./styles/MiniProjectsWrapper.module.css";

const MiniProjectsLayout = ({ children }) => {
  return <div className={styles.MiniProjectsWrapper}>{children}</div>;
};

export default MiniProjectsLayout;
