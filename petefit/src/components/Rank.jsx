import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RankContainer = styled.div`
  width: 80%;
  height: 60vh;
  margin: 0 auto;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
  font-weight: 600;
`;

const RankingInfo = styled.div`
  margin-bottom: 15px;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }
`;

const ProgressBar = styled.div`
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
  font-size: 16px;
`;

const Progress = styled.div`
  background-color: #7ed188;
  height: 20px;
  width: ${({ score }) => score}%;
  text-align: right;
  padding-right: 5px;
  color: white;
  border-radius: 10px 0 0 10px;
`;

const Rank = () => {
  const [rank, setRank] = useState([]);
  // const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // api 호출 주석
    // const fetchRank = async () => {
    //   try {
    //     const response = await axios.get(`${apiUrl}/rank`);
    //     setRank(response.data);
    //   } catch (error) {
    //     console.error("Error: 랭킹을 불러올 수 없습니다.", error);
    //   }
    // };

    // fetchRank();

    // 더미 데이터
    const dummyData = [
      { id: 1, rank: 1, name: "내일만 살기", score: 96 },
      { id: 2, rank: 2, name: "쉐쉐세쉐이크", score: 91 },
      { id: 3, rank: 3, name: "치킨 먹고시퍼", score: 89 },
      { id: 4, rank: 4, name: "천국의 계단으로 천국가기", score: 85 },
      { id: 5, rank: 5, name: "계란으로 바위치기", score: 80 },
      { id: 6, rank: 6, name: "인생은 즐거워", score: 77 },
    ];
    setRank(dummyData);
  }, []);

  return (
    <RankContainer>
      <RankingInfo>
        <h1 className="name">전체 순위</h1>
      </RankingInfo>
      <List>
        {rank.map((user) => (
          <ListItem key={user.id}>
            {user.rank}. {user.name} - Score: {user.score}
            <ProgressBar>
              <Progress score={user.score}>{user.score}%</Progress>
            </ProgressBar>
          </ListItem>
        ))}
      </List>
    </RankContainer>
  );
};

export default Rank;
