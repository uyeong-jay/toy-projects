import React from "react";
import styles from "../../styles/pages/home/HomeFilter.module.css";

const HomeFilter = ({ category, categoryText, onClickCategory }) => {
  return (
    <button
      name="category"
      value={category}
      className={category === categoryText ? styles.black : styles.gray}
      onClick={onClickCategory}
    >
      {category}
    </button>
  );
};

export default HomeFilter;
