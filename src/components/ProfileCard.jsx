import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { FiInfo } from 'react-icons/fi';
import './Card.css';

import courtisane_1 from '../images/courtisane_1.jpg';
import courtisane_2 from '../images/courtisane_2.jpg';

const items = [
  {
    src: courtisane_1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1',
  },
  {
    src: courtisane_2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2',
  },
];

function ProfileCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img src={item.src} alt={item.altText} style={{ height: '75vh' }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Card style={{ maxHeight: '75vh', width: '100vw' }}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            style={{ display: 'none' }}
            direction='prev'
            directionText='Previous'
            onClickHandler={previous}
          />
          <CarouselControl
            style={{ display: 'none' }}
            direction='next'
            directionText='Next'
            onClickHandler={next}
          />
        </Carousel>
        <CardBody
          style={{ height: '75vh' }}
          className='position-absolute d-flex justify-content-start align-items-end'>
          <div className='d-flex flex-column'>
            <div className='d-flex align-items-center'>
              <CardTitle tag='h3' className='bold'>
                Josianne
              </CardTitle>
              <CardSubtitle tag='h4' className='ml-2'>
                42
              </CardSubtitle>
            </div>
            <CardText>
              Icelui jovait clavecin debovt, Cela est se pevt brovtille por vovs
            </CardText>
          </div>
          <div className='d-flex w-25 justify-content-center'>
            <FiInfo size={25} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProfileCard;
