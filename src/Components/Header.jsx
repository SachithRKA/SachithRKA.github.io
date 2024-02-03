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
                <a className="resume-link" href="../Resume/Sachith_Arach_Resume.pdf" download="Sachith_Arach_Resume.pdf">Resume</a>
            </div>
            <div className="line">
                <hr />
            </div>
        </div>
    );
}

export default Header;