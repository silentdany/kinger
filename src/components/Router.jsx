import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import FocusPartisan from './pages/FocusPartisan';
import KingProfil from './pages/KingProfilPage';
import FavoriPage from './pages/FavoriPage';
import Header from './Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/partisan/' component={FocusPartisan} />
        <Route path='/king/' component={KingProfil} />
        <Route path='/fav/' component={FavoriPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
