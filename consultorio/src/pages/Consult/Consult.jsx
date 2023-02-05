import { Funnel } from "phosphor-react";
import { Search } from "../../components/Search";
import { Siderbar } from "../../components/Sidebar";
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
        <Siderbar />
        <main className={styles.main}>
          <section className={styles.main1}>
            <div className={styles.test}>
              <div className={styles.test1}>
                <Search/>
              </div>
              <div className={styles.test2}>
                <button>
                  <Funnel size={28} color="var(--green-500)" />
                  <p>Filtro</p>
                </button>
              </div>
            </div>
            <div className={styles.containerAviso}>
              <p>Aviso</p>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Médico</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.cpf}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.doctor}</td>
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