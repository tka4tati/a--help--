import React from 'react';
import './HelpBlock.scss';
import HelpImage from '../../assets/images/help-image.png';
import { PaymentBlock } from './PaymentBlock';

export const HelpBlock = () => {
  return (
      <div id="helpBlock" className="help__container">
        <div className="help__text">
          <h1 className="help__title">Як ви можете допомогти?</h1>
          <p className="help__description">Підтримати нас можна кількома способами, ми будемо вдячні за будь-яку допомогу. Це зробить нашу роботу кращою та ефективнішою. </p>
        </div>
        <div className="help__boxes">
          <div className="help__box help__box-left">
            <h3 className="help__box-title">Ви можете зробити донат</h3>
            <p className="help__description">Ви врятуєте майбутнє.</p>
            <p className="help__description">Обстріли над головою, руйнування житла, втрата роботи, зачинені магазини та аптеки. </p>
            <p className="help__description">Зруйновані плани на майбутнє та маленькі діти на руках. </p>
            <p className="help__description">Старі люди, які не можуть поїхати, та неймовірна кількість тварин, що опинилася на вулиці.</p>
            <p className="help__description">Ви можете допомогти їм зробивши донат:</p>
            <PaymentBlock />
          </div>
          <div className="help__box help__box-right">
            <img className="help__box-img" src={HelpImage} />
          </div>
        </div>
      </div>
  )
}
