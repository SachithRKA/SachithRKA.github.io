import React, {useState} from "react";
import TextTransition, {presets} from "react-text-transition";

const AboutsContainer = [
    {
        title: "Full Stack Developer",
        description: "I am proficient in both front-end and back-end development and utilizing a variety of languages and tools to create comprehensive web application. Also, ensures seamless integration and functionality across all layers of the application."
    },
    {
        title: "Computer Engineer",
        description: "I hold a Bachelor's degree in Computer Engineering from York University in Toronto. Throughout my academic journey, I built a solid foundation in both hardware and software design. Additionally, my coursework focused on areas such as machine learning, web development, and web analytics."
    },
    {
        title: "Machine Learning and AI Enthusiast",
        description:"My goal is to contribute to the advancement of these technologies by conducting rigorous research, developing innovative solutions, and staying updated with the latest advancements in the field."
    }
];

function About() {
    const [index, setIndex] = useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="abouts">
            <div key={index} class="about">
                <div className="objects">
                    <TextTransition springConfig={presets.wobbly}>
                        <p className ="title">
                            Hello, I am Sachith Ranaweera a<span className="span-title">{AboutsContainer[index % AboutsContainer.length].title}</span>.
                        </p>

                        <p className ="description">
                            {AboutsContainer[index % AboutsContainer.length].description}
                        </p>
                    </TextTransition>
                </div>
            </div>
        </div>
    );
}

export default About;