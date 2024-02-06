import React from "react";
import CertificationDatabase from "./CertificationDatabase";
import ReactMarkdown from 'react-markdown';

function Certifications() {
    return (
        <div className="projects">
            {CertificationDatabase.map((cert, index) => {
                return (
                    <div key ={index} className="project">
                        <p className="skills">{cert.site} ({cert.start} - {cert.completed})</p>
                        <a className="title" href={cert.link}>{cert.cert_name}</a>
                        <code className="description">{cert.learned}</code>
                        <a href={cert.link} className="link">Link</a>
                    </div> 
                );
            })};
        </div>
    );
}

export default Certifications;