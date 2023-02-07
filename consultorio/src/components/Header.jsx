import styles from './Header.module.css';
import { User } from "phosphor-react";

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerInfo}>
          <p>ELISABETH APARECIDA</p>
          <p>Nazaré Paulista - SP</p>
        </div>
        <User size={40}/>
      </div>
    </header>
  );
}