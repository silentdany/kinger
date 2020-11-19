import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";

function FocusPartisan(image, name, age, gender, home, hobbies) {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h2>{gender}</h2>
          <h2>{home}</h2>
        </Col>
        <Col xs="12" className="mb-5">
          <UncontrolledCarousel
            items={image.map((i) => {
              return {
                src: i.image,
                altText: name,
              };
            })}
          />
        </Col>
        <Col>
          <p>
            {" "}
            {hobbies}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            numquam quam facere, minima id voluptas fuga consectetur cumque
            harum sint accusamus eveniet recusandae architecto expedita
            praesentium veritatis ipsam eaque culpa corrupti voluptatibus atque
            nostrum et tenetur? Ullam veritatis nobis possimus facere earum
            accusantium placeat rem laboriosam officia. Enim, ea fuga.
          </p>
        </Col>
        <Col xs="6">
          <img src={image} alt={name} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default FocusPartisan;
