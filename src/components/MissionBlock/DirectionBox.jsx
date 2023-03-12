import React from 'react';
import './MissionBlock.scss';

export const DirectionBox = ({image, title, description, alt}) => {
  return (
    <div className="direction__box">
        <img className="direction__box-img" src={image} alt={alt} />
        <h5 className="direction__box-title">{title}</h5>
        <p className="direction__box-description">{description}</p>
    </div>
  )
}
