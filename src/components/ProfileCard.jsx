import React, { useContext, useEffect, useMemo, useState } from 'react';
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
} from 'reactstrap';
import { RiInformationFill } from 'react-icons/ri';
import TinderCard from 'react-tinder-card';
import './Card.css';

import courtisane_1 from '../images/courtisane_1.jpg';
import courtisane_2 from '../images/courtisane_2.jpg';
import cormack from '../images/CatherineCormack.jpg';
import medicis from '../images/CatherineDeMedicis.jpg';
import daragona from '../images/TulliaDaragona.jpg';

import InterestBadge from './InterestBadge';

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen');
};

const alredyRemoved = [];

//Point of interest array
const poi = [
  'musique',
  'danse',
  'bouffe',
  'babla',
  'piano',
  'violon',
  'tamere',
  'ola',
  'viaaande',
  'gaming',
];

//Courtesans pics
const pics = [courtisane_1, courtisane_2, cormack, medicis, daragona];
const courtesans = [
  { src: pics[getRandomIntInclusive(0, 4)] },
  { src: pics[getRandomIntInclusive(0, 4)] },
  { src: pics[getRandomIntInclusive(0, 4)] },
];

//Get random between 0 and 9
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// MAIN FUNCTION
function ProfileCard({ id }) {
  const { persons } = useContext(UsersContext);
  const [poi1, setPoi1] = useState(null);
  const [poi2, setPoi2] = useState(null);
  const [poi3, setPoi3] = useState(null);

  let charactersState = persons;

  // Carousel control states
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Carousel controls functions
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === courtesans.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? courtesans.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  //Tinder swipe
  const [characters, setCharacters] = useState(persons);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(persons.length)
        .fill(0)
        .map((i) => React.createRef()),
    [persons.length]
  );

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
    alredyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
    charactersState = charactersState.filter(
      (character) => character.name.first !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alredyRemoved.includes(person.name.first)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name.first; // Find the card object to be removed
      const index = persons
        .map((person) => person.name.first)
        .indexOf(toBeRemoved); // Find the index of which to make the reference to
      alredyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  // Carousel items slides function
  const slides = courtesans.map((item) => {
    return (
      <CarouselItem
        className='shadow-lg'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}>
        <img src={item.src} alt='' style={{ height: '79vh' }} />
      </CarouselItem>
    );
  });

  useEffect(() => {
    setPoi1(getRandomIntInclusive(0, 2));
    setPoi2(getRandomIntInclusive(0, 2));
    setPoi3(getRandomIntInclusive(0, 2));
  }, [characters]);

  return (
    <div className='cardContainer' style={{ height: '79vh' }}>
      {characters.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className='swipe'
          key={character.id.value}
          onSwipe={(dir) => swiped(dir, character.name.first)}
          onCardLeftScreen={() => outOfFrame(character.name.first)}>
          <Card style={{ maxHeight: '79vh', border: '0' }}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={courtesans}
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
                    {character.name.first}
                  </CardTitle>
                  <CardSubtitle tag='h4' className='ml-2 font-weight-light'>
                    {character.dob.age}
                  </CardSubtitle>
                </div>
                <CardText>
                  Icelui jovait clavecin debovt, Cela est se pevt brovtille por
                  vovs
                </CardText>
                <CardText>
                  <InterestBadge poi={poi[poi1]} />
                  <InterestBadge poi={poi[poi2]} />
                  <InterestBadge poi={poi[poi3]} />
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
        </TinderCard>
      ))}
    </div>
  );
}

export default ProfileCard;
