"use client"

import { FC } from 'react';
import dayjs from 'dayjs';
import { useCalendar } from '@/app/context/Calendar';
import styles from "./Calendar.module.scss";

const Days: FC = () => {
  const { currentDate, setCurrentDate, setSelectedDate, selectedDate } = useCalendar();

  const generateDays = () => {
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const days = [];

    // Добавление дней предыдущего месяца, чтобы заполнить первую неделю
    const startDayOfWeek = startOfMonth.isoWeekday();
    for (let i = startDayOfWeek - 1; i > 0; i--) {
      days.push(startOfMonth.subtract(i, 'day'));
    }

    // Добавление всех дней текущего месяца
    for (let i = 0; i < endOfMonth.date(); i++) {
      days.push(startOfMonth.add(i, 'day'));
    }

    // Добавление дней следующего месяца, чтобы заполнить последнюю неделю
    const endDayOfWeek = endOfMonth.isoWeekday();
    for (let i = 1; i <= (7 - endDayOfWeek); i++) {
      days.push(endOfMonth.add(i, 'day'));
    }

    return days;
  }
  const days = generateDays();

  const handleDayClick = (day: dayjs.Dayjs) => {
    if (!day.isSame(currentDate, 'month')) {
      // Если кликнули на день из другого месяца, переключаем текущий месяц
      setCurrentDate(day.startOf('month'));
    }
    setSelectedDate(day); // Выбор даты при клике
  };

  return (
    <div className={styles.days}>
      {days.map((dayItem, index) => {
        const dayClasses = [styles.day];

        if (selectedDate && dayItem.isSame(selectedDate, 'day')) {
          dayClasses.push(styles.selected);
        }
        if (dayItem.isSame(dayjs(), 'day')) { // сегодняшний день
          dayClasses.push(styles.today);
        }
        if (!dayItem.isSame(currentDate, 'month')) { //дни не входящие в текущий месяц
          dayClasses.push(styles.notCurrentMonth);
        }

        return (
          <div
            key={index}
            className={dayClasses.join(' ')}
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