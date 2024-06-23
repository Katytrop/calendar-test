import { FC } from 'react';
import styles from "./Calendar.module.scss";

const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const Weekdays: FC = () => {
  return (
    <div className={styles.weekdays}>
      {weekdays.map((day, index) => (
        <div key={index} className={styles.weekday}>{day}</div>
      ))}
    </div>
  );
};

export default Weekdays;