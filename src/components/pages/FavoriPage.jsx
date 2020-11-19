import {
  CardGroup,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { useContext } from "react";

import TextIntroFavori from "../TextFavoriPage";
import UsersContext from "../../contexts/UsersContext";

function FavoriPage() {
  const { persons } = useContext(UsersContext);

  return (
    <CardGroup>
      <TextIntroFavori />
      <Card>
        <CardImg
          top
          width="100%"
          src={persons[0].picture.medium}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{persons[0].name.first}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {persons[0].name.first}
          </CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src={persons[0].picture.medium}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{persons[0].name.first}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {persons[0].name.first}
          </CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src={persons[0].picture.medium}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{persons[0].name.first}</CardTitle>
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export default FavoriPage;
