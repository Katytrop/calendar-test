import Image from "next/image";
import styles from "./Page.module.scss";
import Calendar from "./components/calendar/Calendar";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Calendar/>
      </div>
    </div>
  );
}
