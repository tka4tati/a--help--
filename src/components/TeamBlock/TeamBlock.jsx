import React from 'react';
import { Members } from './Members';
import './TeamBlock.scss';
import Founder from '../../assets/images/founder.png';
import Member1 from '../../assets/images/team1.png';
import Member2 from '../../assets/images/team2.png';
import Member3 from '../../assets/images/team3.png';
import Member4 from '../../assets/images/team4.png';
import Member5 from '../../assets/images/team5.png';



export const TeamBlock = () => {
  return (
    <div className='team__container'>
        <h1 className='team__title'>Наша команда</h1>
        <div className='team__founder'>
            <img className='team__founder-img' src={Founder}/>
            <h5 className='team__founder-name'>Роман Грибков</h5>
            <p className='team__founder-post'>Засновник фонду</p>
            <p className='team__founder-description'>Засновник та людина, котра зібрала та надихнула усю нашу команду. До війни Роман мав успішний бізнес у сфері дитячої освіти. Але з перших днів війни він разом зі своїми партнерами організував на базі дитячого центру «Арбуз» - хаб гуманітарної допомоги, Благодійний фонд «A-HELP UKRAINE».</p>
        </div>
        <div className='member__container'>
            <Members 
                memberImg={Member1} 
                memberName1={"Водомєрова"} 
                memberName2={"Ірина"} 
                memberName3={"Володимирівна"} 
                memberPost={"Cпівзасновник, керівник фонду"} 
            />
            <Members 
                memberImg={Member2} 
                memberName1={"Пушай"} 
                memberName2={"Ірина"} 
                memberName3={"Анатоліївна"} 
                memberPost={"Cпівзасновник, менеджер проектів"} 
            />
            <Members 
                memberImg={Member3} 
                memberName1={"Шамайко"} 
                memberName2={"Наталія"} 
                memberName3={"Олександрівна"} 
                memberPost={"Волонтер"} 
            />
            <Members 
                memberImg={Member4} 
                memberName1={"Попова"} 
                memberName2={"Юлія"} 
                memberName3={"Олександрівна"} 
                memberPost={"Волонтер"} 
            />
            <Members 
                memberImg={Member5} 
                memberName1={"Долгов"} 
                memberName2={"Сергій"} 
                memberName3={"Єлізарович"} 
                memberPost={"Водій-волонтер"} 
            />
        </div>
        
    </div>
  )
}
