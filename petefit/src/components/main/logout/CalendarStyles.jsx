import Calendar from "react-calendar";
import styled from "styled-components";
import "../../../index.css";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  width: 380px;
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
    height: 50px;
    justify-content: center;
    margin-bottom: 8px;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-size: 18px;
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
    font-size: 11px;
    background-color: #b7eabd;
    border: 1px solid #7ed188;
    border-radius: 7px 7px 0 0;
    padding-top: 18px;
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
    font-size: 11px;
    padding: 1px 1px 32px 30px;
    border: 1px solid #7ed188;
  }

  /* 선택한 날짜 스타일 */
  .react-calendar__tile:enabled:focus {
    background-color: white;
    color: black;
  }

  .react-calendar__tile:enabled:hover {
    background-color: white;
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
    background: none;
    abbr {
      border: 1.5px solid #7ed188;
      border-radius: 50%;
      padding: 1px 4px;
      margin: 1px;
    }
  }

  .react-calendar__tile--now:hover {
    background-color: white;
  }
`;

export const StyledCalendar = styled(Calendar)``;
