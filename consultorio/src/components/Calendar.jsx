import './Calendar.css'
import styles from "./Calendar.module.css";
import { Calendar } from 'react-calendar';

export function CalendarSimple(props){
  return(
    <div className={styles.calendarContainer}>
      <Calendar {...props}/>
    </div>
  );
}