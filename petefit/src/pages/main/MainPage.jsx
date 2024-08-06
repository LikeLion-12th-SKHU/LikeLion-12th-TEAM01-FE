import React, { useState } from "react";
import Calendar from "../../components/main/logout/Calendar";
import CalendarLogin from "../../components/main/login/CalendarLogin";
import TodayRecord from "../../components/main/login/TodayRecord";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 980px;
`;

const IntroduceWrapper = styled.div`
  margin-bottom: 5px;
  margin-top: -10px;
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
  box-shadow: 3px 3px 3px #c6c6c6;
  text-align: center;
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 69px;
  margin-top: 260px;
  cursor: pointer;
`;

const Record = styled.div`
  border: 3px solid #7ed188;
  width: 840px;
  height: 770px;
  border-radius: 10px;
  background-color: #e4e4e4;
  padding: 20px;
  margin-top: 30px;
`;

const RecordTitle = styled.h3`
  font-size: 27px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 15px;
`;

const TodayRecordWrapper = styled.div``;

const CalendarWrapper = styled.div`
  margin-top: 10px;
`;

const CalendarLoginWrapper = styled.div`
  border: 3px solid #7ed188;
  border-radius: 10px;
  padding: 10px;
  width: 410px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CalendarLogoutWrapper = styled.div`
  border: 3px solid #7ed188;
  border-radius: 10px;
  padding: 10px;
  width: 410px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CalendarLoginTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const RankTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const RankWrapper = styled.div`
  border: 3px solid #7ed188;
  border-radius: 10px;
  height: 360px;
`;

const MainPage = () => {
  /*const [loggedIn, setLoggedIn] = useState(false);*/
  const { isLoggedIn } = useAuth();

  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );
  const [recordDates, setRecordDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRecordDateChange = (date) => {
    setRecordDates((prevDates) => {
      if (date && !prevDates.includes(date)) {
        return [...prevDates, date];
      }
      return prevDates;
    });
  };

  return (
    <Wrapper>
      <TodayRecordWrapper>
        <IntroduceWrapper>
          <IntroduceTitle>핏핏</IntroduceTitle>
          <Introduce>
            핏핏은 Com‘Pete’ + ‘Fit’ 의 합성어로 즐거운 건강함을 추구합니다.
          </Introduce>
          <Record>
            {isLoggedIn ? (
              <TodayRecord
                selectedDate={selectedDate}
                onRecordDateChange={handleRecordDateChange}
              />
            ) : (
              <div>
                <RecordTitle>오늘의 기록</RecordTitle>
                <TitleButton>로그인 후 이용가능합니다.</TitleButton>
              </div>
            )}
          </Record>
        </IntroduceWrapper>
      </TodayRecordWrapper>
      <CalendarWrapper>
        <CalendarLoginTitle>내 캘린더</CalendarLoginTitle>
        {isLoggedIn ? (
          <CalendarLoginWrapper>
            <CalendarLogin
              onChangeDate={handleDateChange}
              recordDates={recordDates}
            />
          </CalendarLoginWrapper>
        ) : (
          <CalendarLogoutWrapper>
            <Calendar />
          </CalendarLogoutWrapper>
        )}
        <RankTitle>전체 순위</RankTitle>
        <RankWrapper></RankWrapper>
      </CalendarWrapper>
    </Wrapper>
  );
};

export default MainPage;
