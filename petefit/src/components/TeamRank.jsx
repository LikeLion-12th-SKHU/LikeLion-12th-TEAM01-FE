import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const TeamRankContainer = styled.div`
  width: 80%;
  height: 60vh;
  margin: 0 auto;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  border: 2px solid #7ed188;
  border-radius: 10px;
  padding: 0 10px;
`;

const ListItem = styled.li`
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;

  .user-team {
    display: flex;
    font-size: 18px;
  }
`;

const Name = styled.div`
  width: 100%;
`;

const ProgressBar = styled.div`
  width: 40%;
  overflow: hidden;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 15px;
`;

const Progress = styled.div`
  height: 20px;
  background-color: #7ed188;
  border-radius: 10px 0 0 10px;
  width: ${({ percentage }) => percentage}%;
`;

const Score = styled.div`
  width: 10%;
  text-align: right;
`;

const RankingInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const TeamNameTitle = styled.h2`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: medium;
`;

const TeamRank = ({ rank, total }) => {
  const [teamRank, setTeamRank] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  // 더미데이터
  const dummyData = [
    { id: 1, rank: 1, name: "쉐쉐쉐이크", score: 91 },
    { id: 2, rank: 2, name: "인생은 즐거워", score: 77 },
    { id: 3, rank: 3, name: "엽떡에 분모자 추가", score: 69 },
    { id: 4, rank: 4, name: "고독한 다이어터", score: 58 },
    { id: 5, rank: 5, name: "라라랄라", score: 52 },
  ];

  useEffect(() => {
    const fetchTeamRank = async () => {
      try {
        const response = await axios.get(`${apiUrl}/team-rank`);
        setTeamRank(response.data);
      } catch (error) {
        console.error("Error: 팀 랭킹을 불러올 수 없습니다.", error);
        setTeamRank(dummyData); // Use dummy data if there's an error
      }
    };

    fetchTeamRank();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl]);

  return (
    <TeamRankContainer>
      <RankingInfo>
        <h1>팀내 순위</h1>
        <TeamNameTitle>마라 중독자들</TeamNameTitle>
      </RankingInfo>
      <List>
        {teamRank.map((team) => (
          <ListItem key={team.id}>
            <div className="user-team">
              {team.rank}. <Name>{team.name}</Name>
            </div>
            <ProgressBar>
              <Progress percentage={team.score}></Progress>
            </ProgressBar>
            <Score>{team.score}%</Score>
          </ListItem>
        ))}
      </List>
    </TeamRankContainer>
  );
};

export default TeamRank;
