import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

import { SiTinder } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [currentPage, setCurrentPage] = useState(false);

  return (
    <Navbar className='d-flex justify-content-around'>
      <Link to='/'>
        <SiTinder
          size={25}
          onClick={() => {
            setCurrentPage(!currentPage);
          }}
          className={currentPage ? 'grayIcon' : 'redIcon'}
        />
      </Link>
      <Link to='/fav'>
        <AiFillStar
          size={25}
          onClick={() => {
            setCurrentPage(!currentPage);
          }}
          className={currentPage ? 'grayIcon' : 'redIcon'}
        />
      </Link>

      <Link to='/king'>
        <FaUser
          size={25}
          onClick={() => {
            setCurrentPage(!currentPage);
          }}
          className={currentPage ? 'grayIcon' : 'redIcon'}
        />
      </Link>
    </Navbar>
  );
};

export default Header;
