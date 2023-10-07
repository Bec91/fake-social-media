import './App.scss';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ProfileNav from './Components/ProfileNav/ProfileNav';
import ProfileVideoCard from './Components/ProfileVideoCard/ProfileVideoCard';

function App() {
  return (
    <div className="App">
      <ProfileCard/>
      <ProfileNav/>
      <ProfileVideoCard/>
    </div>
  );
}

export default App;
