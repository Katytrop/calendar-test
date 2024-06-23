"use client"

import { FC } from 'react';
import dayjs from 'dayjs';
import { useCalendar } from '@/app/context/Calendar';
import styles from "./Calendar.module.scss";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const MonthSelector: FC = () => {
  const { setView, setCurrentDate } = useCalendar();

  const handleMonthClick = (index: number) => {
    setCurrentDate(dayjs().month(index));
    setView('month');
  };

  return (
    <div className={styles.monthSelector}>
      {months.map((month, index) => (
        <div key={index} className={styles.month} onClick={() => handleMonthClick(index)}>
          {month}
        </div>
      ))}
    </div>
  );
};

export default MonthSelector;