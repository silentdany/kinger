import {
  CardBody,
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  CardGroup,
  Badge,
} from "reactstrap";

import TextIntroFavori from "../TextFavoriPage";
import UsersContext from "../../contexts/UsersContext";

import { mancini, marie, montespan, louise, henriette } from "../../images";

import { useContext } from "react";
import { poi } from "../data/poi";
import { quotes } from "../data/quotes";

function FavoriPage() {
  const { persons } = useContext(UsersContext);

  console.log(mancini);

  return (
    <CardGroup style={{ maxHeight: "79vh", border: "0" }}>
      <TextIntroFavori />
      <CardImg top width="100%" src={mancini[0]} alt="Card image cap" />
      <CardBody>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <CardTitle tag="h3" className="font-weight-bold">
              {persons[0].name.first}
            </CardTitle>
            <CardSubtitle tag="h4" className="ml-2 font-weight-light">
              {persons[0].dob.age}
            </CardSubtitle>
            <CardText className="d-flex align-items-center m-0">
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Musique
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Danse
              </Badge>
            </CardText>
          </div>
        </div>
      </CardBody>

      <CardImg top width="100%" src={marie[3]} alt="Card image cap" />
      <CardBody>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <CardTitle tag="h3" className="font-weight-bold">
              {persons[3].name.first}
            </CardTitle>
            <CardSubtitle tag="h4" className="ml-2 font-weight-light">
              {persons[3].dob.age}
            </CardSubtitle>
            <CardText className="d-flex align-items-center m-0">
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Théâtre
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Frou-Frou
              </Badge>
            </CardText>
          </div>
        </div>
      </CardBody>

      <CardImg top width="100%" src={montespan[2]} alt="Card image cap" />
      <CardBody>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <CardTitle tag="h3" className="font-weight-bold">
              {persons[2].name.first}
            </CardTitle>
            <CardSubtitle tag="h4" className="ml-2 font-weight-light">
              {persons[2].dob.age}
            </CardSubtitle>
            <CardText className="d-flex align-items-center m-0">
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Calèche
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Portrait
              </Badge>
            </CardText>
          </div>
        </div>
      </CardBody>

      <CardImg top width="100%" src={louise[1]} alt="Card image cap" />
      <CardBody>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <CardTitle tag="h3" className="font-weight-bold">
              {persons[1].name.first}
            </CardTitle>
            <CardSubtitle tag="h4" className="ml-2 font-weight-light">
              {persons[1].dob.age}
            </CardSubtitle>
            <CardText className="d-flex align-items-center m-0">
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Equitation
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Bal
              </Badge>
            </CardText>
          </div>
        </div>
      </CardBody>

      <CardImg top width="100%" src={henriette[0]} alt="Card image cap" />
      <CardBody>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <CardTitle tag="h3" className="font-weight-bold">
              {persons[3].name.first}
            </CardTitle>
            <CardSubtitle tag="h4" className="ml-2 font-weight-light">
              {persons[3].dob.age}
            </CardSubtitle>
            <CardText className="d-flex align-items-center m-0">
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Costumes
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Littérature
              </Badge>
            </CardText>
          </div>
        </div>
      </CardBody>

      <CardImg top width="100%" src={mancini[2]} alt="Card image cap" />
      <CardBody>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <CardTitle tag="h3" className="font-weight-bold">
              {persons[3].name.first}
            </CardTitle>
            <CardSubtitle tag="h4" className="ml-2 font-weight-light">
              {persons[3].dob.age}
            </CardSubtitle>
            <CardText className="d-flex align-items-center m-0">
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Chasse
              </Badge>
              <Badge pill color="dark" className="opacity-4 m-2 p-2">
                Courtisane de luxe
              </Badge>
            </CardText>
          </div>
        </div>
      </CardBody>
    </CardGroup>
  );
}
export default FavoriPage;
