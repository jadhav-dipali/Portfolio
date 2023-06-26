import {BrowserRouter, Route, Routes, browserRouter} from "react-router-dom"
import Home from "./Home"
import Skill from "./Skills"
import About from "./About"
import Project from "./Project"
import Contact from "./Contact"

export default function AppRouter(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="#home" element={<Home/>} />
        <Route path="#skill" element={<Skill/>} />
        <Route path="#about" element={<About/>} />
        <Route path="#project" element={<Project/>} />
        <Route path="#contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  
    </>
}