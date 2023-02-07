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
    <form className={styles.containerModal} onSubmit={handleSubmit(onSubmit)}>

      <label className={styles.modalLabel} htmlFor="cpf">CPF</label>
      <InputMask 
        className={styles.modalInput}
        mask="999.999.999-99"
        placeholder="999.999.999-99"
        {...register('cpf',{required: true })}
      />
      {errors.cpf && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label className={styles.modalLabel} htmlFor="birthDate">Data de nascimento: </label>
      <InputMask
        className={styles.modalInput} 
        mask="99/99/9999"
        placeholder="01/01/1972"
        {...register('birthDate',{required: true })}
      />
      {errors.birthDate && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label className={styles.modalLabel} htmlFor="patientName">Nome completo:</label>
      <InputMask
        className={styles.modalInput} 
        mask=""
        placeholder="Maria da Silva"
        {...register('patientName',{required: true })}
      />
      {errors.patientName && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label className={styles.modalLabel} htmlFor="phoneNumber">Telefone:</label>
      <InputMask
        className={styles.modalInput} 
        mask="(99)99999-9999"
        placeholder="(11)99999-9999"
        {...register('phoneNumber',{required: true })}
      />
      {errors.phoneNumber && <span className={styles.formError}>Esse campo é obrigatório</span>}


      <label className={styles.modalLabel} htmlFor="value">Valor</label>
      <CurrencyInput
        className={styles.modalInput}
        placeholder="R$ 100,00" 
        type="number"
        {...register('value',{required: true })}
      />
      {errors.value && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <label className={styles.modalLabel} htmlFor="doctorCrm">Valor</label>
      <select className={styles.modalSelect} {...register('doctorCrm', {required: true})}>
        {doctors.map(doctor => (
          <option key={doctor.crm} value={doctor.crm}>{doctor.name}</option>
        ))}
      </select>
      {errors.doctorCrm && <span className={styles.formError}>Esse campo é obrigatório</span>}
      
      <label className={styles.modalLabel} htmlFor="paymentForm">Forma de pagamento:</label>
      <InputMask
        className={styles.modalInput} 
        mask=""
        placeholder="Ex. Dinheiro"
        {...register('paymentForm',{required: true })}
      />
      {errors.paymentForm && <span className={styles.formError}>Esse campo é obrigatório</span>}

      <button type="submit" className={styles.modalBtn}>
        Confirmar
      </button>
    </form>
  )
}