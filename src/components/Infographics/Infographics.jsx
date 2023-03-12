import React from 'react';
import './Infographics.scss';
import InfographicsImage from '../../assets/images/infographics.png';
import {LinkButton} from '../LinkButton';

export const Infographics = () => {
  return (
    <div className="infographics__container">
        <div className="infographics__box">
            <h1 className="infographics__box-title">Наша допомога у цифрах</h1>
            <img className="infographics__box-img" src={InfographicsImage} alt="charity infographics" />
        </div>
        <LinkButton path="/docs" text={"Всі звіти"}/>
    </div>
  )
}
