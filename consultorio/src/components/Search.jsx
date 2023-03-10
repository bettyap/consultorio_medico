import { MagnifyingGlass } from "phosphor-react";
import styles from "./Search.module.css";

export function Search(){
  return(
    <div className={styles.containerSearch}>
      <input 
        className={styles.searchInput}
        type="text" 
        name="consulta" 
        id="q" 
        placeholder="Buscar"
      />
      <button className={styles.searchBtn}>
        <MagnifyingGlass size={28} color="var(--green-500)" /> 
      </button>
    </div>
  );
}