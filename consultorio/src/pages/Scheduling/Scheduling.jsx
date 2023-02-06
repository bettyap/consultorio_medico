
import { Siderbar } from "../../components/Sidebar";
import { CalendarSimple } from "../../components/Calendar"
import { List } from "../../components/List"
import styles from "./Scheduling.module.css";
import { ListScheduling } from "../../components/ListScheduling";
import { useDoctor } from "../../providers/doctors";
import { useScheduling } from "../../providers/scheduling";
import { useState } from "react";
import dayjs from 'dayjs';

const hoursScheduling=[
  "2023-01-01 08:00","2023-01-01 08:30","2023-01-01 09:00","2023-01-01 09:30","2023-01-01 10:00","2023-01-01 10:30","2023-01-01 11:00","2023-01-01 11:30","2023-01-01 12:00","2023-01-01 12:30",
  "13:00","2023-01-01 13:30","2023-01-01 14:00","2023-01-01 14:30","2023-01-01 15:00","2023-01-01 15:30","2023-01-01 16:00","2023-01-01 16:30","2023-01-01 17:00","2023-01-01 17:30"
]

export function Scheduling(){
  const [date, setDate] = useState()

  const { doctors  } = useDoctor()
  const { schedulings, setSchedulings } = useScheduling()
  const [ schedulingCurrent, setSechedulingCurrent ] = useState([])
  
  function setActiveDate (value) {
    setDate(value)
    let todaySchedulings = schedulings.filter((scheduling) => {
      const scheduleDate = dayjs(scheduling.datetime).format("DD/MM/YYYY")
      const activeDate = dayjs(value).format("DD/MM/YYYY")

      if( scheduleDate === activeDate) {
        return true
      } else {
        return false
      }
    })

    const filteredSchedules = []
   
    for(let i = 0; i < hoursScheduling.length; i++ ){
      let hour = dayjs(hoursScheduling[i])
      let scheduling = todaySchedulings.find(scheduling => {
        let datetime = dayjs(scheduling.datetime)

        if (hour.format("HH:mm") === datetime.format("HH:mm")) {
          return true
          
        } else {
          return false
        }

      })
      
      if(scheduling){
        filteredSchedules.push(scheduling)
      }else{
        filteredSchedules.push({
          datetime: hour.format("YYYY-MM-DD HH:mm:ss") 
        })
      }
    }
    setSechedulingCurrent(filteredSchedules)
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
                    key={scheduling.datetime} 
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