import Calendar from "react-calendar";
import styled from "styled-components";
import "../../index.css";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  width: 360px;
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
    background-color: white;
  }

  /* 다른 달의 날짜 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: white !important;
    background-color: white;
  }

  /* 토,일 날짜 */
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  /* 네비게이션 */
  .react-calendar__navigation {
    justify-content: center;
    margin: 5px;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-size: 15px;
    background-color: white;
  }

  /* 비활성화된 버튼 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: black;
  }

  .react-calendar__navigation button:focus,
  .react-calendar__navigation button:active,
  .react-calendar__navigation button:hover {
    background-color: white;
  }

  /* 년/월 상단 네비게이션 칸 크기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
    pointer-events: none;
  }

  /* 요일 부분 */
  .react-calendar__month-view__weekdays {
    font-size: 10px;
    background-color: #b7eabd;
    border: 1px solid #7ed188;
    border-radius: 7px 7px 0 0;
    padding-top: 20px;
    abbr {
      text-decoration: none;
      font-weight: 400;
      cursor: default;
    }
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(1) abbr {
    color: #fe0000; /* 일요일 */
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
    color: #0047ff; /* 토요일 */
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    color: black;
  }

  /* 일 날짜 */
  .react-calendar__tile {
    font-size: 10px;
    padding: 1px 3px 30px 30px;
    border: 1px solid #7ed188;
    position: relative;
  }

  /* 선택한 날짜 스타일 */
  .react-calendar__tile:enabled:focus {
    background-color: #7ed188;
    color: black;
  }

  .react-calendar__tile:enabled:hover {
  }

  .react-calendar__tile--active {
    background-color: white;
    color: black;
  }

  /* 공휴일 */
  .react-calendar__tile--holiday {
    color: #fe0000;
    font-weight: bold;
  }

  .react-calendar__tile--holiday:enabled,
  .react-calendar__tile--holiday:enabled:focus {
    color: #fe0000;
  }

  /* 오늘 날짜 스타일 */
  .react-calendar__tile--now {
    abbr {
      border: 1.5px solid #7ed188;
      border-radius: 50%;
      padding: 2px;
      margin: 1px;
    }
  }

  .react-calendar__tile--now:hover {
    background-color: #d2d2d2;
  }

  .react-calendar__tile--now:enabled {
    background-color: white;
  }
`;

export const StyledDot = styled.div`
  background-color: #ff0000;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  position: absolute;
  bottom: 3px;
  right: 2px;
`;

export const StyledCalendar = styled(Calendar)``;

export const AddPeriodButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  margin: 7px 0 7px 285px;
  padding: 3px 7px 4px 7px;
  background-color: #8fdd98;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6dcd79;
  }
`;
