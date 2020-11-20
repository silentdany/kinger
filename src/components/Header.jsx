import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

import { SiTinder } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [rSelected, setRSelected] = useState(null);
  return (
    <Navbar className="d-flex justify-content-around">
      <Link to="/">
        <SiTinder
          id="siTinder"
          size={25}
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
          className={rSelected === 1 ? "redIcon" : "grayIcon"}
        />
      </Link>
      <Link to="/fav">
        <AiFillStar
          id="aiFillStar"
          size={25}
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
          className={rSelected === 2 ? "redIcon" : "grayIcon"}
        />
      </Link>

      <Link to="/king">
        <FaUser
          id="faUser"
          size={25}
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
          className={rSelected === 3 ? "redIcon" : "grayIcon"}
        />
      </Link>
    </Navbar>
  );
};

export default Header;
