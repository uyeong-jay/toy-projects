import React from "react";
import styles from "./styles/Detail.module.css";

const Detail = () => {
  return (
    <>
      <h2 className={styles.title}>Travel Places</h2>
      <ul>
        <li>1. Paris</li>
        <li>2. Madrid</li>
        <li>3. Roma</li>
      </ul>
    </>
  );
};

export default Detail;
