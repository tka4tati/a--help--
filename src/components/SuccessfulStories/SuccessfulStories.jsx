import React from 'react';
import { SuccessCarousel } from './SuccessCarousel';
import './SuccessfulStories.scss';
import {LinkButton} from '../LinkButton';

import { FullDescriptionFirst } from './FullDescriptionFirst';
import { FullDescriptionSecond } from './FullDescriptionSecond';
import { FullDescriptionThird } from './FullDescriptionThird';

import BabusiaPhoto1 from '../../assets/images/babusia1.jpg';
import BabusiaPhoto2 from '../../assets/images/babusia2.jpg';

import Pet1 from '../../assets/images/stern1.jpg';
import Pet2 from '../../assets/images/stern2.jpg';
import Pet3 from '../../assets/images/stern3.jpg';
import Pet4 from '../../assets/images/dog-photo.jpg';
import Pet5 from '../../assets/images/man-with-dog.jpg';

import Children1 from '../../assets/images/children-image.jpg';


const peopleImageArray = [BabusiaPhoto1,BabusiaPhoto2,Pet1,Pet2,Pet3,Pet4]
const petIamgeArray = [Pet1,Pet2,Pet3,Pet4,Pet5,BabusiaPhoto2]
const childrenImageArray = [Children1,Pet1,Pet2,Pet3,Pet5,]


export const SuccessfulStories = ({isShowButton}) => {
  return (
    <div className="success__container">
          <h1 className="success__title">Успішні історії</h1>
          <p className="success__description">Хочемо поділитися історіями, в яких допомога знайшла своїх адресатів. Прагнемо, щоб таких історій було якомога більше.</p>
          <div className="success__block">
            <SuccessCarousel images={childrenImageArray} title={"Подарунки для дітей"} fullDesc={<FullDescriptionFirst/>} description={"Наш фонд збирає подарунки та товари для дітей з деокупованих територій - солодощі, канцтовари, іграшки, сезонний одяг та взуття."} date={"20 січня 2023"}/>
            <SuccessCarousel images={petIamgeArray} title={"Видачу корму для людей, що прихистили безпритульних тварин"} fullDesc={<FullDescriptionSecond />}  description={"Ми регулярно закуповуємо корм і передаємо його родинам та міні притулкам, які дали прихисток безпритульним тваринам."} date={"9 січня 2023"}/>
            <SuccessCarousel images={peopleImageArray} title={"Допомога маломобільним людям "} fullDesc={<FullDescriptionThird />}  description={"Наш команда разом із ГО “Фенікс13” передали ходунки для Тамари - літньої мешканки міста Куп’янськ. Це місто та його жителі постраждали і щодня продовжують страждати від російської військової агресії."} date={"28 листопада 2022"}/>
          </div>
          {isShowButton && <LinkButton path='/successful' text={"Всі успішні історії"}/>}
       
    </div>
  )
}
