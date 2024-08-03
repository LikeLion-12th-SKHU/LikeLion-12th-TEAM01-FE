import React, { useState } from "react";
import styled from "styled-components";
import Rank from "../../components/Rank";
import TeamRank from "../../components/TeamRank";

const CompeteContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? "#daffde" : "#f0f0f0")};
  border: 3px solid ${(props) => (props.active ? "#7ED188" : "#D4D4D4")};
  width: 300px;
  padding: 10px 20px;
  margin: 30px 50px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border: 3px solid #7ed188;
  }

  &:focus {
    outline: none;
  }
`;

const Compete = () => {
  const [currentView, setCurrentView] = useState("overall");

  const overallRank = 6; // 예시 데이터
  const totalParticipants = 259; // 예시 데이터
  const teamRank = 2; // 예시 데이터
  const totalTeams = 5; // 예시 데이터

  return (
    <CompeteContainer>
      <ButtonContainer>
        <Button
          active={currentView === "overall"}
          onClick={() => setCurrentView("overall")}
        >
          전체 순위
          <div>나: 현재 {overallRank}위</div>
          <div>총 {totalParticipants}명</div>
        </Button>
        <Button
          active={currentView === "team"}
          onClick={() => setCurrentView("team")}
        >
          팀내 랭킹
          <div>나: 현재 {teamRank}위</div>
          <div>총 {totalTeams}명</div>
        </Button>
      </ButtonContainer>
      {currentView === "overall" ? (
        <Rank />
      ) : (
        <TeamRank rank={teamRank} total={totalTeams} />
      )}
    </CompeteContainer>
  );
};

export default Compete;
