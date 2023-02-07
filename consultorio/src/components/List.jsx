import { UserCircle } from "phosphor-react";
import styles from "./List.module.css";

export function List(props){
  return(
    <div className={styles.containerDoctorList}>
      <UserCircle size={48} color="var(--green-500)" />
      <div className={styles.contentDoctorListInfo}>
        <p>{props.name}</p>
        <p>{props.speciality}</p>
      </div>
    </div>
  );
}