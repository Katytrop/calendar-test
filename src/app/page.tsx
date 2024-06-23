import Image from "next/image";
import styles from "./Page.module.scss";
import Calendar from "./components/calendar/Calendar";
import { CalendarProvider } from "./context/Calendar";

export default function Home() {
  return (
    <CalendarProvider>
      <div className={styles.container}>
      <div className={styles.wrapper}>
        <Calendar/>
      </div>
    </div>
    </CalendarProvider>
  );
}
