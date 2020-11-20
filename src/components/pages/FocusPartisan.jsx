import PropTypes from "prop-types";
import UsersContext from "../../contexts/UsersContext";
import { Badge, Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import { BsPerson } from "react-icons/bs";
import { AiOutlineWoman } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { useContext } from "react";

import { marie } from "../../images";

function FocusPartisan() {
  const { persons } = useContext(UsersContext);

  const items = [
    {
      src: marie[1],
      altText: "Slide 1",
      key: "1",
    },
    {
      src: marie[2],
      altText: "Slide 2",
      key: "2",
    },
    {
      src: marie[3],
      altText: "Slide 3",
      key: "3",
    },
  ];

  console.log(persons);

  return (
    <Container className="min-vh-100">
      <Row>
        <Col xs="12" className="mt-3 mb-4">
          <UncontrolledCarousel items={items}></UncontrolledCarousel>
        </Col>
        <Col xs="8" className="text-left">
          <h2>
            <BsPerson /> {persons[0].name.first}
          </h2>
          <h3>
            <AiOutlineCalendar /> {persons[0].dob.age}
          </h3>
          <h3>
            <AiOutlineWoman /> Female
          </h3>
          <h3>
            <AiOutlineHome /> Versailles
          </h3>
        </Col>
        <Col xs="4">
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Jeux de carte
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Pique-nique
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Promenade
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Bal déguisé
          </Badge>
        </Col>
      </Row>
    </Container>
  );
}

UncontrolledCarousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FocusPartisan;
