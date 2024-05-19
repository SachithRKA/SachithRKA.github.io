import React from "react";
import ReactMarkdown from 'react-markdown';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Projects() {
    const URL = "https://SachithRKA.github.io/Sachith_Ranaweera_PortFolio";

    return (
        <div className="projects">
            <div className="project">
                <p className="skills">Python / Gemini API / Tensorflow / Numpy</p>
                <a className="title" href="https://github.com/SachithRKA/ASL_Gemini_App">ASL_Gemini_App</a>

                <div className="video-container">
                    <iframe
                        title="ASL Gemini App Demo"
                        width="560"
                        height="315"
                        src="https://youtu.be/Ugdj0LZ2tBc"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>

                <code className="description">
                    The ASL Gemini App utilizes AI technology to teach users ASL vocabulary and assess their signing accuracy. 
                    Users are presented with ASL words or phrases and are prompted to sign them using the camera on their device. 
                    The app then compares the user's signed language to the expected word or phrase, providing feedback and guidance based on Gemini's advice.                
                </code>
                <a href="https://github.com/SachithRKA/ASL_Gemini_App" className="link">Link</a>
                <a href="https://youtu.be/Ugdj0LZ2tBc" className="link">Video-Link</a>
            </div>

            <div className="project">
                <p className="skills">TypeScript / JS / Tailwind</p>
                <a className="title" href="https://github.com/SachithRKA/ReactTypeScriptFrontendTemplate">ReactTypeScriptFrontendTemplate</a>

                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                    <div>
                        <img src= {"wrong/Images-Videos/frontend.png"} alt="User Authentication System Screenshot 1" />
                    </div>
                    
                    <div>
                        <img src= {URL + "/Images-Videos/frontend2.png"} alt="User Authentication System Screenshot 2" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/frontend3.png"} alt="User Authentication System Screenshot 3" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/frontend4.png"} alt="User Authentication System Screenshot 3" />
                    </div>
                </Carousel>

                <code className="description">
                    The React TypeScript Frontend Template offers a robust starting point for developing web applications with React and TypeScript. 
                    Featuring essential pages like home, login, register, database integration, and membership plans, this template streamlines the process of building dynamic and interactive frontends. 
                    Hosted effortlessly using GitHub Pages, it provides a seamless experience for developers to kickstart their projects and deliver modern, responsive web applications with ease.
                </code>
                <a href="https://github.com/SachithRKA/ReactTypeScriptFrontendTemplate" className="link">Link</a>
            </div>

            <div className="project">
                <p className="skills">Figma / Requirements Analysis / Data Gathering / Prototype Design / User Experience Design</p>
                <a className="title" href="https://github.com/SachithRKA/Notifier">Notifier</a>

                <div className="gif-container">
                    <img
                        src="/Images-Videos/figma.gif" 
                        alt="ASL Gemini App Demo"
                        className="gif"
                    />
                </div>

                <code className="description">
                    Notifier is a web application designed to streamline transit and schedule information, such as class schedules and assignments, for users. 
                    By combining functionalities like route management and efficient route selection, it aims to enhance time management. 
                    The mobile application features a user-friendly interface with familiar navigation elements, 
                    ensuring ease of use and a visually appealing experience through a light color palette and descriptive imagery.                </code>
                <a href="https://github.com/SachithRKA/Notifier" className="link">Link</a>
            </div>

            <div className="project">
                <p className="skills">HTML / CSS / EJS / REACT / SQL</p>
                <a className="title" href="https://github.com/SachithRKA/Authentication-System">User Authentication System</a>

                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                    <div>
                        <img src= {URL + "/Images-Videos/auth1.png"} alt="User Authentication System Screenshot 1" />
                    </div>
                    
                    <div>
                        <img src= {URL + "/Images-Videos/auth2.png"} alt="User Authentication System Screenshot 2" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/auth3.png"} alt="User Authentication System Screenshot 3" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/auth4.png"} alt="User Authentication System Screenshot 4" />
                    </div>
                </Carousel>

                <code className="description">
                    This project provides a comprehensive User Authentication System with support for both traditional login/register and OAuth login/registration. 
                    It's designed to ensure secure and seamless user experiences.
                </code>
                <a href="https://github.com/SachithRKA/Authentication-System" className="link">Link</a>
            </div>

            <div className="project">
                <p className="skills">HTML / CSS / REACT</p>
                <a className="title" href="https://github.com/SachithRKA/NoteTaker">NoteTaker</a>

                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                    <div>
                        <img src= {URL + "/Images-Videos/notetaker1.png"} alt="User Authentication System Screenshot 1" />
                    </div>
                    
                    <div>
                        <img src= {URL + "/Images-Videos/notetaker2.png"} alt="User Authentication System Screenshot 2" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/notetaker3.png"} alt="User Authentication System Screenshot 3" />
                    </div>
                </Carousel>

                <code className="description">
                    NoteTaker is a React project enabling users to jot down and manage small notes effortlessly. 
                    With features for creating, viewing, and deleting notes, it provides a simple and intuitive platform for organizing thoughts and tasks.
                </code>
                <a href="https://github.com/SachithRKA/NoteTaker" className="link">Link</a>
            </div>

            <div className="project">
                <p className="skills">HTML / CSS / SCSS / REACT / JS</p>
                <a className="title" href="https://github.com/SachithRKA/SachithArachPortfolio">Sachith Arach Portfolio</a>

                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                    <div>
                            <img src= {URL + "/Images-Videos/portfolio.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/portfolio2.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/portfolio3.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/portfolio4.png"} alt="Blog Project Image 1" />
                    </div>
                </Carousel>

                <code className="description">
                    Welcome to my portfolio website! This space showcases my skills, projects, and experiences in the world of [Computer Engineering]. 
                    Whether you're a potential employer, collaborator, or just curious visitor, I appreciate your time in exploring my work.
                </code>
                <a href="https://github.com/SachithRKA/SachithArachPortfolio" className="link">Link</a>
            </div>

            <div className="project">
                <p className="skills">EJS / JS / Express / Node / CRUD</p>
                <a className="title" href="https://github.com/SachithRKA/MyBlog">MyBlog</a>

                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                    <div>
                        <img src= {URL + "/Images-Videos/blog.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/blog2.png"} alt="Blog Project Image 2" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/blog3.png"} alt="Blog Project Image 3" />
                    </div>

                    <div>
                        <img src= {URL + "/Images-Videos/blog4.png"} alt="Blog Project Image 3" />
                    </div>
                </Carousel>

                <code className="description">
                    This project is a blog post website that allows users to create, view, edit, and delete blog posts. 
                    The homepage displays multiple blog posts, and users can navigate to each post to view its content.
                </code>
                <a href="https://github.com/SachithRKA/MyBlog" className="link">Link</a>
            </div>

            <div className="project">
                <p className="skills">PostgreSQL / HTML / SQL / CSS / JS</p>
                <a className="title" href="https://github.com/SachithRKA/FamilyLibrary">Family Library</a>

                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                    <div>
                            <img src= {URL + "/Images-Videos/your-library.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/your-library2.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/your-library3.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/your-library4.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/your-library5.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/your-library6.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/your-library7.png"} alt="Blog Project Image 1" />
                    </div>

                    <div>
                            <img src= {URL + "/Images-Videos/your-library8.png"} alt="Blog Project Image 1" />
                    </div>
                </Carousel>

                <code className="description">
                    FamilyLibrary is a comprehensive web application dedicated to managing books in a family setting. 
                    It allows for the categorization of books based on individual members, providing a personalized library experience. 
                    This application not only enables the addition of new members but also assigns them a unique color for easy identification. 
                    Moreover, FamilyLibrary provides the ability to remove books from the list, ensuring the accuracy and relevance of the library. 
                    With its user-friendly interface and robust functionality, FamilyLibrary is a valuable tool for families who love reading together.
                </code>
                <a href="https://github.com/SachithRKA/FamilyLibrary" className="link">Link</a>
            </div>

            <div className="project">
                <p className="skills">API / HTTP / REST API / Node.js / EJS</p>
                <a className="title" href="https://github.com/SachithRKA/Weather-API">Weather API</a>

                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                    <div>
                            <img src="/Images-Videos/weatherapp.png" alt="Blog Project Image 1" />
                    </div>
                </Carousel>

                <code className="description">
                    Weather-API is a web application that retrieves real-time weather information using the Weatherbit API. 
                    Users are prompted to provide their own Weatherbit API key along with their country and city to receive current weather data.
                </code>
                <a href="https://github.com/SachithRKA/Weather-API" className="link">Link</a>
            </div>


        </div>
    );
}

export default Projects;