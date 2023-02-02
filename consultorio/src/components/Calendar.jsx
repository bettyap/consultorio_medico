import { Calendar } from 'react-calendar';
import "./Calendar.css"
import styles from "./Calendar.module.css";
import 'react-calendar/dist/Calendar.css';

export function CalendarSimple(){
  return(
    <div className={styles.calendarContainer}>
      <Calendar />
      
    </div>
  );
}