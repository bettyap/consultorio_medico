import { PlusCircle, Trash, UserCircle } from "phosphor-react";
import styles from "./ListScheduling.module.css";

export function ListScheduling(props){
  return(
    <div className={styles.contentDoctorList}>
      <span>{props.hours}</span>
      <div className={styles.listInfo}>
        <UserCircle size={48} color="var(--green-500)" />
        <p>{props.name}</p>
      </div>
      <div className={styles.crud}>
        {
          props.name === undefined
          ? <button className={styles.btn}>
              <PlusCircle size={28} color="var(--green-500)" />
            </button>
          : <button className={styles.btn}>
              <Trash size={28} color="var(--green-500)" />
            </button>
        }
        
      </div>
    </div>
  );
}