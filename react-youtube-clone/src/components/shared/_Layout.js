import React from "react";
import styles from "../../styles/shared/_Layout.module.css";
import Header from "./Header";
import Menu from "./Menu";

const _Layout = ({ children, activeMenu }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default _Layout;
