import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const TeamRankContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const RankingInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const TeamRank = ({ rank, total }) => {
  const [teamRank, setTeamRank] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchTeamRank = async () => {
      try {
        const response = await axios.get(`${apiUrl}/team-rank`);
        setTeamRank(response.data);
      } catch (error) {
        console.error("Error: 팀 랭킹을 불러올 수 없습니다.", error);
      }
    };

    fetchTeamRank();
  }, [apiUrl]);

  return (
    <TeamRankContainer>
      <RankingInfo>
        <h1>팀내 순위</h1>
        <div>나: 현재 {rank}위</div>
        <div>총 {total}명</div>
      </RankingInfo>
      <List>
        {teamRank.map((team) => (
          <ListItem key={team.id}>
            {team.rank}. {team.name} - Score: {team.score}
          </ListItem>
        ))}
      </List>
    </TeamRankContainer>
  );
};

export default TeamRank;
