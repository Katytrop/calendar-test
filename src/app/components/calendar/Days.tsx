import React from 'react';
import dayjs from 'dayjs';
import styles from "./Calendar.module.scss";

const Days: React.FC = () => {
  const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

  return (
    <div className={styles.days}>
      {days.map((dayItem, index) => (
        <div
          key={index}
          className={styles.day}
        >
          {dayItem}
        </div>
      ))}
    </div>
  );
};

export default Days;