import React, { useContext } from 'react';
import UsersContext from '../contexts/UsersContext';

function Courtesans() {
  const { persons } = useContext(UsersContext);

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

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  persons.map((person) => {
    person.login.md5 = poi[getRandomIntInclusive(0, 9)];
    person.login.password = poi[getRandomIntInclusive(0, 9)];
    person.login.salt = poi[getRandomIntInclusive(0, 9)];
    person.login.sha1 = poi[getRandomIntInclusive(0, 9)];
    person.login.sha256 = poi[getRandomIntInclusive(0, 9)];
  });
  return (
    <div className='m-5'>
      {persons.map((person) => {
        return (
          <div>
            <div>
              {person.name.first}+{person.login.md5}+{person.login.password}+
              {person.login.salt}+{person.login.sha1}+{person.login.sha256}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Courtesans;
