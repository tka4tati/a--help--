import React from 'react';
import './CurrentNeeds.scss';
import { CurrentNeedsCard } from './CurrentNeedsCard';
import CurrentNeeds1 from '../../assets/images/currentNeeds/large/currentNeedsLarge1.png';
import CurrentNeeds2 from '../../assets/images/currentNeeds/large/currentNeedsLarge2.png';
import CurrentNeeds3 from '../../assets/images/currentNeeds/large/currentNeedsLarge3.png';
import CurrentNeeds4 from '../../assets/images/currentNeeds/large/currentNeedsLarge4.png';
import { LinkButton } from '../LinkButton';


const OptionsCard = [
  {
    CurrentNeedsImage: <img className='cardItemImage' src={CurrentNeeds1} />,
    CurrentNeedsImage: <img className='currentNeedsItemImage' src={CurrentNeeds1}/>,
    CurrentNeedsName: "Ремонт приміщення волонтерського штабу після пожежі",
    CurrentNeedsFinance: "85 000 грн",
    CurrentNeedsDescription: "Перед нами стоїть дуже важливе питання ремонту, бо це приміщення не тільки працює як пункт прийому та  видачі гуманітарної допомоги, але і як облаштований дитячий центр, у якому проходять заняття для малечі. У нашому приміщенні зараз немає опалення та електричної проводки, пошкодженні внутрішні перегородки. Якщо ми не відремонтуємо ці жахливі наслідки пожежі, то не зможемо працювати.",
  },
  {
    CurrentNeedsImage:  <img className='cardItemImage' src={CurrentNeeds2} />,
    CurrentNeedsName: "Допомога дорослим і дітям деокупованих сіл",
    CurrentNeedsImage:  <img className='currentNeedsItemImage' src={CurrentNeeds2}/>,
    CurrentNeedsName: "Допомога дорослим і дітям деокупованих сіл",
    CurrentNeedsFinance: "80 000 грн",
    CurrentNeedsDescription: "Закупівля продуктів, смаколиків та пального для надання гуманітарної допомоги мешканцям сіл Харківської області.",
  },
  {
    CurrentNeedsImage:  <img className='cardItemImage' src={CurrentNeeds3} />,
    CurrentNeedsImage:  <img className='currentNeedsItemImage' src={CurrentNeeds3}/>,
    CurrentNeedsName: "Ремонт транспорту, що розвозить гуманітарну допомогу",
    CurrentNeedsFinance: "13 500 грн",
    CurrentNeedsDescription: "Сьогодні ми потребуємо допомоги для оплати ремонту автомобіля, який потрапив у аварію під час надання гуманітарної допомоги.    Нашими зусиллями була зроблена закупівля необхідних автозапчастин. Автівку було швидко відремонтовано і вона вже в роботі. Але борг за ремонт складає 13 500 грн.",
  },
  {
    CurrentNeedsImage:  <img className='ccardItemImage' src={CurrentNeeds4} />,
    CurrentNeedsImage:  <img className='currentNeedsItemImage' src={CurrentNeeds4}/>,
    CurrentNeedsName: "Збір на покупку товарів для тварин, що втратили дім через війну.",
    CurrentNeedsFinance: "45 000 грн",
    CurrentNeedsDescription: "Ми закуповємо приладдя за доглядом, корма та вітаміни. Все, що потрібно собакам для їх щасливого життя. Ми хочемо зібрати якомога більше речей  та скоріше відвезти у цей притулок.",
  }
];


export const CurrentNeeds = ({isShowButton}) => {
  return (
    <div className="currentNeeds">
      <h2 className="mainName"> Поточні потреби </h2>
      <p className="mostImportantNeeds"> Зараз для нас є важливим закриття 4 найважливіших потреб: </p>
      <div className="currentNeedsCards">
        <CurrentNeedsCard
        options={OptionsCard}
        />
      </div>
      {isShowButton && <LinkButton className="currentNeeds__item__link--button" path='/current' text={"Всі поточні потреби"}/>}
    </div>
  );
}
