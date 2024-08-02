import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const RankContainer = styled.div`
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

const Rank = () => {
  const [rank, setRank] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const response = await axios.get(`${apiUrl}/rank`);
        setRank(response.data);
      } catch (error) {
        console.error("Error: 랭킹을 불러올 수 없습니다.", error);
      }
    };

    fetchRank();
  }, [apiUrl]);

  return (
    <RankContainer>
      <RankingInfo>
        <h1>전체 순위</h1>
      </RankingInfo>
      <List>
        {rank.map((user) => (
          <ListItem key={user.id}>
            {user.rank}. {user.name} - Score: {user.score}
          </ListItem>
        ))}
      </List>
    </RankContainer>
  );
};

export default Rank;
