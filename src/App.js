import Body from "./components/body.js";

import "./App.css";

import { Alert } from "reactstrap";

function App() {
  return (
    <div className="App">
      <h1>Kinger</h1>
      <h2>Tinder for the King</h2>
      <Alert color="danger">Branche Main/Master, attention !</Alert>
      <Body />
    </div>
  );
}

export default App;
