import logo from './logo.svg';
import './App.css';
import TopNav from './Component/TopNav';
import Home from './Component/Home';
import Skill from './Component/Skills';
import Project from './Component/Project';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (
    <div>
     <TopNav/>
     <Home/>
     <Skill/>
     <About/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
