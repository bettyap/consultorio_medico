import { PlusCircle, Trash, UserCircle, X } from "phosphor-react";
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
          ?<PlusCircle size={28} color="var(--green-500)" onClick={props.onAdd} />       
          :<Trash size={28} color="var(--green-500)" onClick={props.onDelete}/>

        }
      </div>
    </div>
  );
}