import { FC } from 'react';
import { useCalendar } from '@/app/context/Calendar';
import Image from 'next/image';
import styles from "./Calendar.module.scss";


const YearSelector: FC = () => {
  const { currentDate, setCurrentDate } = useCalendar();
  const currentYear = currentDate.year();

  const handlePrev = () => {
    setCurrentDate(currentDate.subtract(1, 'year'));
  };

  const handleNext = () => {
    setCurrentDate(currentDate.add(1, 'year'));
  };

  return (
    <div className={styles.yearSelector}>
      <div className={styles.yearSelector__title}>{currentYear}</div>
      <div className={styles.header__btns}>
        <div className={`${styles.btn} ${styles.yearSelector__btnArrow}`} onClick={handlePrev}>
          <Image src='/arrow-up.svg' alt='arrow-up' width={28} height={28}/>
        </div>
        <div className={`${styles.btn} ${styles.yearSelector__btnArrow}`} onClick={handleNext}>
          <Image src='/arrow-down.svg' alt='arrow-down' width={28} height={28}/>
        </div>
      </div>
    </div>
  );
};

export default YearSelector;