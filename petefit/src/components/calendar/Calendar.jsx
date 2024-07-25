import { StyledCalendarWrapper, StyledCalendar } from "./CalendarStyles";
import moment from "moment";
import Holidays from "date-holidays";
import { useState, useEffect } from "react";

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
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
      />
    </StyledCalendarWrapper>
  );
};

export default Calendar;
