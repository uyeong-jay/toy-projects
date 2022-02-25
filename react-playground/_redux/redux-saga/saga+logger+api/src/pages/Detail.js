import React from "react";
import DetailPost from "../components/Detail/DetailPost";

const Detail = ({ match }) => {
  const { id } = match.params; //주소에서 가져온 결과물은 항상 문자열

  return (
    <>
      <DetailPost postId={parseInt(id, 10)} />
    </>
  );
};

export default Detail;
