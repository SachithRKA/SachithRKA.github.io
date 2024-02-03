import React from "react";
import ProjectDatabase from "./ProjectDatabase";
import ReactMarkdown from 'react-markdown';

function Projects() {
    return (
        <div className="projects">
            {ProjectDatabase.map((project, index) => {
                return (
                    <div key ={index} className="project">
                        <p className="skills">{project.skills}</p>
                        <a className="title" href={project.Github_link}>{project.Project_Name}</a>
                        <code className="description">{project.description}</code>
                        <a href={project.Github_link} className="link">Link</a>
                    </div> 
                );
            })};
        </div>
    );
}

export default Projects;