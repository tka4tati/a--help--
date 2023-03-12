import React from 'react';
import './FullDescriptionCards.scss';
import { Button } from '../../../Button';
import CurrentNeeds1 from '../../../../assets/images/currentNeeds/large/currentNeedsLarge1.png';



export const FullDescriptionFirst = () => {
  return (
    <div className="currentNeedsCardFullDescription__wrapper">
      <img  src={CurrentNeeds1} alt="Photo of the burnt-out entrance to the charity organization's office" className="full__description__cards__img" />
      <div className="full__description__cards__container">
        <p className="full__description__cards__name">Ремонт приміщення волонтерського штабу після пожежі</p>
        <p className="full__description__cards__cost">85 000 грн</p>
        <p className="full__description__cards__needs__description">Перед нами стоїть дуже важливе питання ремонту, бо це приміщення не тільки працює як пункт прийому та  видачі гуманітарної допомоги, але і як облаштований дитячий центр, у якому проходять заняття для малечі. У нашому приміщенні зараз немає опалення та електричної проводки, пошкодженні внутрішні перегородки. Якщо ми не відремонтуємо ці жахливі наслідки пожежі, то не зможемо працювати.</p>
        <Button className="full__description__cards__button" text={"Допомогти"} /> 
      </div>
    </div>
  )
}