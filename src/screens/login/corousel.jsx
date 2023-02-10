import React, { useEffect, useState } from 'react';
import { items } from '../../misc/data';

import { CarouselComponent } from './carousel/carouselComponent';

const Corousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 4000);
  });

  const slideRight = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1);
  };

  return (
    <div className='carousel'>
      <div className=' flex'>
        {items.map((item, index) => {
          return (
            /* (condition) ? true : false */
            <div
              key={index}
              className={
                index === current
                  ? 'carousel_card carousel_card-active'
                  : 'hidden'
              }
            >
              <CarouselComponent
                item={item}
                current={current}
                setCurrent={setCurrent}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Corousel;
