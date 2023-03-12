import React from 'react';
import './BreadcrumbsBlock.scss';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadcrumbsBlock = ({pageName, path}) => {
  return (
    <div className="breadcrumbs__container">
        <Breadcrumb bsPrefix='breadcrumbs'>
            <Breadcrumb.Item bsPrefix='breadcrumbs__item' href='/' >Головна сторінка</Breadcrumb.Item>
            <Breadcrumb.Item bsPrefix='breadcrumbs__item-active'active>{pageName}</Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}
