import './App.css';
import IconBar from './components/IconBar';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className='App' style={{ height: '100%' }}>
      <ProfileCard />
      <IconBar />
    </div>
  );
}

export default App;
