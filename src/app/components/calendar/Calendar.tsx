"use client"

import { FC } from 'react';
import { useCalendar } from '@/app/context/Calendar';
import Dayjs from 'dayjs';
import Days from './Days';
import Header from './Header';
import Weekdays from './Weekdays';
import YearSelector from './YearSelector';
import MonthSelector from './MonthSelector';
import styles from "./Calendar.module.scss";


const Calendar: FC = () => {
  const { currentDate, setCurrentDate, view, setView } = useCalendar();

  const handleTodayClick = () => {
    setCurrentDate(Dayjs());
    setView('month');
  };

  return (
    <div className={styles.calendar}>
      {view === 'month' && (
        <>
          <Header />
          <Weekdays />
          <Days />
        </>
      )}
      {view === 'year' && (
        <>
          <YearSelector/>
          <MonthSelector/>
        </>
      )}
      <div onClick={handleTodayClick} className={`${styles.btn} ${styles.todayButton}`}>
        Go to today
      </div>
    </div>
  );
};

export default Calendar;