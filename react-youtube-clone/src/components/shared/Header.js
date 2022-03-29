import React, { useState } from "react";
import styles from "../../styles/shared/Header.module.css";
import youtube_logo from "../../data/youtube_logo.png";
import { FiMenu } from "react-icons/fi"; //유튜브 햄버거 메뉴
import { IoSearchOutline } from "react-icons/io5"; //유튜브 검색 돋보기
import { BsGrid3X3Gap } from "react-icons/bs"; //유튜브  점9개 메뉴
import { HiOutlineDotsVertical } from "react-icons/hi"; //유튜브 점 3개 메뉴

const Header = ({ onClickFiMenu }) => {
  const [search, setSearch] = useState("");

  const onChangeInput = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onClickSearch = () => {
    console.log(search);
  };

  return (
    <div className={styles.header}>
      <div className={styles.tab}>
        <FiMenu className={styles.icon} onClick={() => onClickFiMenu()} />
        <img src={youtube_logo} alt="유튜브 로고" className={styles.logo} />
      </div>
      <div className={styles["center-tab"]}>
        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={onChangeInput}
        />
        <IoSearchOutline
          className={styles["search-icon"]}
          onClick={onClickSearch}
        />
      </div>
      <div className={styles.tab}>
        <BsGrid3X3Gap className={styles.icon} />
        <HiOutlineDotsVertical className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
