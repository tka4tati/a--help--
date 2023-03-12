import React from 'react';
import './MissionBlock.scss';
import { DirectionBox } from './DirectionBox';
import ChildrenPhoto from '../../assets/images/direction1.png';
import PeoplePhoto from '../../assets/images/direction2.png';
import DogPhoto from '../../assets/images/direction3.png';



export const MissionBlock = () => {
  return (
    <>
        <div className="mission__container">
            <h1 className="mission__title">Наша головна мета</h1>
            <p className="mission__description">об'єднати зусилля з іншими організаціями та небайдужими людьми для надання психологічної, соціальної, гуманітарної допомоги сім'ям з дітьми та іншим вразливим верствам населення, що постраждали через війну в Україні..</p>
        </div>
        <div className="direction__container">
            <h1 className="direction__title">Напрямки роботи</h1>
            <p className="direction__description">Наша команда поставила перед собою завдання/задачу забезпечити всім необхідним та надати гуманітарну допомогу населенню Харкова та Харківської області.</p>
            <div className="direction__boxes">
                <DirectionBox image={ChildrenPhoto} title={"Психологічна підтримка та проведення занять для дітей"} description={"Розвивальні заняття з професійними педагогами, реабілітаційні заходи та надання психологічної допомоги дітям, які постраждали внаслідок ворожих дій."} alt={"children photo"}/>
                <DirectionBox image={PeoplePhoto} title={"Допомога населенню деокупованих територій"} description={"Відвідування декілька разів на місяць, надання продуктової та матеріальної допомоги - одягу, засобів особистої гігієни, сірників, свічок, ліхтариків, корму для тварин."} alt={"people photo"}/>
                <DirectionBox image={DogPhoto} title={"Допомога тваринам"} description={"Надання корму та засобів для догляду за тваринами, які опинились на вулиці, а зараз прилаштовані у міні – притулки мешканцями селищ."} alt={"dog photo"}/>
            </div>
        </div>
    </>
  )
}
