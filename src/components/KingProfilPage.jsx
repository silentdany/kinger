import { CardImg, Col, Container, Row } from "reactstrap";

function KingProfil() {
  return (
    <Container>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} className="mt-3 mb-4">
          <CardImg
            className="rounded-circle"
            top
            width="100%"
            src="https://static.cnews.fr/sites/default/files/louis_xiv_of_france.jpg"
            alt="Card image cap"
          />
        </Col>
        <Col xs="12" className="text-center">
          <h2>Louis XIV</h2>
          <h4>Château de Versailles</h4>
        </Col>
        <Col xs={{ size: 6, offset: 3 }} className="text-center mt-3">
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
