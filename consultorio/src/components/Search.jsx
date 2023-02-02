import { MagnifyingGlass } from "phosphor-react";
import styles from "./Search.module.css";

export function Search(){
  return(
    <div className={styles.content}>
      <input 
        className={styles.searchInput}
        type="text" 
        name="consulta" 
        id="q" 
        placeholder="Buscar"
      />
      <button className={styles.searchBtn}>
        <MagnifyingGlass size={32} color="var(--green-500)" /> 
      </button>
    </div>
  );
}