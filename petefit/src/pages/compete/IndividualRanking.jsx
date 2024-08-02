import React from "react";
import styled from "styled-components";

const RankingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Rank = styled.div`
  width: 10%;
  text-align: center;
`;

const Name = styled.div`
  width: 50%;
`;

const Percentage = styled.div`
  width: 10%;
  text-align: right;
`;

const ProgressBar = styled.div`
  width: 30%;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Progress = styled.div`
  height: 10px;
  background-color: #76c7c0;
  border-radius: 5px;
  width: ${({ percentage }) => percentage}%;
`;

const IndividualRanking = ({ rank, name, percentage }) => {
  return (
    <RankingContainer>
      <Rank>{rank}</Rank>
      <Name>{name}</Name>
      <Percentage>{percentage}%</Percentage>
      <ProgressBar>
        <Progress percentage={percentage}></Progress>
      </ProgressBar>
    </RankingContainer>
  );
};

export default IndividualRanking;
