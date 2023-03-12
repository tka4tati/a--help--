import React from 'react';
import './FullDescriptionCards.scss';
import { Button } from '../../../Button';
import CurrentNeeds1 from '../../../../assets/images/currentNeeds/large/currentNeedsLarge3.png';



export const FullDescriptionThird = () => {
  return (
    <div className="currentNeedsCardFullDescription__wrapper">
      <img  src={CurrentNeeds1} alt="Photo of the burnt-out entrance to the charity organization's office" className="full__description__cards__img" />
      <div className="full__description__cards__container">
        <p className="full__description__cards__name">Ремонт приміщення волонтерського штабу після пожежі</p>
        <p className="full__description__cards__cost">13 500 грн</p>
        <p className="full__description__cards__needs__description">Нашимзусиллями була зроблена закупівля необхідних автозапчастин. Автівку було швидко відремонтовано і вона вже в роботі. Але борг за ремонт складає 13 500 грн.</p>
        <Button className="full__description__cards__button" text={"Допомогти"} /> 
      </div>
    </div>
  )
}