import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import information from "../../backend/Information.json";
import {
  Container,
  InfoDetail,
  Tab,
  Tabs,
  TabContainer,
  Source,
  Title,
  From,
  Content,
  Recommend,
  Save,
  Views,
  CountWrapper,
  DoubleWrapper,
} from "./InformationDetailStyles";

const InformationDetail = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [item, setItem] = useState(null);
  const [hasRecommended, setHasRecommended] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setData(information);
  }, []);

  useEffect(() => {
    const foundItem = information.find((info) => info.id === parseInt(id, 10));
    if (foundItem) {
      setItem({
        ...foundItem,
        recommend: parseInt(foundItem.recommend) || 0,
        views: parseInt(foundItem.views) || 0,
      });
    }
  }, [id]);

  const handleRecommend = () => {
    if (item) {
      setItem((prevItem) => ({
        ...prevItem,
        recommend: hasRecommended
          ? prevItem.recommend - 1
          : prevItem.recommend + 1,
      }));
      setHasRecommended(!hasRecommended);
    }
  };

  const handleView = () => {
    if (item) {
      setItem((prevItem) => ({
        ...prevItem,
        views: prevItem.views + 1,
      }));
    }
  };

  useEffect(() => {
    // 페이지가 처음 로드될 때 조회수 증가
    handleView();
  }, [id]);

  // 카테고리 탭
  useEffect(() => {
    if (item) {
      setActiveCategory(item.category);
    }
  }, [item]);

  const categories = ["전체", ...new Set(data.map((item) => item.category))];

  if (!item) {
    return <Container>정보를 찾을 수 없습니다.</Container>;
  }

  return (
    <Container>
      <TabContainer>
        <Tabs>
          {categories.map((category) => (
            <Tab
              key={category}
              active={activeCategory === category}
              onClick={() => {
                if (category === activeCategory) {
                  setActiveCategory(category);
                }
              }}
            >
              {category}
            </Tab>
          ))}
        </Tabs>
      </TabContainer>
      <InfoDetail>
        <Source>{item.source}</Source>
        <Title>{item.title}</Title>
        <DoubleWrapper>
          <From>기관홈: </From>
          <button onClick={handleRecommend}>
            {hasRecommended ? "추천 취소" : "추천"} {item.recommend}
          </button>
        </DoubleWrapper>
        <hr></hr>
        <Content>
          <h3>{item.content}</h3>
        </Content>
        <hr></hr>
        <CountWrapper>
          <Recommend>
            <div>
              <div>
                <img src="../../../img/recommend.png" alt="recommend"></img>
              </div>
              <div className="recommend">추천수: {item.recommend}</div>
            </div>
          </Recommend>
          <Save>
            <div>
              <div>
                <img src="../../../img/save.png" alt="save"></img>
              </div>
              <div className="saveCount">저장수: {item.save}</div>
            </div>
          </Save>
          <Views>
            <div>
              <div>
                <img src="../../../img/views.png" alt="views"></img>
              </div>
              <div className="viewsCount">조회수: {item.views}</div>
            </div>
          </Views>
        </CountWrapper>
      </InfoDetail>
    </Container>
  );
};

export default InformationDetail;
