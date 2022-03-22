import React, { useState } from "react";
import styles from "../../styles/shared/_Layout.module.css";
import Header from "./Header";
import Menu from "./Menu";

const _Layout = ({ children, activeMenu }) => {
  const [menuVisibility, setMenuVisibility] = useState(true);

  const onClickFiMenu = () => {
    setMenuVisibility(!menuVisibility);
  };

  return (
    <div className={styles.container}>
      <Header onClickFiMenu={onClickFiMenu} />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} menuVisibility={menuVisibility} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default _Layout;
