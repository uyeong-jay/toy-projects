import React from "react";
import styles from "../../styles/shared/ContentLayout.module.css";

const ContentLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default ContentLayout;
