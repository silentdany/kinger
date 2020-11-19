import './App.css';
import Header from './components/Header';
import { Navbar } from 'reactstrap';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className='App'>
      <Header />
      <ProfileCard />
      <Navbar style={{ height: '15vh' }}>Footer</Navbar>
    </div>
  );
}

export default App;
