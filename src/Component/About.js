import about from "../images/abc.png"
import "../Style/about.css"

export default function About(){
    return<div id="about">
    <h1 id="about-name">About</h1>
    <div id="about-container">
        <div id="about-left"><img src={about} id="image-of-the-about-me"></img></div>
        <div id="about-right">
            <h2>A Dedicated Full Stack Developer based in Pune, India.</h2>
            <p id="about-para-me">An Ambitious individual who is good at problem-solving and programming, with an emphasis on writing clean and maintainable code. Experienced with data structures/algorithms and designing optimal solutions, aspiring to make a career in software engineering with a focus on full-stack development.</p>
        </div>
    </div>
    </div>
}