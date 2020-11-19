import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import FocusPartisan from "./pages/FocusPartisan";
import KingProfil from "./pages/KingProfilPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/FocusPartisan/" component={FocusPartisan} />
        <Route path="/KingProfil/" component={KingProfil} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
