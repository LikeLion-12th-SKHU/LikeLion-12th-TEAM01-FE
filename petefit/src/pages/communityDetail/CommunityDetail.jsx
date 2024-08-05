import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../backend/Community.json";

const CommunityDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [recommendCount, setRecommendCount] = useState(0);
  const [hasRecommended, setHasRecommended] = useState(false);

  useEffect(() => {
    const post = data.find((item) => item.id === id);
    if (post) {
      setPost(post);
      setRecommendCount(post.recommend);
      /*incrementViews(id);*/
    }
  }, [id]);

  /*const incrementViews = async (postId) => {
    try {
      const response = await fetch(`/board/views`, {
        method: "POST",
      });
      if (!response.ok) {
        console.error("업데이트 오류");
      }
    } catch (error) {
      console.error("조회수 오류:", error);
    }
  };*/

  const handleRecommend = async () => {
    try {
      const method = hasRecommended ? "DELETE" : "POST";
      const response = await fetch(`/board/recommend`, {
        method,
      });
      if (response.ok) {
        const updatedPost = await response.json();
        setRecommendCount(updatedPost.recommend);
        setHasRecommended(!hasRecommended);
      } else {
        console.error("업데이트 오류");
      }
    } catch (error) {
      console.error("추천 오류:", error);
    }
  };

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>카테고리: {post.category || "미정"}</p>
      <p>
        작성자:{" "}
        {post.category === "건의사항" ? "비공개" : post.writer || "미정"}
      </p>
      <p>
        작성일: {post.category === "건의사항" ? "비공개" : post.date || "미정"}
      </p>
      <p>
        조회수: {post.category === "건의사항" ? "비공개" : post.views || "0"}
      </p>
      <p>
        추천수:{" "}
        {post.category === "건의사항" ? "비공개" : recommendCount || "0"}
      </p>
      <p>{post.content || "내용 없음"}</p>
      {post.category !== "건의사항" && (
        <button onClick={handleRecommend}>
          {hasRecommended ? "추천 취소" : "추천"}
        </button>
      )}
    </div>
  );
};

export default CommunityDetail;
