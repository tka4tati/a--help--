import React from 'react';
import { Button } from '../Button';
import './DocsReportsBlock.scss';
import DocumentImage from '../../assets/images/diploma.jpg';

export const DocsReportsBlock = () => {
  return (
    <div className="documentation__container">
        <h1 className="documentation__title">Документація та звітність</h1>
        <div className="box__containers">
            <div className="box__content">
                <div className="box__item">Статут</div>
                <div className="box__item">Структура власності</div>
            </div>
            <div className="box__content">
                <img src={DocumentImage} />
                <div className="box__content-square">
                    <div className="box__item-square">Довідка про відкриття рахунку</div>
                    <div className="box__item-square">Довідка присвоєння ознаки неприбутковості</div>
                </div>
            </div>
            <div className="box__content-item">Виписка з державного реєстру </div>
            <div className="box__content-item">
                <h4 className="box__content-title">Звіт за 2022 рік</h4>
                <p className="box__content-description">Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
                <p className="box__content-date">Nov 22, 2022</p> 
            </div>
            <div className="box__button">
                <div className="box__button-text">Не знайшли потрібну інформацію?</div>
                <div className="box__button-wrapper">
                    <a className="footer__block-link" href="/contacts">
                        <Button text={"Запит на додаткову інформацію"}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
