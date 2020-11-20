import { Badge, CardImg, Col, Container, Row } from "reactstrap";
import LouisXIV from "../../images/LouisXIV.jpg";

function KingProfil() {
  return (
    <Container className="min-vh-100">
      <Row>
        <Col xs={{ size: 6, offset: 3 }} className="mt-5 mb-4">
          <CardImg
            className="rounded-circle"
            top
            width="100%"
            src={LouisXIV}
            alt="Card image cap"
          />
        </Col>
        <Col xs="12" className="text-center">
          <h2>Louis XIV</h2>
          <h4>Château de Versailles</h4>
        </Col>
        <Col xs={{ size: 10, offset: 1 }} className="text-justify mt-3">
          <p>
            Passionné par la chasse, amateur de promenade, je cherche une
            courtisane qui saura être la parfaite compagne pour les
            divertissements du soir: les jeux, les bals et les sorties au
            théâtre.
          </p>
        </Col>
        <Col xs={{ size: 10, offset: 1 }} className="text-center">
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Chasse
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Promenade
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Bal
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Jeux
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Théâtre
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Bagatelle
          </Badge>
        </Col>
      </Row>
    </Container>
  );
}

export default KingProfil;
