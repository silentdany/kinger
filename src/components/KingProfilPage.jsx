import { Col, Container, Row } from "reactstrap";
import { BsPerson } from "react-icons/bs";
import { AiOutlineWoman } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";

function KingProfil() {
  return (
    <Container>
      <Row>
        <Col xs="12" className="mt-3 mb-4">
          <img src="" alt="" className="img-fluid" />
        </Col>
        <Col xs="6" className="text-left">
          <h2>
            <BsPerson /> Partisan
          </h2>
          <h3>
            <AiOutlineCalendar /> 32
          </h3>
          <h3>
            <AiOutlineWoman /> Female
          </h3>
          <h3>
            <AiOutlineHome /> Versailles
          </h3>
        </Col>
        <Col xs="6" className="text-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            numquam quam facere, minima id voluptas fuga consectetur cumque
            harum sint accusamus eveniet recusandae architecto expedita.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default KingProfil;
