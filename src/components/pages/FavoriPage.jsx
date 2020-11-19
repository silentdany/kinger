import { Col, Card, CardImg, CardTitle, CardDeck } from "reactstrap";
import { useContext } from "react";

import TextIntroFavori from "../TextFavoriPage";
import UsersContext from "../../contexts/UsersContext";

function FavoriPage() {
  const { persons } = useContext(UsersContext);

  return (
    <CardDeck>
      <TextIntroFavori className="text-responsive" />
      <Col
        xs={{ size: 12 }}
        md={{ size: 5 }}
        lg={{ size: 4 }}
        xl={{ size: 4 }}
        className="container-fluid w-50"
      >
        <Card>
          <CardImg
            top
            width="50%"
            src={persons[0].picture.medium}
            alt="Card image cap"
          />

          <CardTitle tag="h5">{persons[0].name.title}</CardTitle>
        </Card>

        <Card>
          <CardImg
            top
            width="100%"
            src={persons.picture}
            alt="Card image cap"
          />

          <CardTitle tag="h5">{persons.name}</CardTitle>
        </Card>

        <Card>
          <CardImg
            top
            width="100%"
            src={persons.picture}
            alt="Card image cap"
          />

          <CardTitle tag="h5">{persons.name}</CardTitle>
        </Card>
      </Col>
    </CardDeck>
  );
}

export default FavoriPage;
