
import { Siderbar } from "../../components/Sidebar";
import { CalendarSimple } from "../../components/Calendar"
import { List } from "../../components/List"
import styles from "./Scheduling.module.css";
import { ListScheduling } from "../../components/ListScheduling";

export function Scheduling(){
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Siderbar />
        <main className={styles.main}>
          <section className={styles.main1}>
            <div className={styles.calendarContainer}>
              <div className={styles.contentDoctor}>
                <List 
                  name="Dra. Betty"
                  speciality="Pediatra"
                />
                <List 
                  name="Dra. Betty"
                  speciality="Pediatra"
                />
                <List 
                  name="Dra. Betty"
                  speciality="Pediatra"
                />
                <List 
                  name="Dra. Betty"
                  speciality="Pediatra"
                />
                <List 
                  name="Dra. Betty"
                  speciality="Pediatra"
                />
              </div>
            </div>
            <div className={styles.calendarContainer}>
              <CalendarSimple />
            </div>
          </section>
          <section className={styles.main2}>
            Horas
            <div className={styles.contentScheduling}>
              <ListScheduling 
                name="Betty"
                hours="09:00"
              />
              <ListScheduling 
                hours="09:30"
              />
              <ListScheduling 
                hours="10:00"
              />
              <ListScheduling 
                hours="10:30"
              />
              <ListScheduling 
                hours="11:00"
              />
              <ListScheduling 
                hours="11:30"
              />
              <ListScheduling 
                hours="12:00"
              />
              <ListScheduling 
                hours="12:30"
              />
              <ListScheduling 
                hours="13:00"
              />
              <ListScheduling 
                hours="13:30"
              />
              <ListScheduling 
                hours="14:00"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}