import { useState } from "react";
import * as Tooltip from '@radix-ui/react-tooltip';
import { Calendar, CaretDoubleLeft, CaretDoubleRight, FolderUser, House } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

export function Sidebar(){
  const [menuOpen, setMenuOpen] = useState(false)
  const sidebarClassName = menuOpen ? styles.sidebar + " " + styles.open : styles.sidebar 
  const sidebarList = menuOpen ? styles.sidebarMenu + " " + styles.open : styles.sidebarMenu

  function SidebarItem(props) {
    return (
      <li className={styles.sidebarMenuItem}>
        {menuOpen === false
          ? <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Link to={props.to}>
                  {props.icon}
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content side="right" className={styles.tooltipContent} sideOffset={5}>
                  <span>{props.title}</span>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
            </Tooltip.Provider>
          : <Link to={props.to}>
              {props.icon}
              <span>{props.title}</span>
            </Link>
        }
        </li>
    )
  }

  return(
    <aside className={sidebarClassName}>
      <div className={styles.sidebarContentBtn}>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger className={styles.sidebarContentBtnMenu} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? 
                <CaretDoubleLeft size={32} color="var(--green-500)" />
                :<CaretDoubleRight size={32} color="var(--green-500)" />
              }
            </Tooltip.Trigger>
            <Tooltip.Portal>
            {menuOpen ? 
              <Tooltip.Content/>
            : <Tooltip.Content side="right" className={styles.tooltipContent} sideOffset={5}>
                Abrir Menu
              </Tooltip.Content>
            }
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <ul className={sidebarList}>
        <SidebarItem 
          icon={<House size={32}/>}
          title="PERFIL"
          to="/dashboard"
        />
        <SidebarItem 
          icon={<Calendar size={32}/>}
          title="AGENDAR"
          to="/scheduling"
        />
        <SidebarItem 
          icon={<FolderUser size={32}/>}
          title="CONSULTAR"
          to="/consult"
        />
      </ul>
      
    </aside>
  );
}