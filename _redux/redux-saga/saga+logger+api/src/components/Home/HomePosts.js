import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../_sagas/posts_saga";
import HomePost from "./HomePost";

const HomePosts = () => {
  const { loading, data: posts, error } = useSelector(
    (state) => state.postsReducer.posts
  ); //state.리듀서.상태
  const dispatch = useDispatch();

  //최초렌더링 + 해당컴포넌트가 화면에 다시 나올때 마다 렌더링
  useEffect(() => {
    // if (posts) return;
    //다시 돌아올때도 리로딩 되는 이슈 수정
    //단점: 다시 돌아올때 데이터가 최신데이터가 아닌 이미 받아온 데이터로 계속 유지됨

    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !posts) return <div>Loading...</div>;
  //로딩상태+데이터없을때(최초렌더링)만 로딩창 보여주기
  //다시 돌아올때 리로딩 되는 이슈 수정

  if (error) return <div>ERROR</div>;
  if (!posts) return null;
  return (
    <>
      <h3>Title List</h3>
      <ul>
        {posts.map((post) => (
          <HomePost key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default HomePosts;
