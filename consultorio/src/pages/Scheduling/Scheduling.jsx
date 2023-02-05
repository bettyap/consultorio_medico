
import { Siderbar } from "../../components/Sidebar";
import { CalendarSimple } from "../../components/Calendar"
import { List } from "../../components/List"
import styles from "./Scheduling.module.css";
import { ListScheduling } from "../../components/ListScheduling";
import { useAuth } from "../../providers/auth";
import { useScheduling } from "../../providers/scheduling";
import { useState } from "react";
import dayjs from 'dayjs';

const hoursScheduling=[
  "08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30",
  "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"
]

export function Scheduling(){
  const [date, setDate] = useState()

  const { doctors  } = useAuth()
  const { schedulings, setSchedulings } = useScheduling()
  const [ schedulingCurrent, setSechedulingCurrent ] = useState([])
  // const todaySchedulings = []

  
  function setActiveDate (value) {
    setDate(value)
    let agendamentosDoDia = schedulings.filter((scheduling, index) => {
      const scheduleDate = dayjs(scheduling.datetime).format("DD/MM/YYYY")
      const activeDate = dayjs(value).format("DD/MM/YYYY")

      if( scheduleDate === activeDate) {
        return true
      } else {
        return false
      }
    })

    
    // cria o array de horas e mergeia com os agendamentos do dia
    for(let i = 0; i < hoursScheduling.length; i++ ){
      const hour = hoursScheduling[i] 
      let agendamento = agendamentosDoDia.find(agendamento => {
        return agendamento === hour
      })

    }
    setSechedulingCurrent(agendamentosDoDia)

    console.log(agendamentosDoDia)
  }

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
              <CalendarSimple onChange={setActiveDate} value={date} />
            </div>
          </section>
          <section className={styles.main2}>
            {dayjs(date).format("DD/MMMM YYYY")}
            <div className={styles.contentScheduling}>
              {
                schedulingCurrent.map((scheduling) => (
                  <ListScheduling
                    key={scheduling.patientCpf} 
                    hours={dayjs(scheduling.datetime).format("HH:mm")}
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