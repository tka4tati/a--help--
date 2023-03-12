import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselItem';
import './Carousels.scss';
import ShortInfoBlock1 from "../../../assets/images/ShortInfoBlock/ShortInfoBlock1.png";
import ShortInfoBlock2 from "../../../assets/images/ShortInfoBlock/ShortInfoBlock2.png";
import ShortInfoBlock3 from "../../../assets/images/ShortInfoBlock/ShortInfoBlock3.png";
import ShortInfoBlock4 from "../../../assets/images/ShortInfoBlock/ShortInfoBlock4.png";
import ShortInfoBlock5 from "../../../assets/images/ShortInfoBlock/ShortInfoBlock5.png";
import RightPath from "../../../assets/images/accent-arrow-right.svg";
import LeftPath from "../../../assets/images/accent-arrow-right.svg";

const photos = [
  { id: 'test-id-1', url: ShortInfoBlock1, text: 'test-text-1' },
  { id: 'test-id-2', url: ShortInfoBlock2, text: 'test-text-2' },
  { id: 'test-id-3', url: ShortInfoBlock3, text: 'test-text-3' },
  { id: 'test-id-4', url: ShortInfoBlock4, text: 'test-text-4' },
  { id: 'test-id-5', url: ShortInfoBlock5, text: 'test-text-5' }
];

export function ShortInfoBlockCarousel() {
  return (
    <div className="ShortInfoBlockCarousel">
      <Carousel interval={3000}
        slide={true}
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
        {photos.map(el => (
                  <Carousel.Item className='carouselStyle' href={el.url} key={el.id}>
                          <div> <img src={el.url}></img></div>
                    </Carousel.Item>  
              ))
        }
      </Carousel>
    </div>
  );
}
