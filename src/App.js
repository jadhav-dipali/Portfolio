import logo from './logo.svg';
import './App.css';
import TopNav from './Component/TopNav';
import Home from './Component/Home';
import Skill from './Component/Skills';
import Project from './Component/Project';

function App() {
  return (
    <div>
     <TopNav/>
     <Home/>
     <Skill/>
     <Project/>
    </div>
  );
}

export default App;
