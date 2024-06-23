import styles from "./Page.module.scss";
import Calendar from "./components/calendar/Calendar";
import SelectedDate from "./components/calendar/SelectedDate";
import { CalendarProvider } from "./context/Calendar";

export default function Home() {
  return (
    <CalendarProvider>
      <div className={styles.container}>
      <div className={styles.wrapper}>
        <SelectedDate/>
        <Calendar/>
      </div>
    </div>
    </CalendarProvider>
  );
}
