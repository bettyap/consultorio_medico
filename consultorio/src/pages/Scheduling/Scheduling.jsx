
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { ModalScheduling } from "../../components/ModalScheduling";
import { Siderbar } from "../../components/Sidebar";
import { CalendarSimple } from "../../components/Calendar"
import { List } from "../../components/List"
import styles from "./Scheduling.module.css";
import { ListScheduling } from "../../components/ListScheduling";
import { useDoctor } from "../../providers/doctors";
import { useScheduling } from "../../providers/scheduling";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';

const hoursScheduling=[
  "2023-01-01 08:00","2023-01-01 08:30","2023-01-01 09:00","2023-01-01 09:30","2023-01-01 10:00","2023-01-01 10:30","2023-01-01 11:00","2023-01-01 11:30","2023-01-01 12:00","2023-01-01 12:30",
  "2023-01-01 13:00","2023-01-01 13:30","2023-01-01 14:00","2023-01-01 14:30","2023-01-01 15:00","2023-01-01 15:30","2023-01-01 16:00","2023-01-01 16:30","2023-01-01 17:00","2023-01-01 17:30"
]

export function Scheduling(){
  const [date, setDate] = useState()

  const { doctors  } = useDoctor()
  const { schedulings, setSchedulings } = useScheduling()
  const [ schedulingCurrent, setSechedulingCurrent ] = useState([])
  const [ modalAddOpen, setModalAddOpen ] = useState(false)
  const [ editingScheduling, setEditingScheduling ] = useState()

  useEffect(() => {
    setActiveDate(new Date())
  }, [])

  useEffect(() => {
    setActiveDate(date)
  }, [schedulings])

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

  function addSchedule(scheduling) {
    setModalAddOpen(true)
    setEditingScheduling(scheduling)
  }

  function onAddModalSubmit(form = {}) {
    
    let datetime = dayjs(date).format("YYYY-MM-DD") + " " + dayjs(editingScheduling.datetime).format("HH:mm:ss")
    form.datetime = datetime

    setSchedulings([...schedulings, form])
    setModalAddOpen(false)
  }

  function deleteSchedule(removedScheduling) {
    let newSchedulings = schedulings.filter(scheduling => {
      return scheduling.datetime !== removedScheduling.datetime
    })

    setSchedulings(newSchedulings)
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
                    onAdd={() => addSchedule(scheduling)}
                    onDelete={() => deleteSchedule(scheduling)}
                  />
                ))
              }
            </div>
          </section>
          <Dialog.Root open={modalAddOpen}>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.modalOverlay}/>

              <Dialog.Content className={styles.modalContent} >
                <Dialog.Close className={styles.modalFechar}>
                  <X size={24} onClick={() => setModalAddOpen(false)} color="var(--green-500)" aria-label="Fechar"/>
                </Dialog.Close>
                
                <Dialog.Title>
                  Agendar consulta
                </Dialog.Title>

                <ModalScheduling onSubmit={onAddModalSubmit}/>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </main>
      </div>
    </div>
  );
}