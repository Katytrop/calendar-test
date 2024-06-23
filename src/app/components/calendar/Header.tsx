import React from 'react';
import styles from "./Calendar.module.scss";
import Image from 'next/image';


const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>January 2024</div>
      <div className={styles.header__btns}>
        <div className={`${styles.btn} ${styles.header__btnArrow}`}>
          <Image src='/arrow-up.svg' alt='arrow-up' width={28} height={28}/>
        </div>
        <div className={`${styles.btn} ${styles.header__btnArrow}`}>
          <Image src='/arrow-down.svg' alt='arrow-down' width={28} height={28}/>
        </div>
      </div>
      
    </div>
  );
};

export default Header;