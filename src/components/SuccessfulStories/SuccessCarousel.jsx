import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SuccessfulStories.scss';
import LeftPath from '../../assets/images/left-path.svg';
import RightPath from '../../assets/images/right-path.svg';
import { PopupCard } from './PopupCard';


export const SuccessCarousel = ({images,fullDesc, title, description, date}) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="success__box">
        <div className="success__carousel">
        <Carousel 
        interval={null}
        slide={false}
        activeIndex={index} 
        onSelect={handleSelect}
        bsPrefix={"slider"}
        nextIcon={
          <div className="success__carousel-path">
          <img src={RightPath} alt="path icon"/>
          </div>
        }
        prevIcon={
          <div className="success__carousel-path">
          <img src={LeftPath} alt="path icon"/>
          </div>
        }
        >
            {images?.map((imageUrl)=>(
              <Carousel.Item>
              <img
                className="d-block"
                src={imageUrl}
                alt=""
              />
            </Carousel.Item>
            ))}
        </Carousel>
        </div>
        <div className="success__text" onClick={() => setShow(true)}>
          <h3 className="success__text-title">{title}</h3>
          <p className="success__text-description">{description}</p>
          <p className="success__text-date">{date}</p>
        </div>
        <PopupCard 
          show={show}
          title={title}
          date={date}
          description={fullDesc}
          images={images}
          onHide={()=>setShow(false)}
          />
    </div>
  )
}
