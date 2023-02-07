import { Funnel } from "phosphor-react";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import styles from "./Consult.module.css";

const data = [
  { id:1, cpf: "477.566.000.-09", name: "Julia", phone: "11 99999-9999", doctor: "Dra. Jade", mensagem: "A mãe da Dra. ligou precisa falar com ela", telefone: "+55 11 9999-9999" },
  { id:2, cpf: "477.566.000.-09", name: "Alex", phone: "11 99999-9999", doctor: "Dr. Matos", mensagem: "Separar a nota fiscal, irá retirar dia 02 de fevereiro", telefone: "+55 11 4002-8922" },
  { id:3, cpf: "477.566.000.-09", name: "Lua", phone: "11 99999-9999", doctor: "Dr. Silva", mensagem: "depositar o dinheiro na conta do Dr.", telefone: ""},
]

export function Consult(){
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <section className={styles.consult}>
            <header className={styles.headerConsult}>
              <div className={styles.searchConsult}>
                <Search/>
              </div>
              <div className={styles.advancedFilterConsult}>
                <button className={styles.advancedFilterBtn}>
                  <Funnel size={28} color="var(--green-500)" />
                  <p>Filtro</p>
                </button>
              </div>
            </header>
            <div className={styles.containerAlert}>
              <p>Aviso</p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>id</th>
                    <th className={styles.th}>CPF</th>
                    <th className={styles.th}>Nome</th>
                    <th className={styles.th}>Telefone</th>
                    <th className={styles.th}>Médico</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td className={styles.td}>{item.id}</td>
                        <td className={styles.td}>{item.cpf}</td>
                        <td className={styles.td}>{item.name}</td>
                        <td className={styles.td}>{item.phone}</td>
                        <td className={styles.td}>{item.doctor}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}