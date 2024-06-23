"use client"

import { FC } from 'react';
import { useCalendar } from '@/app/context/Calendar';
import Days from './Days';
import Header from './Header';
import Weekdays from './Weekdays';
import YearSelector from './YearSelector';
import MonthSelector from './MonthSelector';
import styles from "./Calendar.module.scss";


const Calendar: FC = () => {
  const { view } = useCalendar();

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
    </div>
  );
};

export default Calendar;