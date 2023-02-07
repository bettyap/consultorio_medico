import styles from "./ModalScheduling.module.css";
import InputMask from "react-input-mask";
import CurrencyInput from "react-currency-masked-input";
import { useForm } from "react-hook-form";
import { useDoctor } from "../providers/doctors";

export function ModalScheduling(props){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { doctors  } = useDoctor()

  function onSubmit(data) {
    props.onSubmit(data)
  }

  return(
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="cpf">CPF</label>
      <InputMask 
        mask="999.999.999-99"
        placeholder="999.999.999-99"
        {...register('cpf',{required: true })}
      />
      {errors.cpf && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label htmlFor="birthDate">Data de nascimento: </label>
      <InputMask 
        mask="99/99/9999"
        placeholder="01/01/1972"
        {...register('birthDate',{required: true })}
      />
      {errors.birthDate && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label htmlFor="patientName">Nome completo:</label>
      <InputMask 
        mask=""
        placeholder="Maria da Silva"
        {...register('patientName',{required: true })}
      />
      {errors.patientName && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label htmlFor="phoneNumber">Telefone:</label>
      <InputMask 
        mask="(99)99999-9999"
        placeholder="(11)99999-9999"
        {...register('phoneNumber',{required: true })}
      />
      {errors.phoneNumber && <span className={styles.formError}>Esse campo é obrigatório</span>}


      <label htmlFor="value">Valor</label>
      <CurrencyInput
        placeholder="R$ 100,00" 
        type="number"
        {...register('value',{required: true })}
      />
      {errors.value && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label htmlFor="doctorCrm">Valor</label>
      <select {...register('doctorCrm', {required: true})}>
        {doctors.map(doctor => (
          <option key={doctor.crm} value={doctor.crm}>{doctor.name}</option>
        ))}
      </select>
      {errors.doctorCrm && <span className={styles.formError}>Esse campo é obrigatório</span>}
      
      <label htmlFor="paymentForm">Forma de pagamento:</label>
      <InputMask 
        mask=""
        placeholder="Ex. Dinheiro"
        {...register('paymentForm',{required: true })}
      />
      {errors.paymentForm && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <button type="submit" className={styles.btnModal}>
        Confirmar
      </button>
    </form>
  )
}