import {
  StyledCalendarWrapper,
  StyledCalendar,
  StyledDot,
  AddPeriodButton,
  RecordSign,
} from "./CalendarLoginStyles";
import moment from "moment";
import Holidays from "date-holidays";
import React, { useState, useEffect } from "react";

const CalendarLogin = ({ onChangeDate, recordDates = [] }) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
  const [periodDays, setPeriodDays] = useState(() => {
    const savedPeriodDays = localStorage.getItem("periodDays");
    return savedPeriodDays ? JSON.parse(savedPeriodDays) : [];
  });
  const hd = new Holidays("KR");

  useEffect(() => {
    const year = new Date().getFullYear();
    const holidaysThisYear = hd
      .getHolidays(year)
      .map((holiday) => moment(holiday.date).format("YYYY-MM-DD"));
    setHolidays(holidaysThisYear);
  }, []);

  const handleDateChange = (newDate) => {
    if (
      newDate.getMonth() === activeStartDate.getMonth() &&
      newDate.getFullYear() === activeStartDate.getFullYear()
    ) {
      setDate(newDate);
      onChangeDate(moment(newDate).format("YYYY-MM-DD"));
    }
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      return (
        date.getMonth() !== activeStartDate.getMonth() ||
        date.getFullYear() !== activeStartDate.getFullYear()
      );
    }
    return false;
  };

  const handleAddPeriodDay = () => {
    const newDay = moment(date).format("YYYY-MM-DD");
    setPeriodDays((prevDays) => {
      let updatedDays;
      if (prevDays.includes(newDay)) {
        updatedDays = prevDays.filter((day) => day !== newDay);
      } else {
        updatedDays = [...prevDays, newDay];
      }
      localStorage.setItem("periodDays", JSON.stringify(updatedDays));
      return updatedDays;
    });
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        formatShortWeekday={(locale, date) => moment(date).format("ddd")}
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        maxDetail="month"
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        tileClassName={({ date, view }) => {
          const formattedDate = moment(date).format("YYYY-MM-DD");
          if (holidays.includes(formattedDate)) {
            return "react-calendar__tile--holiday";
          }
        }}
        tileDisabled={tileDisabled}
        tileContent={({ date, view }) => {
          const formattedDate = moment(date).format("YYYY-MM-DD");
          return (
            <>
              {view === "month" && recordDates.includes(formattedDate) && (
                <RecordSign
                  src="../../../img/recordsign.png"
                  alt="기록입력"
                ></RecordSign>
              )}
              {view === "month" && periodDays.includes(formattedDate) && (
                <StyledDot key={formattedDate} />
              )}
            </>
          );
        }}
      />
      <AddPeriodButton onClick={handleAddPeriodDay}>
        생리일 편집
      </AddPeriodButton>
    </StyledCalendarWrapper>
  );
};

export default CalendarLogin;
