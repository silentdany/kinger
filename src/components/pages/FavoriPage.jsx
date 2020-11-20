import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  Badge,
  Row,
} from "reactstrap";
import { useContext } from "react";

import TextIntroFavori from "../TextFavoriPage";
import UsersContext from "../../contexts/UsersContext";

function FavoriPage() {
  const { persons } = useContext(UsersContext);

  return (
    <Row className="mx-2">
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
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[0].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Musique
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Danse
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Perruques
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[1].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[1].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Théâtre
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Bal
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Equitation
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[2].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[2].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Frou-Frou
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Portrait
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Orgie
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[3].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[3].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Musique
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Danse
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Perruques
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[4].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[4].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Théâtre
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Bal
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Equitation
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[5].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[5].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Frou-Frou
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Portrait
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Orgie
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[6].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[6].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Musique
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Danse
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Perruques
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[7].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[7].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Théâtre
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Bal
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Equitation
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={persons[8].picture.medium}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {persons[8].name.first}
            </CardSubtitle>
            <CardText>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Frou-Frou
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Portrait
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Orgie
              </Badge>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </Row>
  );
}

export default FavoriPage;
