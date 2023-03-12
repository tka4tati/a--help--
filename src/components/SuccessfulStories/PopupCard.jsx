import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './SuccessfulStories.scss';
import LeftPath from '../../assets/images/left-path.svg';
import RightPath from '../../assets/images/right-path.svg';

export const PopupCard = ({title,date,description,images,show,onHide}) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="card"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="card__container">
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
        <div className="card__text">
          <h3 className="card__text-title">{title}</h3>
          {description}
          <p className="card__text-date">{date}</p>
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}
