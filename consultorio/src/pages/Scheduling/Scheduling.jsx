
import { Siderbar } from "../../components/Sidebar";
import { CalendarSimple } from "../../components/Calendar"
import { List } from "../../components/List"
import styles from "./Scheduling.module.css";
import { ListScheduling } from "../../components/ListScheduling";
import { useAuth } from "../../providers/auth";
import { useScheduling } from "../../providers/scheduling";

export function Scheduling(){
  const { doctors  } = useAuth()
  const { schedulings, setSchedulings } = useScheduling()

  console.log(schedulings)
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Siderbar />
        <main className={styles.main}>
          <section className={styles.main1}>
            <div className={styles.calendarContainer}>
              <div className={styles.contentDoctor}>
              {doctors.map((doctor) => (
                  <List 
                    key={doctor.crm}
                    name={doctor.name}
                    speciality={doctor.specialty}
                  />
                ))}
              </div>
            </div>
            <div className={styles.calendarContainer}>
              <CalendarSimple />
            </div>
          </section>
          <section className={styles.main2}>
            Horas
            <div className={styles.contentScheduling}>
              {
                schedulings.map((scheduling) => (
                  <ListScheduling
                    key={scheduling.patientCpf} 
                    hours={scheduling.datetime}
                    name={scheduling.patientName}
                  />
                ))
              }
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}