import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Week from './component/Week';
import StudentId from './component/StudentId';
import Name from './component/Name';
import College from './component/College';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Week />
        <StudentId id="101395226"/>
        <Name name="Takami Nakashima"/>
        <College college="George Brown College, Toronto"/>
      </header>
    </div>
  );
}

export default App;
