import React from 'react';
import './TeamBlock.scss';

export const Members = ({memberName1, memberName2, memberName3, memberPost,memberImg}) => {
  return (
    <div className='member__box'>
        <img className='member__img' src={memberImg}/>
            <div className='member__box-text'>
                <h5 className='member__name'> {memberName1} </h5>
                <h5 className='member__name'> {memberName2} </h5>
                <h5 className='member__name'> {memberName3} </h5>
            </div>
        <p className='member__post'>{memberPost}</p>
    </div>
  )
}
