import React, { useContext, useState } from 'react';
import UsersContext from '../contexts/UsersContext';
import { Link } from 'react-router-dom';
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
  Badge,
} from 'reactstrap';
import { RiInformationFill } from 'react-icons/ri';
import './Card.css';

import courtisane_1 from '../images/courtisane_1.jpg';
import courtisane_2 from '../images/courtisane_2.jpg';

// Profile pictures array for acrousel
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

// MAIN FUNCTION
function ProfileCard({ id }) {
  const { persons } = useContext(UsersContext);

  console.log(persons);

  // Carousel control states
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Carousel controls functions
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

  // Carousel items slides function
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='shadow-lg'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img src={item.src} alt={item.altText} style={{ height: '79vh' }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Card style={{ maxHeight: '79vh', width: '100vw', border: '0' }}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {/* Actual slide items */}
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
        {/* Profile informations */}
        <CardBody
          style={{ height: '79vh' }}
          className='position-absolute d-flex justify-content-start align-items-end'>
          <div className='d-flex flex-column'>
            <div className='d-flex align-items-center'>
              <CardTitle tag='h3' className='font-weight-bold'>
                Josianne
              </CardTitle>
              <CardSubtitle tag='h4' className='ml-2 font-weight-light'>
                42
              </CardSubtitle>
            </div>
            <CardText>
              Icelui jovait clavecin debovt, Cela est se pevt brovtille por vovs
            </CardText>
            <CardText>
              <Badge pill color='dark' className='opacity-4 m-2 p-2'>
                Musique
              </Badge>
              <Badge pill color='dark' className='opacity-4 m-2 p-2'>
                Danse
              </Badge>
              <Badge pill color='dark' className='opacity-4 m-2 p-2'>
                Perruques
              </Badge>
            </CardText>
          </div>
          <div
            className='d-flex w-25 justify-content-center'
            style={{ zIndex: '500' }}>
            <Link to='/partisan'>
              <RiInformationFill size={30} style={{ fill: 'white' }} />
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProfileCard;
