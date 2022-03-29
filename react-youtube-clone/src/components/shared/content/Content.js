import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/shared/content/Content.module.css";
import { ProcessViewCount } from "../../../utils/processViewCount";
import { ProcessUploadDate } from "../../../utils/processUploadDate";

const Content = ({ data }) => {
  const {
    id,
    channelId,
    date,
    title,
    thumbnail,
    description,
    channelTitle,
    viewCount,
  } = data;

  return (
    <>
      <div className={styles.card}>
        <Link
          to={`https://www.youtube.com/watch?v=${id}`}
          className={styles.link}
        >
          <img
            className={styles.thumbnail}
            src={thumbnail}
            alt={`${title}의 썸네일`}
          />
        </Link>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.meta}>
            <Link
              to={`https://www.youtube.com/channel/${channelId}`}
              className={`${styles.uploader} ${styles.link}`}
            >
              {channelTitle}
            </Link>
            <div className={styles.view}>{ProcessViewCount(viewCount)}</div>
            <div className={styles.time}>{ProcessUploadDate(date)}</div>
          </div>
          <div className={styles.desc}>{description}</div>
        </div>
      </div>
    </>
  );
};

export default Content;
