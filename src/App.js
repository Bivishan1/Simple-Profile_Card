import logo from './logo.svg';
// import './App.css';
import ProfileCard from './ProfileCard';
import './ProfileCard.css';

function App() {
  return (
    <div className="body">
      <ProfileCard
        imageLink={`https://avatars.githubusercontent.com/u/42530618?v=4`}
        name={5}
        bio="Passion with Full Stack Development"
      />
    </div>
  )
}

export default App;
