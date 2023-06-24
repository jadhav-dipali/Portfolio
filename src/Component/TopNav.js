import "../Style/topnav.css"
import Skill from "./Skills"

export default function TopNav(){
    return<div id="top-nav">
      <div>
        <h1 id="dipali-name">Dipali</h1>
      </div>
      <div id="nav-right">
        <ul>
            <li>Home</li>
            <li>Skill</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
}