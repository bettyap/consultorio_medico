import React from 'react'
import { Header } from './components/Header'
import { Siderbar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Siderbar />
        <main className={styles.main}>
          <section className={styles.main1}>DASHBOARD</section>
          <section className={styles.main2}>CALENDARIO</section>
        </main> 
      </div>
    </div>
  );
}
