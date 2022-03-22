import React, { useState } from "react";
import youtubeData from "../data/youtubeData.json";
import Layout from "../components/shared/_Layout";

function Home() {
  const {
    id,
    channelId,
    date,
    title,
    thumbnail,
    description,
    channelTitle,
    category,
    viewCount,
    likeCount,
    channelUrl,
    channelThumbnail,
  } = youtubeData.data[0];

  const [toggle, setToggle] = useState(true);

  const onClickButton = () => {
    setToggle(!toggle);
  };

  return (
    <Layout activeMenu="home">
      <div>
        <button onClick={onClickButton}>{toggle ? "hide" : "show"}</button>
      </div>

      {toggle ? (
        <>
          <h3 style={{ background: "yellow", width: "200px" }}>Youtube Data</h3>
          <div>
            <b>Id</b>: {id}
          </div>
          <br />
          <div>
            <b>카테고리</b>: {category}
          </div>
          <div>
            <b>채널 고유 Id</b>: {channelId}
          </div>
          <div>
            <b>채널 URL</b>: {channelUrl}
          </div>
          <div>
            <b>채널 이름</b>: {channelTitle}
          </div>
          <div>
            <b>채널 썸네일</b>: {channelThumbnail}
          </div>
          <br />
          <div>
            <b>영상 제목</b>: {title}
          </div>
          <div>
            <b>영상 썸네일</b>: {thumbnail}
          </div>
          <div>
            <b>영상 설명</b>: {description.substring(0, 50)}...
          </div>
          <br />
          <div>
            <b>조회수</b>: {viewCount}
          </div>
          <div>
            <b>좋아요 수</b>: {likeCount}
          </div>
          <div>
            <b>업로드 시간</b>: {date}
          </div>
        </>
      ) : (
        <h1 style={{ background: "red", width: "200px" }}>No Post</h1>
      )}
    </Layout>
  );
}

export default Home;
