import React from "react";
import { Link } from "react-router-dom";
import Content from "../shared/content/Content";
import styles from "../../styles/subscription/SubscriptionCard.module.css";

const SubscriptionCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <Link
        className={styles.uploader}
        to={`https://www.youtube.com/channel/${data.channelId}`}
      >
        <img
          className={styles["channel-image"]}
          src={data.channelThumbnail}
          alt={`${data.channelTitle} 프로필 사진`}
        />
        <div className={styles.name}>{data.channelTitle}</div>
      </Link>
      <div className={styles.body}>
        <Content data={data} />
      </div>
    </div>
  );
};

export default SubscriptionCard;
