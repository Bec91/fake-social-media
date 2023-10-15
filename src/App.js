import './App.scss';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ProfileNav from './Components/ProfileNav/ProfileNav';
// import ProfileVideoCard from './Components/ProfileVideoCard/ProfileVideoCard';
import UploadVideo from './Components/UploadVideo/UploadVideo';

function App() {
  return (
    <div className="App">
      <ProfileCard/>
      <ProfileNav/>
      <UploadVideo/>
      {/* <ProfileVideoCard/> */}
    </div>
  );
}

export default App;
