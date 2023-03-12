import React from 'react';
import './FullDescriptionCards.scss';
import { Button } from '../../../Button';
import CurrentNeeds1 from '../../../../assets/images/currentNeeds/large/currentNeedsLarge4.png';



export const FullDescriptionFourth = () => {
  return (
    <div className="currentNeedsCardFullDescription__wrapper">
      <img  src={CurrentNeeds1} alt="Photo of the burnt-out entrance to the charity organization's office" className="full__description__cards__img" />
      <div className="full__description__cards__container">
        <p className="full__description__cards__name">Збір на покупку товарів для тварин, що втратили дім через війну</p>
        <p className="full__description__cards__cost">45 000 грн</p>
        <p className="full__description__cards__needs__description">Ми закуповємо приладдя за доглядом, корма та вітаміни. Все, що потрібно собакам для їх щасливого життя. Ми хочемо зібрати якомога більше речей  та скоріше відвезти у цей притулок.</p>
        <Button className="full__description__cards__button" text={"Допомогти"} /> 
      </div>
    </div>
  )
}