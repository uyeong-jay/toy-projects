import React from "react";
import styles from "../../styles/shared/Menu.module.css";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti"; //유튜브 홈
import { FaRegCompass } from "react-icons/fa"; //유튜브 나침반
import { MdSubscriptions } from "react-icons/md"; //유튜브 구독

const Menu = ({ activeMenu, menuVisibility }) => {
  console.log("activeMenu:", activeMenu);

  return (
    <div className={styles.menu}>
      {menuVisibility ? (
        <>
          <Link
            to="/"
            className={activeMenu === "home" ? styles.focused : styles.link}
          >
            <TiHome className={styles.icon} />
            <div className={styles.text}>홈</div>
          </Link>
          <Link
            to="/explore"
            className={activeMenu === "explore" ? styles.focused : styles.link}
          >
            <FaRegCompass className={styles.icon} />
            <div className={styles.text}>탐색</div>
          </Link>
          <Link
            to="/subscription"
            className={
              activeMenu === "subscription" ? styles.focused : styles.link
            }
          >
            <MdSubscriptions className={styles.icon} />
            <div className={styles.text}>구독</div>
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menu;
