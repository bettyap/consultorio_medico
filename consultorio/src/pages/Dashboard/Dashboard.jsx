import 'react-calendar/dist/Calendar.css';
import styles from './Dashboard.module.css'
import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Search } from '../../components/Search'
import { DeviceMobile, EnvelopeSimple, Heartbeat, MapPin } from 'phosphor-react'
import { CalendarSimple } from '../../components/Calendar'
import { List } from '../../components/List'
import { useDoctor } from '../../providers/doctors'

const data = [
  { contato: "Dra. Jade", mensagem: "A mãe da Dra. ligou precisa falar com ela", telefone: "+55 11 9999-9999" },
  { contato: "Julia Matos", mensagem: "Separar a nota fiscal, irá retirar dia 02 de fevereiro", telefone: "+55 11 4002-8922" },
  { contato: "", mensagem: "depositar o dinheiro na conta do Dr.", telefone: ""},
]

export default function Dashboard() {
  const { doctors  } = useDoctor()

  function DoctorAttending (props){
    return(
      <div className={styles.infoDoctorAttending}>
        <Heartbeat size={24} color="var(--green-500)" />
        <p>{props.name}</p>
        <p>{props.specialty}</p>
      </div>
    );
  }

  function InfoContact(props){
    return (
      <div className={styles.infoConsultingItem}>
        {props.icon}
        <p>{props.text}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <section className={styles.columnA}>
            <Search/>
            <div className={styles.containerDashboard}>
              <div className={styles.contentDashboard}>
                <div className={styles.forecast}>
                  <div className={styles.infoQueries}>
                    <p>Consultas: 100</p>
                    <p>Consultas concluídas: 22</p>
                    <p>Faltas: 02 </p>
                  </div>
                </div>
                <div className={styles.forecastA}>
                  <div className={styles.infoConsulting}>
                    <DoctorAttending
                      name="Dra. Jade"
                      specialty="Pediatra"
                    />
                    <DoctorAttending
                      name="Dr. Cícero"
                      specialty="Pediatra"
                    />
                    <DoctorAttending
                      name="Dra. Aline"
                      specialty="Dermatologista"
                    />
                    <DoctorAttending
                      name="Dr. Alexandre"
                      specialty="Dermatologista"
                    />
                    <DoctorAttending
                      name="Dr. Lucas"
                      specialty="Médico clínico geral"
                    />
                  </div>
                  <div className={styles.infoConsulting}>
                    <InfoContact 
                      icon={<DeviceMobile size={24} color="var(--green-500)"/>}
                      text="+ 55 11 97370-5483"
                    />
                    <InfoContact 
                      icon={<EnvelopeSimple size={24} color="var(--green-500)"/>}
                      text="beth_ap@live.com"
                    />
                    <InfoContact 
                      icon={<MapPin size={24} color="var(--green-500)" />}
                      text="Rua xxxxxxx - Nazaré Paulista / SP"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerAlert}>
              <p>Lembrete</p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Status</th>
                    <th className={styles.th}>Contato</th>
                    <th className={styles.th}>Mensagem</th>
                    <th className={styles.th}>Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td className={styles.td}><input type="checkbox" /></td>
                        <td className={styles.td}>{item.contato}</td>
                        <td className={styles.td}>{item.mensagem}</td>
                        <td className={styles.td}>{item.telefone}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
          <section className={styles.columnB}>
            <div className={styles.calendarContainer}>
              <CalendarSimple />
            </div>
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
          </section>
        </main> 
      </div>
    </div>
  );
}