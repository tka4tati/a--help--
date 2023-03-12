import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselItem = ({path}) => {
  return (
      <Carousel.Item href={path}></Carousel.Item>
  );
}