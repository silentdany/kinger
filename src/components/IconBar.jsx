import { Button } from "reactstrap";
import { ImCross } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import "./IconBar.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import UsersContext from "../contexts/UsersContext";

function IconBar() {
  const [Favorited, setFavorited] = useState(false);
  const { persons } = useContext(UsersContext);

  return (
    <div className="py-4 d-flex justify-content-center iconBar">
      <Button className="btn-outline-light rounded-circle iconButton mt-1">
        <ImCross color="#fe615f" size={25} />
      </Button>
      <Button className="btn-outline-light rounded-circle iconButton heartIcon">
        <BsFillHeartFill color="#24e5a9" size={25} />
      </Button>
      <div className="py-4 d-flex justify-content-center iconBar">
        <Link to="/fav">
          <Button
            className="btn-outline-light rounded-circle align-middle"
            onClick={() => setFavorited((prev) => !prev)}
          >
            <AiFillStar color="#20bbff" size={30} />
            {Favorited ? " Add to Fav " : ""}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default IconBar;
