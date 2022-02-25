import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, goBack } from "../../_sagas/posts_saga";

const DetailPost = ({ postId }) => {
  const { loading, data: post, error } = useSelector(
    (state) => state.postsReducer.post[postId]
  ) || {
    //초기 상태 데이터가 없을때 대비
    loading: false,
    data: null,
    error: null
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  if (loading && !post) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!post) return null;

  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => dispatch(goBack())}>Back</button>
    </>
  );
};

export default DetailPost;
