import "./App.css";
import Header from "./components/Header";
import { Navbar } from "reactstrap";
import ProfileCard from "./components/ProfileCard";
import FocusPartisan from "./components/pages/FocusPartisan";
import KingProfil from "./components/KingProfilPage";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar style={{ height: "15vh" }}>Footer</Navbar>
      <Body />
      <ProfileCard />
      <FocusPartisan />
      <KingProfil />
    </div>
  );
}

export default App;
