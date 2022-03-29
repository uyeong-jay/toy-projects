import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/home/HomeCard.module.css";
import { ProcessViewCount } from "../../utils/processViewCount";
import { ProcessUploadDate } from "../../utils/processUploadDate";

const HomeCard = ({ data }) => {
  return (
    <>
      <Link
        to={`https://www.youtube.com/watch?v=${data.id}`}
        className={styles.card}
      >
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={`${data.title}의 썸네일`}
        />
        <div className={styles.info}>
          <Link to={`https://www.youtube.com/channel/${data.channelId}`}>
            <img
              className={styles.channelImg}
              src={data.channelThumbnail}
              alt={`${data.channelTitle} 프로필 사진`}
            />
          </Link>
          <div>
            <div className={styles.title}> {data.title}</div>
            <div className={styles.uploader}>{data.channelTitle}</div>
            <div className={styles.flex}>
              <div className={styles.view}>
                {ProcessViewCount(data.viewCount)}
              </div>
              <div className={styles.date}>{ProcessUploadDate(data.date)}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeCard;
