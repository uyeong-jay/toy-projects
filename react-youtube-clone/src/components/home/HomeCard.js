import React from "react";
import styles from "../../styles/pages/home/HomeCard.module.css";

const HomeCard = ({ data }) => {
  return (
    <>
      <a
        href={`https://www.youtube.com/watch?v=${data.id}`}
        className={styles.card}
      >
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={`${data.title}의 썸네일`}
        />
      </a>
      <div className={styles.info}>
        <a href={`https://www.youtube.com/channel/${data.channelId}`}>
          <img
            className={styles.channelImg}
            src={data.channelThumbnail}
            alt={`${data.channelTitle} 프로필 사진`}
          />
        </a>
        <div>
          <div className={styles.title}> {data.title}</div>
          <div className={styles.uploader}>{data.channelTitle}</div>
          <div className={styles.flex}>
            <div className={styles.view}>{data.viewCount}</div>
            <div className={styles.date}>{data.date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
