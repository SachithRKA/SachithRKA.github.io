import React, {useState} from "react";
import TextTransition, {presets} from "react-text-transition";

function Header() {
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
                <TextTransition>{name}</TextTransition>
            </div>
            <div className="resume-button">
                <a className="resume-link" href="https://drive.google.com/uc?export=download&id=1VNbRwngBWzlyIZfKDSf10DXPQ2UZOkcE">Resume</a>
            </div>
            <div className="line">
                <hr />
            </div>
        </div>
    );
}

export default Header;
