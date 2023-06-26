import TopNav from "./TopNav";
import "../Style/home.css"
import linkedin from "../images/linkedin.png";
import github from "../images/icone-github.png"
import youtube from "../images/youtube.png"
import emojiAttitude from "../images/attitudeEmoji.png"
import profilepic from "../images/profilepic-1 (2).png"
import crown from "../images/crown.png"

export default function Home(){
    return<div id="homes">
    <div id="home-container">
    <div id="left-home">
        <h1 id="hey-i-am-home">Hey ! I Am </h1>
        <h1 id="name-home-at-name">Dipali Jadhav</h1>
        <p id="info-about-me-in-small">A Full-Stack Web Developer , writing clean and maintainable code,with a focus on full-stack development. </p><br></br>
        <a href="https://www.linkedin.com/in/jadhav-dipali/" target="_blank"><img src={linkedin} id="linkedin-png" className="png-home"/></a> 
        <a href="https://github.com/jadhav-dipali" target="_blank"><img src={github} id="github-png" className="png-home"/> </a>
        <a href="https://www.youtube.com/channel/UC3vy9g2lPDJt0RnnScNTVKQ" target="_blank"><img src={youtube} id="" className="png-home"/></a> 
    </div>
    <div id="right-home">
    <img src={emojiAttitude} className="png-attitude" />
    <img src={profilepic} className="png-profilePic" />
    <div id="info-self-intro">
        <img src={crown}className="png-home-croun"/>
        <span id="titleofme">Full-Stack Web Developer</span>
    </div>
    </div>
    </div>
    </div>
}