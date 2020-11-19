import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import FocusPartisan from './pages/FocusPartisan';
import KingProfil from './pages/KingProfilPage';
import FavoriPage from './pages/FavoriPage';
import Header from './Header';
import UsersContext from '../contexts/UsersContext';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Spinner } from 'reactstrap';

const Router = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(
      'https://randomuser.me/api/?results=20&nat=fr&gender=female&inc=name,dob,location,picture,id,login'
    ).then((res) => {
      setPersons(res.data.results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <UsersContext.Provider value={{ persons, setPersons }}>
          <Route exact path='/' component={App} />
          <Route path='/partisan/' component={FocusPartisan} />
          <Route path='/king/' component={KingProfil} />
          <Route path='/fav/' component={FavoriPage} />
        </UsersContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
