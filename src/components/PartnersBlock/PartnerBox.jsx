import React from 'react';
import './PartnersBlock.scss';

export const PartnerBox = ({logo, partnerName, description}) => {
  return (
    <div className="partners__box">
        <img src={logo} />
        <div className="partners__text">
            <h5 className="partners__text-title">{partnerName}</h5>
            <p className="partners__text-description">{description}</p>
        </div>
    </div>
  )
}
