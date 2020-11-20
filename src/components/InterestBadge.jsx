import React from 'react';
import { Badge } from 'reactstrap';

function InterestBadge({ poi }) {
  return (
    <Badge pill color='dark' className='opacity-4 m-2 p-2'>
      {poi}
    </Badge>
  );
}

export default InterestBadge;
