import "../Style/skill.css"
import React from 'react'
import html from "../images/html.png"
import css from "../images/css.png"
import Js from "../images/javascript.png"
import reactimg from "../images/react.png"
import nodejs from "../images/nodejs.jpg"
import mongoDb from "../images/mongodb.png"
import git from "../images/git.png"
import expressjs from "../images/expressjs.png"
import smartEmoji from "../images/smartEmoji.png"

export default function Skill() {
   let arr = [
      {
         url: Js,
         name: "Javascript",
         link:"https://www.geeksforgeeks.org/javascript/"
      },
      {
         url: reactimg,
         name: "React",
         link:"https://www.geeksforgeeks.org/reactjs-tutorials/"
      },
      {
         url: nodejs,
         name: "NodeJs",
         link:"https://www.geeksforgeeks.org/nodejs/"
      },
      {
         url: expressjs,
         name: "ExpressJs",
         link:"https://expressjs.com/"
      },
      {
         url: html,
         name: "HTML",
         link:"https://www.geeksforgeeks.org/html/"
      },
      {
         url: css,
         name: "CSS",
         link:"https://www.geeksforgeeks.org/css/"
      },
      {
         url: mongoDb,
         name: "mongoDB",
         link:"https://www.mongodb.com/"
      },
      {
         url: git,
         name: "Github",
         link:"https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources"
      },


   ];
   return <div id="skills">
      <h1 id="skill-name">Skills</h1>
      <div id="Skill-container">
         <br></br>
         <div id="skill-left">

            {arr.map((data, index) => {
               return <div id="skill-contaner-box" key={index}>
                  <img src={data.url} id="skill-images-icon" /><br></br>
                 <a href={data.link} id="skill-link-in-skill-page" target="_blank"><h4>{data.name}</h4></a> 
               </div>
            })}
         </div>
         <div id="skill-right">
            <div id="smart-card-make">
               <div id="image-container-in-skill"><img src={smartEmoji} id="smartemogi-in-skills"/></div>
               <h3 id="job-role-my-profession">Full-Stack Developer</h3>
               <p id="para-of-the-skill">
                 An Ambitious individual who is good at problem-solving and programming, with an emphasis on writing clean and maintainable code.
               </p>
            </div>
         </div>
      </div>
   </div>
}