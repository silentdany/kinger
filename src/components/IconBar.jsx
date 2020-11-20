import { Button } from "reactstrap";
import { ImCross } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import "./IconBar.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Axios from "axios";
import { useEffect, useState } from "react";

function IconBar() {
  const [Favorited, setFavorited] = useState(false);

  useEffect(() => {
    Axios.get(
      "https://randomuser.me/api/?results=20&nat=fr&gender=female&inc=name,dob,location,picture,id,login"
    ).then((res) => {
      setFavorited(res.data.results);
    });
  }, []);

  return (
    <div className="py-4 d-flex justify-content-center iconBar">
      <Button className="btn-outline-light rounded-circle h-auto w-auto iconButton">
        <ImCross color="#fe615f" size={25} />
      </Button>
      <Button className="btn-outline-light rounded-circle iconButton h-200">
        <BsFillHeartFill color="#24e5a9" size={25} />
      </Button>
      <div className="py-4 d-flex justify-content-center iconBar">
        <Link to="/fav">
          <Button
            className="btn-outline-light iconButton"
            onClick={() => setFavorited((prev) => !prev)}
          >
            {Favorited ? " Add to Fav " : ""}
            <AiFillStar color="#20bbff" size={30} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default IconBar;
