import React, { useState } from "react";
import CalendarLogin from "../../components/main/login/CalendarLogin";
import TodayRecord from "../../components/main/login/TodayRecord";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 860px;
`;

const IntroduceWrapper = styled.div`
  margin: 15px 0 20px 0;
`;
const IntroduceTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 7px;
`;
const Introduce = styled.p`
  font-size: 16px;
`;

const TodayRecordWrapper = styled.div``;

const CalendarWrapper = styled.div`
  margin-top: 10px;
`;

const CalendarLoginWrapper = styled.div`
  border: 3px solid #7ed188;
  border-radius: 10px;
  padding: 10px;
  width: 415px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CalendarLoginTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 11px;
`;

const RankTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 11px;
`;
const RankWrapper = styled.div`
  border: 3px solid #7ed188;
  border-radius: 10px;
  height: 330px;
`;

const MainPageLogin = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <TodayRecordWrapper>
        <IntroduceWrapper>
          <IntroduceTitle>핏핏</IntroduceTitle>
          <Introduce>
            핏핏은 Com‘Pete’ + ‘Fit’ 의 합성어로 즐거운 건강함을 추구합니다.
          </Introduce>
        </IntroduceWrapper>
        <TodayRecord selectedDate={selectedDate} />
      </TodayRecordWrapper>
      <CalendarWrapper>
        <CalendarLoginTitle>내 캘린더</CalendarLoginTitle>
        <CalendarLoginWrapper>
          <CalendarLogin onChangeDate={handleDateChange} />
        </CalendarLoginWrapper>
        <RankTitle>전체 순위</RankTitle>
        <RankWrapper></RankWrapper>
      </CalendarWrapper>
    </Wrapper>
  );
};

export default MainPageLogin;
