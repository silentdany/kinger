import "./App.css";
import Header from "./components/Header";
import { Navbar } from 'reactstrap';
import ProfileCard from './components/ProfileCard';
import FocusPartisan from "./components/pages/FocusPartisan";

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar style={{ height: '15vh' }}>Footer</Navbar>
      <ProfileCard />
      <FocusPartisan />
    </div>
  );
}

export default App;
