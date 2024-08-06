import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../backend/Community.json";
import {
  Container,
  InfoDetail,
  Category,
  Title,
  HeaderWrapper,
  Writer,
  Date,
  CountWrapper,
  Views,
  Recommend,
  Content,
  Button,
} from "./CommunityDetailStyles";

const CommunityDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  /*const [recommendCount, setRecommendCount] = useState(0);*/
  const [hasRecommended, setHasRecommended] = useState(false);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    const foundPost = data.find((item) => item.id === id);
    if (foundPost) {
      setPost({
        ...foundPost,
        recommend: parseInt(foundPost.recommend) || 0,
        views: parseInt(foundPost.views) || 0,
      });

      if (!viewed) {
        // 페이지를 처음 방문했을 때 조회수 증가
        setPost((prevPost) => ({
          ...prevPost,
          views: prevPost.views + 1,
        }));
        setViewed(true); // 조회한 상태로 설정
      }
    }
  }, [id, viewed]);

  const handleRecommend = () => {
    if (post) {
      setPost((prevPost) => ({
        ...prevPost,
        recommend: hasRecommended
          ? prevPost.recommend - 1
          : prevPost.recommend + 1,
      }));
      setHasRecommended(!hasRecommended);
    }
  };

  // api 조회수 증가
  /*useEffect(() => {
    const post = data.find((item) => item.id === id);
    if (post) {
      setPost(post);
      setRecommendCount(post.recommend);
    }
  }, [id]);*/ // json 데이터 가져오기

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

  // api 추천수 증가
  /*const handleRecommend = async () => {
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
  };*/

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <Container>
      <InfoDetail>
        <Category>{post.category || "미정"}</Category>
        <Title>{post.title}</Title>
        <HeaderWrapper>
          <Writer>
            작성자:{" "}
            {post.category === "건의사항" ? "비공개" : post.writer || "미정"}
          </Writer>
          <Date>
            {post.category === "건의사항" ? "비공개" : post.date || "미정"}
          </Date>
        </HeaderWrapper>
        <hr></hr>
        <Content>{post.content || "내용 없음"}</Content>
        <div>
          <Button onClick={handleRecommend}>
            {hasRecommended ? "추천 취소" : "추천"} {post.recommend}
          </Button>
        </div>
        <hr></hr>
        <CountWrapper>
          <Views>
            <div>
              <img src="../../../img/views.png" alt="views"></img>
            </div>
            <div className="viewsCount">
              <h5>
                조회수:{" "}
                {post.category === "건의사항" ? "비공개" : post.views || "0"}
              </h5>
            </div>
          </Views>
          <Recommend>
            <div>
              <img src="../../../img/recommend.png" alt="recommend"></img>
            </div>
            <div className="recommendCount">
              추천수:{" "}
              {post.category === "건의사항" ? "비공개" : post.recommend || "0"}
            </div>
          </Recommend>
        </CountWrapper>
        {/*{post.category !== "건의사항" && (
        <button onClick={handleRecommend}>
          {hasRecommended ? "추천 취소" : "추천"}
        </button>
      )}*/}
      </InfoDetail>
    </Container>
  );
};

export default CommunityDetail;
