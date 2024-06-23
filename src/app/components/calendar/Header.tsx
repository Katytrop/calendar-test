"use client"

import { FC } from 'react';
import styles from "./Calendar.module.scss";
import Image from 'next/image';
import { useCalendar } from '@/app/context/Calendar';



const Header: FC = () => {
  const { currentDate, setView, setCurrentDate } = useCalendar();

  const handlePrev = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNext = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__title} onClick={() => setView('year')}>{currentDate.format('MMMM YYYY')}</div>
      <div className={styles.header__btns}>
        <div className={`${styles.btn} ${styles.header__btnArrow}`} onClick={handlePrev}>
          <Image src='/arrow-up.svg' alt='arrow-up' width={28} height={28}/>
        </div>
        <div className={`${styles.btn} ${styles.header__btnArrow}`} onClick={handleNext}>
          <Image src='/arrow-down.svg' alt='arrow-down' width={28} height={28}/>
        </div>
      </div>
      
    </div>
  );
};

export default Header;