import { Navbar } from "reactstrap";
import { SiTinder } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState(false);

  return (
    <Navbar className="d-flex justify-content-around">
      <SiTinder
        size={25}
        onClick={() => {
          setCurrentPage(!currentPage);
        }}
        className={currentPage ? "grayIcon" : "redIcon"}
      />

      <AiFillStar
        size={25}
        onClick={() => {
          setCurrentPage(!currentPage);
        }}
        className={currentPage ? "grayIcon" : "redIcon"}
      />

      <FaUser
        size={25}
        onClick={() => {
          setCurrentPage(!currentPage);
        }}
        className={currentPage ? "grayIcon" : "redIcon"}
      />
    </Navbar>
  );
};

export default Header;
