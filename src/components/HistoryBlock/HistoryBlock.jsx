import React from 'react';
import './HistoryBlock.scss';
import { HistoryBox } from './HistoryBox';
import HistoryImage1 from '../../assets/images/history-image1.jpg';
import HistoryImage2 from '../../assets/images/history-image2.jpg';
import HistoryImage3 from '../../assets/images/history-image3.jpg';
import HistoryImage4 from '../../assets/images/history-image4.jpg';
import HistoryImage5 from '../../assets/images/history-image5.jpg';
import HistoryImage6 from '../../assets/images/history-image6.jpg';
import HistoryImage7 from '../../assets/images/history-image7.jpg';
import HistoryImage8 from '../../assets/images/history-image8.jpg';

export const HistoryBlock = () => {
  return (
    <div className="history__wrapper">
        <h1 className="history__title">Історія фонду</h1>
        <div className="history__container">
            <p className="history__container-text history__text">З перших днів війни на базі дитячого розвиваючого центра “Арбуз”, зусиллями співробітників та їхніх родин був організований центр волонтерської допомоги, який в подальшому став благодійним фондом "A-Help Ukraine”. </p>
            <p className="history__container-text history__text-bold">Ми хочемо познайомити вас з історією фонда трохи детальніше</p>
            <img className="history__img" src={HistoryImage1} alt='explotion photo' />
            <p className="history__container-text history__text-bold">Один ранок змінив життя мільйонів людей.</p>
            <p className="history__container-text history__text">Вибухи! Війна! </p>
            <p className="history__container-text history__text">Замість того, щоб розпочати свій робочий день – люди були змушені лишити свої будинки та їхати. Хто куди… Без нічого… Багатьом виїхати не вдалося, і тисячі людей залишились у зоні бойових дій, де щодня йдуть обстріли, руйнуються будинки та переривається  життя…</p>
        </div>
        <div className="history__box">
            <HistoryBox 
                boxName={"history__box-left"} 
                image={HistoryImage2} 
                alt={"people photo"} 
            >
            <div>
                <p className="history__box-text history__text">Постала гостра потреба надавати людям допомогу у вигляді продуктів харчування, ліках, засобах особистої гігієни, засобах для догляду за дітьми та багато іншого</p>
                <p className="history__box-text history__text-bold">Людям була потрібна підтримка та психологічна допомога.</p>
            </div>
            </HistoryBox>
            <HistoryBox 
                boxName={"history__box-right"} 
                image={HistoryImage3} 
                alt={"team photo"}
            >
                <div>
                    <p className="history__box-text history__text">Нас розкидало по містах, але  
                        <span className="history__box-text history__text-bold">ми змогли створити та організувати роботу команди,</span>
                        де кожен намагається забезпечити максимальну користь для жителів міста Харкова, яке дуже сильно постраждало від ракетних ударів.
                    </p>
                </div>
            </HistoryBox>
            <HistoryBox 
                boxName={"history__box-left"} 
                image={HistoryImage4} 
                alt={"humanitarian aid"}
            >
                <div>
                    <p className="history__box-text history__text">До волонтерської команди “A-help” потрапили люди різних спеціальностей, які об'єднали свої зусилля та знання.</p>
                    <p className="history__box-text history__text"> 
                        <span className="history__box-text history__text-bold">Команда ставить перед собою найскладніші завдання</span>
                        зі збирання інформації, пошуку благодійних організацій, закупівлі товарів першої необхідності, організації трансферу та доставки гуманітарної допомоги населенню.
                    </p>
                </div>
            </HistoryBox> 
            <HistoryBox 
                boxName={"history__box-right"} 
                image={HistoryImage5} 
                alt={"hot lunches from the A-help team"}
            >
                <div>
                    <p className="history__box-text history__text">
                        <span className="history__box-text history__text-bold">Одразу були організовані кухні,</span>
                        на яких наші безстрашні жінки – волонтери готували гарячу їжу щоб нагадувати старих, дітей та їхніх батьків, які перебували у підвальних приміщеннях та не мали можливості приготувати їжу. Кожен день наші волонтери 
                        <span className="history__box-text history__text-bold">роздавали гарячі обіди, свіжий хліб, молочні продукти.</span>
                    </p>
                    <p className="history__box-text history__text">Також, ми роздавали значну кількість 
                        <span className="history__box-text history__text-bold">засобів особистої гігієни, дитячих іграшок, важливих ліків та одяг.</span>
                    </p>
                </div>
            </HistoryBox> 
            <HistoryBox 
                boxName={"history__box-left"} 
                image={HistoryImage6} 
                alt={"destroyed building"}
            >
                <div>
                    <p className="history__box-text history__text">Протягом усіх місяців воєнної агресії наша команда
                        <span className="history__box-text history__text-bold"> надає допомогу мешканцям Харкова, селища Жуковського, переселенцям у Харківській області та людям на деокупованих територіях.</span>
                    </p>
                    <p className="history__box-text history__text">
                        <span className="history__box-text history__text-bold">Наш центр</span>
                        розташований в одному з найбільш постраждалих від російської агресії районів Харкова. 
                    </p>
                    <p className="history__box-text history__text">
                        <span className="history__box-text history__text-bold">Селище Жуковського</span>
                        є одним із самих найзатишніших районів міста з великою кількістю населення. І також дуже потребує лікування ран після обстрілів та особливої підтримки.
                    </p>
                </div>
            </HistoryBox> 
            <HistoryBox 
                boxName={"history__box-right"} 
                image={HistoryImage7} 
                alt={"broken windows"}
            >
                <div>
                    <p className="history__box-text history__text">
                        <span className="history__box-text history__text-bold">Нещодавно поблизу нашого центру вибухнула ракета.</span>
                        У нашому приміщенні зараз немає вікон, зруйновані стіни. 
                    </p>
                    <p className="history__box-text history__text">Перед нами стоїть дуже
                        <span className="history__box-text history__text-bold">термінова задача з ремонту, </span>
                    бо це приміщення не тільки пункт прийому та видачі гуманітарної допомоги, але і облаштований дитячий центр, у якому проходять заняття для малечі.
                    </p>
                    <p className="history__box-text history__text">Якщо ми не відремонтуємо ці жахливі наслідки, то 
                        <span className="history__box-text history__text-bold">ми не зможемо працювати.</span>
                    </p>
                    <p className="history__box-text history__text">Саме тому, ми збираємо кошти на ремонт приміщення. Ви можете допомогти нам донатами 
                        <span>за посиланням на головній сторінці.</span>
                    </p>
                </div>
            </HistoryBox> 
        </div>
        <div className="history__container">
            <img className="history__img" src={HistoryImage8} alt="our team photo" />
            <p className="history__container-text history__text-bold">Кожного дня без вихідних ми продовжуємо працювати заради майбутнього нашого міста, нашої країни!</p>
            <p className="history__container-text history__text">Попереду багато планів та задач, які ми обов’язково повинні виконати, бо вважаємо цю роботу обов’язком кожного – надавати допомогу якомога більшій кількості людей у цей важкий для нашої країни час.</p>
            <p className="history__container-text history__text"> У такий момент дуже важливо об'єднуватися і допомагати один одному, тому що чим більше буде бажаючих допомогти – тим більше можливості врятувати життя та перемогти!</p>
        </div>
    </div>
  )
}

