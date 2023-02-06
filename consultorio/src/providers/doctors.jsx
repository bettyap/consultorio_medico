import { createContext, useContext, useState } from "react";

export const DoctorContext = createContext({});


const initialDoctors = [
  {
    crm: "CRM/SP 123456",
    name: "Dra. Aline",
    specialty: "Dermatologista"
  },
  {
    crm: "CRM/SP 135790",
    name: "Dr. Alexandre",
    specialty: "Dermatologista"
  },
  {
    crm: "CRM/SP 871927", 
    name: "Dr. Marcos",
    specialty: "Gastroenterologista"
  },
  {
    crm: "CRM/SP 721987", 
    name: "Dra. Helena",
    specialty: "Ginecologista"
  },
  {
    crm: "CRM/SP 246802", 
    name: "Dra. Bruna",
    specialty: "Médico clínico geral"
  },
  {
    crm: "CRM/SP 022673", 
    name: "Dr. Luis",
    specialty: "Médico clínico geral"
  },
  {
    crm: "CRM/SP 654321", 
    name: "Dr. Cícero",
    specialty: "Pediatra"
  },
  {
    crm: "CRM/SP 789987", 
    name: "Dra. Jade",
    specialty: "Pediatra"
  },
  {
    crm: "CRM/SP 229071", 
    name: "Dra. Julia",
    specialty: "Psiquiatra"
  },
  {
    crm: "CRM/SP 328971", 
    name: "Dr. Bruno",
    specialty: "Urologista"
  },
]

export const DoctorProvider = (props) => {
  const [doctors, setDoctors] = useState(initialDoctors)

  return (
    <DoctorContext.Provider value={{doctors, setDoctors}}>
      {props.children}
    </DoctorContext.Provider>
  );
}

export const useDoctor = () => useContext(DoctorContext)