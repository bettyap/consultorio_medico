import { createContext, useContext, useState } from "react";

export const SchedulingContext = createContext({});

const example = [
  {
    datetime: "2023-02-04 08:00:00",
    doctorCrm: "CRM/SP 123456",
    paymentValue: "R$ 100,00",
    PaymentForm: "Dinheiro",
    patientCpf: "000.000.000-00",
    patientName: "Elisabeth Aparecida",
    patientBirthDate: "05/11/1998",
    patientPhoneNumber: "11 99999-8888"
  },
  {
    datetime: "2023-02-04 08:30:00",
    doctorCrm: "CRM/SP 654321",
    paymentValue: "R$ 180,00",
    PaymentForm: "Cartão de Crédito",
    patientCpf: "111.111.111-11",
    patientName: "Silvana",
    patientBirthDate: "03/02/1976",
    patientPhoneNumber: "11 97093-5483"
  }
]

export const SchedulingProvider = (props) => {
  const [schedulings, setSchedulings] = useState(example)

  return (
    <SchedulingContext.Provider value={{schedulings, setSchedulings}}>
      {props.children}
    </SchedulingContext.Provider>
  );
}

export const useScheduling = () => useContext(SchedulingContext)
