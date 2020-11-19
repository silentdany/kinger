import { Card, CardImg, CardTitle, CardDeck } from 'reactstrap';

import PropTypes from 'prop-types';

import TextIntroFavori from '../TextIntroFavori';
import CatherineCormack from '../../images/CatherineCormack.jpg';
import CatherineDeMedicis from '../../images/CatherineDeMedicis.jpg';
import TulliaDaragona from '../../images/TulliaDaragona.jpg';

function FavoriPage() {
  console.log(CatherineCormack);
  const courtisans = [
    {
      image: CatherineCormack,
      character: 'Catherine Cormack',
    },
    {
      image: CatherineDeMedicis,
      character: 'Catherine De Medicis',
    },
    {
      image: TulliaDaragona,
      character: "Tullia D'Aragona",
    },
  ];

  return (
    <CardDeck>
      <TextIntroFavori />
      <Card>
        <CardImg top width='100%' src={CatherineCormack} alt='Card image cap' />

        <CardTitle tag='h5'>{courtisans.character}</CardTitle>
      </Card>

      <Card>
        <CardImg
          top
          width='100%'
          src={CatherineDeMedicis}
          alt='Card image cap'
        />

        <CardTitle tag='h5'>{courtisans.character}</CardTitle>
      </Card>

      <Card>
        <CardImg top width='100%' src={TulliaDaragona} alt='Card image cap' />

        <CardTitle tag='h5'>{courtisans.character}</CardTitle>
      </Card>
    </CardDeck>
  );
}

FavoriPage.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default FavoriPage;
