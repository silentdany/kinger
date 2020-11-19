import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

import { SiTinder } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState(true);

  const handleChange = () => {
    setCurrentPage(!currentPage);
  };

  return (
    <Navbar className="d-flex justify-content-around">
      <Link to="/">
        <SiTinder
          id="siTinder"
          size={25}
          onClick={handleChange}
          className={currentPage ? "grayIcon" : "redIcon"}
        />
      </Link>
      <Link to="/fav">
        <AiFillStar
          id="aiFillStar"
          size={25}
          onClick={handleChange}
          className={currentPage ? "grayIcon" : "redIcon"}
        />
      </Link>

      <Link to="/king">
        <FaUser
          id="faUser"
          size={25}
          onClick={handleChange}
          className={currentPage ? "grayIcon" : "redIcon"}
        />
      </Link>
    </Navbar>
  );
};

export default Header;
