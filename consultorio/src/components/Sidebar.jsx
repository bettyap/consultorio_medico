import { useState } from "react";
import * as Tooltip from '@radix-ui/react-tooltip';
import { Calendar, CaretDoubleLeft, CaretDoubleRight, FolderUser, House } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Siderbar(){
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
                <a href={props.href}>
                  {props.icon}
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content side="right" className={styles.tooltipContent} sideOffset={5}>
                  <span>{props.title}</span>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
            </Tooltip.Provider>
          : <a href={props.href}>
              {props.icon}
              <span>{props.title}</span>
            </a>
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
          href="/perfil"
        />
        <SidebarItem 
          icon={<Calendar size={32}/>}
          title="AGENDAR"
          href="/perfil"
        />
        <SidebarItem 
          icon={<FolderUser size={32}/>}
          title="CONSULTAR"
          href="/perfil"
        />
      </ul>
      
    </aside>
  );
}