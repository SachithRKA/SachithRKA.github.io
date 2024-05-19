import React, { useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import About from "./About";
import Projects from "./Projects";
import MyFooter from "./MyFooter";
import Certifications from "./Certifications";
import '../CSS/App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { themeSwitcher } from "../Day&Night";

function App() {
  useEffect(() => {
    themeSwitcher();
  }, [])

  return (
    <Router>
      <Header />

      <div className="Pages">
        <SideBar />
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/project" element={<Projects/>}/>
          <Route path="/certifications" element={<Certifications/>}/>
        </Routes>
      </div>

      <MyFooter/>
    </Router>
  );
}

export default App;