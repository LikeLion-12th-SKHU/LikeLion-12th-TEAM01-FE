import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import information from "../../backend/Information.json";
import { Container, InfoDetail, Tab, Tabs } from "./InformationDetailStyles";

const InformationDetail = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("전체");
  const { id } = useParams();
  const item = information.find((info) => info.id === parseInt(id, 10));

  useEffect(() => {
    setData(information);
  }, []);

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
      <InfoDetail>
        <h3>{item.source}</h3>
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <p>{item.recommend}</p>
        <p>{item.save}</p>
        <p>{item.views}</p>
      </InfoDetail>
    </Container>
  );
};

export default InformationDetail;
