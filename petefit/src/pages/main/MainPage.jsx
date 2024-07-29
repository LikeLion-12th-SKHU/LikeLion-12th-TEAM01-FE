import React from "react";
import Calendar from "../../components/calendar/Calendar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 860px;
`;

const IntroduceWrapper = styled.div`
  margin: 20px 0 15px 0;
`;
const IntroduceTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 7px;
`;
const Introduce = styled.p`
  font-size: 16px;
`;

const TitleButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  background-color: #7ed188;
  border: none;
  border-radius: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 69px;
  margin-top: 300px;
  cursor: pointer;
`;

const Record = styled.div`
  border: 3px solid #7ed188;
  width: 850px;
  height: 700px;
  border-radius: 10px;
  background-color: #dedede;
  padding: 20px;
  margin-top: 25px;
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

const MainPage = () => {
  return (
    <Wrapper>
      <TodayRecordWrapper>
        <IntroduceWrapper>
          <IntroduceTitle>핏핏</IntroduceTitle>
          <Introduce>
            핏핏은 Com‘Pete’ + ‘Fit’ 의 합성어로 즐거운 건강함을 추구합니다.
          </Introduce>
          <Record>
            <TitleButton>로그인 후 이용가능합니다.</TitleButton>
          </Record>
        </IntroduceWrapper>
      </TodayRecordWrapper>
      <CalendarWrapper>
        <CalendarLoginTitle>내 캘린더</CalendarLoginTitle>
        <CalendarLoginWrapper>
          <Calendar />
        </CalendarLoginWrapper>
        <RankTitle>전체 순위</RankTitle>
        <RankWrapper></RankWrapper>
      </CalendarWrapper>
    </Wrapper>
  );
};

export default MainPage;
