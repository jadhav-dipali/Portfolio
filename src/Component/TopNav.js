import "../Style/topnav.css"
import React ,{useState} from "react";
import Skill from "./Skills"
import Project from "./Project";

export default function TopNav(){
    return<div id="top-nav">
      <div>
        <h1 id="dipali-name">Dipali</h1>
      </div>
      <div id="nav-right">
        <ul>
            <li><a href="#homes">Home</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#contacts">Contact</a></li>
        </ul>
      </div>
    </div>
}