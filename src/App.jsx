import './App.css';
import IconBar from './components/IconBar';
import ProfileCard from './components/ProfileCard';
import Courtesans from './data/Courtesans';

function App() {
  return (
    <div className='App'>
      <ProfileCard />
      {/* <Courtesans /> */}
      <IconBar />
    </div>
  );
}

export default App;
