import React from 'react';
import './ContactsBlock.scss';
import BuildingPhoto from '../../assets/images/building-photo.jpg';
import FacebookIcon from '../../assets/images/facebook-dark.svg';
import InstagramIcon from '../../assets/images/insta-dark.svg';
import TelegramIcon from '../../assets/images/telegram-dark.svg';
import ViberIcon from '../../assets/images/viber-dark.svg';


export const ContactsBlock = () => {
  return (
    <div className="contacts__container"> 
        <h1 className="contacts__title">Контакти </h1>
        <div className="contacts__wrapper">
            <div className="contacts__block">
                <img src={BuildingPhoto} alt="building photo"/>
                <div className="contacts__block-contact">
                    <h5>Адреса</h5>
                    <p>м. Харків, вул. Повздовжня, 4</p>
                </div>
                <div className="contacts__block-contact">
                    <h5>Контактний номер</h5>
                    <p>+380 (96) 052 72 91</p>
                </div>
                <div className="contacts__block-contact">
                    <h5>Email</h5>
                    <p>3232605@gmail.com</p>
                </div>
                <div className="contacts__block-icons">
                    <a target="_blank" href="https://m.facebook.com/A-help-Ukraine-107200221938176/">
                            <img className="contacts__block-icon" src={FacebookIcon} alt="Facebook icon"/>
                    </a> 
                    <a target="_blank" href="https://instagram.com/a_help_ukraine?utm_medium=copy_link">
                        <img className="contacts__block-icon" src={InstagramIcon} alt="Instagram icon"/>
                    </a>
                    <a target="_blank" href="https://t.me/+iYP6EAe1wKc0MjM6">
                        <img className="contacts__block-icon" src={TelegramIcon} alt="Telegram icon"/>
                    </a>
                    <a target="_blank" href="https://invite.viber.com/?g2=AQBLElfynNLHV094mpq21X4%2FlgNGxrb4Bymfpxtgo7dfBSK5SbPwvqkvpW9MWYpT&lang=ru">
                        <img className="contacts__block-icon" src={ViberIcon} alt="Viber icon"/>
                    </a>
                </div>
            </div>
            <div className="contacts__block-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14302.096627180965!2d36.2727336017747!3d50.04997964768353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a6fdc42942d3%3A0x461820e85ec748e9!2z0J_RgNC-0LTQvtC70YzQvdCw0Y8g0YPQuy4sIDQsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1677414321818!5m2!1sru!2sua"></iframe>
            </div>
        </div>
    </div>
  )
}
