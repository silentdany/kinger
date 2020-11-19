import { Col, Card, CardImg, CardTitle, CardDeck } from "reactstrap";

import PropTypes from "prop-types";

import TextIntroFavori from "../TextFavoriPage";
import CatherineCormack from "../../images/CatherineCormack.jpg";
import CatherineDeMedicis from "../../images/CatherineDeMedicis.jpg";
import TulliaDaragona from "../../images/TulliaDaragona.jpg";

function FavoriPage() {
  const courtisans = [
    {
      image: { CatherineCormack },
      character: "Catherine Cormack",
    },
    {
      image: { CatherineDeMedicis },
      character: "Catherine De Medicis",
    },
    {
      image: { TulliaDaragona },
      character: "Tullia D'Aragona",
    },
  ];

  return (
    <CardDeck>
      <TextIntroFavori />
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
            width="100%"
            src={CatherineCormack}
            alt="Card image cap"
          />

          <CardTitle tag="h5">{courtisans.character}</CardTitle>
        </Card>

        <Card>
          <CardImg
            top
            width="100%"
            src={CatherineDeMedicis}
            alt="Card image cap"
          />

          <CardTitle tag="h5">{courtisans.character}</CardTitle>
        </Card>

        <Card>
          <CardImg top width="100%" src={TulliaDaragona} alt="Card image cap" />

          <CardTitle tag="h5">{courtisans.character}</CardTitle>
        </Card>
      </Col>
    </CardDeck>
  );
}

FavoriPage.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default FavoriPage;
