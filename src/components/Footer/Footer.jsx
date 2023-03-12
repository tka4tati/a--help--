import React from 'react';
import './Footer.scss';
import { Button } from '../Button';
import Facebook from '../../assets/images/Facebook.svg'
import Insta from '../../assets/images/Insta.svg'
import Telegram from '../../assets/images/Telegram.svg'
import Viber from '../../assets/images/Viber.svg'

export const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__block">
            <h1 className="footer__block-title footer__block-left "> Запит на додаткову інформацію</h1>
            <p className="footer__block-text">Якщо ви не знайшли інформацію, яка вас цікавить, заповніть, будь ласка, форму за посиланням нижче. Ми надішлемо відповідь на вашу електронну пошту.</p>
            <div className="button__wrappper">
                <a className="footer__block-link" href="/contacts">
                    <Button text={"Запит на додаткову інформацію"}/>
                </a>
            </div>
        </div>
        <div className="footer__block">
            <h1 className="footer__block-title footer__block-right">Контакти</h1>
            <div className="footer__block-contacts">
                <div className="footer__block-contact footer__block-right">
                    <h5>Контактний номер</h5>
                    <p>+380 (96) 052 72 91</p>
                </div>
                <div className="footer__block-contact footer__block-right">
                    <h5>Email</h5>
                    <p> <a href="mailto:3232605@gmail.com">3232605@gmail.com</a></p>
                </div>
                <div className="footer__block-contact footer__block-right">
                    <h5>Адреса</h5>
                    <p>м. Харків, вул. Повздовжня, 4</p>
                </div>
            </div>
            <div className="footer__block-icons">
               <a target="_blank" href="https://m.facebook.com/A-help-Ukraine-107200221938176/">
                    <img className="footer__block-icon" src={Facebook} alt="Facebook icon"/>
               </a> 
                <a target="_blank" href="https://instagram.com/a_help_ukraine?utm_medium=copy_link">
                    <img className="footer__block-icon" src={Insta} alt="Instagram icon"/>
                </a>
                <a target="_blank" href="https://t.me/+iYP6EAe1wKc0MjM6">
                    <img className="footer__block-icon" src={Telegram} alt="Telegram icon"/>
                </a>
                <a target="_blank" href="https://invite.viber.com/?g2=AQBLElfynNLHV094mpq21X4%2FlgNGxrb4Bymfpxtgo7dfBSK5SbPwvqkvpW9MWYpT&lang=ru">
                    <img className="footer__block-icon" src={Viber} alt="Viber icon"/>
                </a>
            </div>
        </div>
    </div>
  )
}
