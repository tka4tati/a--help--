import React from 'react';
import './CurrentNeedsCard.scss';
import { Button } from '../../Button';


export function CurrentNeedsCard ({options}) {
  return (
    <>
      {options?.map((item) => (
          <div className='currentNeeds__item'>
            <div className="currentNeeds__item__image">{item.CurrentNeedsImage}</div>
            <p className="currentNeeds__item__name">{item.CurrentNeedsName}</p>
            <p className="currentNeeds__item__finance">{item.CurrentNeedsFinance}</p>
            <p className="currentNeeds__item__description">{item.CurrentNeedsDescription}</p>
            <Button text={"Допомогти"} />  
          </div>
      ))}
    </>
  );
}