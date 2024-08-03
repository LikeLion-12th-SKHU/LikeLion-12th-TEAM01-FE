import React, { useEffect, useState } from "react";
import information from "../backend/Information.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoItem = styled.div`
  display: grid;
  align-items: center;
  background: #ffffff;
  width: 1320px;
  height: 150px;
  text-align: left;
  cursor: pointer;

  .info-source {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .info-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .commend {
    margin-top: -4px;
    margin-right: 3px;
  }

  .save {
    margin-top: -1px;
    margin-right: 3px;
  }

  .views {
    margin-top: -2px;
    margin-right: 3px;
  }

  div {
    float: left;
    font-size: 18px;
    margin-right: 20px;
  }
`;

const ElementWrapper = styled.div`
  margin-top: 5px;
  margin-left: 60px;
`;

const CountWrapper = styled.div`
  justify-content: space-between;
  margin-top: 7px;
`;

const InformationList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(information);
  }, []);

  return (
    <InfoList>
      {data.map((item, index) => (
        <Link
          key={item.id}
          to={`/informations/${item.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <InfoItem key={index}>
            <ElementWrapper>
              <h3 className="info-source">{item.source}</h3>
              <h2 className="info-title">{item.title}</h2>
              <CountWrapper>
                <div>
                  <div className="commend">
                    <img src="../../../img/recommend.png" alt="recommend"></img>
                  </div>
                  추천 수: {item.recommend}
                </div>
                <div>
                  <div className="save">
                    <img src="../../../img/save.png" alt="save"></img>
                  </div>
                  저장 수: {item.save}
                </div>
                <div>
                  <div className="views">
                    <img src="../../../img/views.png" alt="views"></img>
                  </div>
                  조회 수: {item.views}
                </div>
              </CountWrapper>
            </ElementWrapper>
          </InfoItem>
        </Link>
      ))}
    </InfoList>
  );
};

export default InformationList;
