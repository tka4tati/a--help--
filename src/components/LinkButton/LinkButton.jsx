import React from 'react';
import './LinkButton.scss';
import ArrowIcon from '../../assets/images/arrow.svg';
import { Link } from "react-router-dom";

export const LinkButton = ({text, path}) => {
  return (
    <div className="container">
      <Link className="button__container"to={path}> 
        {text} 
        <img className="button__img" src={ArrowIcon} /> 
      </Link>
    </div>
  )
}
