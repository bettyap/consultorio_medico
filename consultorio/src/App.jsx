import React from 'react'
import { Header } from './components/Header'
import { Siderbar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'
import { Search } from './components/Search'
import { DeviceMobile, EnvelopeSimple, Heartbeat, MapPin } from 'phosphor-react'

export default function App() {

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
      <Header />
      <div className={styles.content}>
        <Siderbar />
        <main className={styles.main}>
          <section className={styles.main1}>
            <Search/>
            <div className={styles.containerDashboard}>
              <div className={styles.contentDashboard}>
                <div className={styles.previsao}>
                  <div className={styles.infoQueries}>
                    <p>Consultas: 100</p>
                    <p>Consultas concluídas: 22</p>
                    <p>Faltas: 02 </p>
                  </div>
                </div>
                <div className={styles.previsao2}>
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
          </section>
          <section className={styles.main2}>CALENDARIO</section>
        </main> 
      </div>
    </div>
  );
}