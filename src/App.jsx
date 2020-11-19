import { Navbar } from 'reactstrap';
import './App.css';

import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className='App'>
      <Navbar style={{ height: '10vh' }}>Nav</Navbar>
      <ProfileCard />
      <Navbar style={{ height: '15vh' }}>Footer</Navbar>
    </div>
  );
}

export default App;
