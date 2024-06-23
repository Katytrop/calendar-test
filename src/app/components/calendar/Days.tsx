"use client"

import { FC } from 'react';
import dayjs from 'dayjs';
import { useCalendar } from '@/app/context/Calendar';
import styles from "./Calendar.module.scss";


const Days: FC = () => {
  const { currentDate, setCurrentDate } = useCalendar();

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  const days: dayjs.Dayjs[] = [];
  let day = startDate;

  while (day.isBefore(endDate, 'day')) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const handleDayClick = (day: dayjs.Dayjs) => {
    setCurrentDate(day);
  };

  return (
    <div className={styles.days}>
      {days.map((dayItem, index) => {
        let dayClass = styles.day;

        if (dayItem.isSame(currentDate, 'day')) {
          dayClass += ` ${styles.selected}`;
        }
        if (dayItem.isSame(dayjs(), 'day')) {
          dayClass += ` ${styles.today}`;
        }

        return (
          <div
            key={index}
            className={dayClass}
            onClick={() => handleDayClick(dayItem)}
          >
            {dayItem.date()}
          </div>
        );
      })}
    </div>
  );
};

export default Days;