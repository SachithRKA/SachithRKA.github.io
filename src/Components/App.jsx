import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import About from "./About";
import Projects from "./Projects";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="Pages">
        <SideBar />
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;