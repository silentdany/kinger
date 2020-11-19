import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import './Card.css';

import courtisane_1 from '../images/courtisane_1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileCard() {
  return (
    <div>
      <Card style={{ maxHeight: '75vh' }}>
        <CardImg
          style={{ height: '75vh' }}
          top
          width='100%'
          src={courtisane_1}
          alt="Courtisane's pic"
          className='position-absolute'
        />
        <CardBody
          style={{ height: '75vh' }}
          className='position-relative d-flex justify-content-start align-items-end'>
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
          <div className='d-flex'>
            <FontAwesomeIcon icon='fasInfoCircle' />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProfileCard;
