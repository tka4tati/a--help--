import React from 'react';
import './AdditionalInfoBlock.scss';
import { Button } from '../Button';
import { Popup } from '../Form/Popup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    name: yup.string().required("*Це поле є обов’язковим до заповнення"),
    email: yup.string().email("*Невірний формат email").required("*Це поле є обов’язковим до заповнення"),
    message: yup.string().max(500, "*Ви ввели більше 500 символів").required("*Це поле є обов’язковим до заповнення"),
    agreed: yup.bool().oneOf([true], "*Погодження з політикою конфіденційності є обов’язковим")
  }).required();

export const AdditionalInfoBlock = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);
  return (
    <div className="additional__container">
        <div className="additional__text">
            <h1 className="additional__text-title">Запит на додаткову інформацію</h1>
            <p className="additional__text-description">Якщо ви не знайшли інформацію, яка вас цікавить, заповніть, будь ласка, форму праворуч. Ми надішлемо відповідь на вашу електронну пошту.</p>
        </div>
        <div className="additional__form">
                <div className="form__block">
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

                        <div className="additional__form-button"><Button onClick={handleSubmit(onSubmit)} text={"Відправити форму"}/></div>
                    </form>
                </div>
        </div>
    </div>
  )
}
