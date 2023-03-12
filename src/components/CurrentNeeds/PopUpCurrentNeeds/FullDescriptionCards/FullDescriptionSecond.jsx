import React from 'react';
import './FullDescriptionCards.scss';
import { Button } from '../../../Button';
import CurrentNeeds1 from '../../../../assets/images/currentNeeds/large/currentNeedsLarge2.png';



export const FullDescriptionSecond = () => {
  return (
    <div className="currentNeedsCardFullDescription__wrapper">
      <img  src={CurrentNeeds1} alt="Photo of the burnt-out entrance to the charity organization's office" className="full__description__cards__img" />
      <div className="full__description__cards__container">
        <p className="full__description__cards__name">Допомога дорослим і дітям деокупованих сіл Куп´янського та Ізюмського районів</p>
        <p className="full__description__cards__cost">80 000 грн</p>
        <p className="full__description__cards__needs__description">Закупівля продуктів, смаколиків та пального для надання гуманітарної допомоги мешканцям сіл Харківської області.</p>
        <Button className="full__description__cards__button" text={"Допомогти"} /> 
      </div>
    </div>
  )
}