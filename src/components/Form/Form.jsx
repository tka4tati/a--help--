import React from 'react';
import './Form.scss';
import FormImage from "../../assets/images/form-image.png";
import { Button } from '../Button';
import { Popup } from './Popup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const schema = yup.object({
    name: yup.string().required("*Це поле є обов’язковим до заповнення"),
    email: yup.string().email("*Невірний формат email").required("*Це поле є обов’язковим до заповнення"),
    phoneNumber: yup.string().notRequired().matches(phoneRegExp, {message:'*Невірний формат номеру', excludeEmptyString:true}).nullable(),
    message: yup.string().max(500, "*Ви ввели більше 500 символів").required("*Це поле є обов’язковим до заповнення"),
    agreed: yup.bool().oneOf([true], "*Погодження з політикою конфіденційності є обов’язковим")
  }).required();

export const Form = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);
  return (
    <>
    <div className="form__container">
        <div className="form__blocks">
            <div className="form__block form__block-left">
                <h1>Ви можете допомогти в будь-який інший спосіб</h1>
                <img src={FormImage} alt="charity image"/>
                <p className="form__block-text">Гроші, ліки, дитячі іграшки, корм для тварин. Зараз потреба є у всьому.</p>
                <p className="form__block-text">Тож, якщо у вас є можливість допомогти нам не фінансово, а в інший спосіб, то заповніть контактну форму праворуч.</p>
                <p className="form__block-text"> Будь яка підтримка дуже цінна. </p>
            </div>
            <div className="form__block form__block-right">
                <form>
                    <input 
                    {...register("name")} 
                    className={`form__block-input ${errors.name?.message && "error"}`}
                    type="text"
                    placeholder="Ваше ім’я"
                    />
                    <p className="form__block-error">{errors.name?.message}</p>
                    <input
                    {...register("email")}
                    className={`form__block-input ${errors.email?.message && "error"}`}
                    type="text" placeholder="Email"
                    />
                    <p className="form__block-error">{errors.email?.message}</p>
                    <input
                    className={`form__block-input ${errors.phoneNumber?.message && "error"}`}
                    {...register("phoneNumber")}
                    type="tel" 
                    placeholder="Номер телефону"
                    />
                    <p className="form__block-error">{errors.phoneNumber?.message}</p>
                    {!errors.phoneNumber?.message && <p className="form__block-condition">*Опціонально</p>}
                    

                    <textarea {...register("message")}
                     className={`form__block-input form__block-textarea ${errors.message?.message && "error"}`}
                     placeholder="Повідомлення"/>
                    <p className="form__block-error">{errors.message?.message}</p>
                    {!errors.message?.message && <p className="form__block-condition">Не більше 500 символів</p>}
                    
                    <div className="form__block-checkbox">
                        <input  {...register("agreed")}  type="checkbox"/> 
                        <Popup 
                        errors={errors.agreed?.message}
                        />
                    </div>
                    <p className="form__block-error">{errors.agreed?.message}</p>

                    <div className="form__button"><Button onClick={handleSubmit(onSubmit)} text={"Відправити форму"}/></div>
                </form>
            </div>
        </div>
        
    </div>
    </>
  )
}
