import './Calendar.css'
import styles from "./Calendar.module.css";
import { Calendar } from 'react-calendar';

export function CalendarSimple(){
  return(
    <div className={styles.calendarContainer}>
      <Calendar />
    </div>
  );
}