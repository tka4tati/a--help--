import React from 'react';
import { PartnerBox } from './PartnerBox';
import './PartnersBlock.scss';
import PartnerLogo1 from '../../assets/images/partner1.png';
import PartnerLogo2 from '../../assets/images/partner2.png';
import PartnerLogo3 from '../../assets/images/partner3.png';
import PartnerLogo4 from '../../assets/images/partner4.png';
import PartnerLogo5 from '../../assets/images/partner5.png';
import PartnerLogo6 from '../../assets/images/partner6.png';
import PartnerLogo7 from '../../assets/images/partner7.png';
import PartnerLogo8 from '../../assets/images/partner8.png';


export const PartnersBlock = () => {
  return (
    <div className="partners__container">
        <h1 className="partners__title">Наші партнери</h1>
        <div className="partners__boxes">
            <PartnerBox logo={PartnerLogo1} partnerName={"World Food Programme"} description={"Гумінатарна організація"}/>
            <PartnerBox logo={PartnerLogo2} partnerName={"Голоси дітей"} description={"Благодійний фонд"}/>
            <PartnerBox logo={PartnerLogo3} partnerName={"Сила берегині"} description={"Громадська організація"}/>
            <PartnerBox logo={PartnerLogo4} partnerName={"World Central Kitchen"} description={"Благодійна організація"}/>
            <PartnerBox logo={PartnerLogo5} partnerName={"Інфочат Харків"} description={"Громадська організація"}/>
            <PartnerBox logo={PartnerLogo6} partnerName={"Good bread"} description={"Соціальна пекарня"}/>
            <PartnerBox logo={PartnerLogo7} partnerName={"Япошка"} description={"Мережа ресторанів японської та італійської кухні"}/>
            <PartnerBox logo={PartnerLogo8} partnerName={"GLOBAL 2000"} description={"Організація з охорони навколишнього середовища"}/>
        </div>
    </div>
  )
}
