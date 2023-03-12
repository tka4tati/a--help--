import React from 'react';
import { Button } from '../Button';
import { ShortInfoBlockCarousel } from './Carousels/Carousels';
import './ShortInfoBlock.scss';
// import mainPageImagesCarousel from '../../assets/images/MainPage/MainPage1.png';


export const ShortInfoBlock = () => {
  return (
    <div className='ShortInfoBlock--wrapper'>
      <div className='ShortInfoBlock'>
        <h1 className='ShortInfoBlock__header'>Допоможіть постраждалим від війни</h1>
        <p className="ShortInfoBlock__description">Війна застала нас у рідному Харкові. Ми на власні очі бачимо страждання та біль людей. Тому, ми створили благодійний фонд “A-ХЕЛП УКРАЇНА” і тепер допомогаємо людям. Долучайся і ти.</p>
        <Button text={"Допомогти"} /> 
      </div>
      <ShortInfoBlockCarousel className='carouselStyle' />
    </div>
  )
}
