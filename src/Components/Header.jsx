import React, {useState} from "react";
import TextTransition, {presets} from "react-text-transition";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const [name, setName] = useState("SACH");

    function handleMouseOver() {
        setName("Sach Ranaweera");
    }

    function handleMouseLeave() {
        setName("SACH");
    }

    return (
        <div className="header">
            <div className="name" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <TextTransition >{name}</TextTransition>
            </div>
            {location.pathname === "/about" && (
                <div className="resume-button">
                    <a className="resume-link" href="/Resume/Sachith_Arach_Resume.pdf" download>Resume</a>
                </div>
            )}
            <div className="line">
                <hr />
            </div>
        </div>
    );
}

export default Header;
