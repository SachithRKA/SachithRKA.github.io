import React from "react";
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebar">
            <Link className="about" to="/about">About</Link>
            <Link className="projects" to="/project">Projects</Link>
            <Link className="certifications" to="/certifications">Certifications</Link>
        </div>
    );
}

export default SideBar;