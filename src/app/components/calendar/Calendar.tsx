import { FC } from 'react';
import Header from './Header';
import Weekdays from './Weekdays';

import styles from "./Calendar.module.scss";
import Days from './Days';

const Calendar: FC = () => {

  return (
    <div className={styles.calendar}>
      <>
        <Header/>
        <Weekdays/>
        <Days/>
      </>
    </div>
  );
};

export default Calendar;