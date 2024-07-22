import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h1>전체 랭킹</h1>
      <ul>
        {rank.map((user) => (
          <li key={user.id}>
            {user.rank}. {user.name} - Score: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rank;
