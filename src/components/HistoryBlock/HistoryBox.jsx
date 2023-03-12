import React from 'react';

export const HistoryBox = ({image, alt, children, boxName}) => {
  return (
        <div className={boxName}>
            <div>
                <img src={image} alt={alt} />
            </div>
            {children}
        </div>
    
  )
}
