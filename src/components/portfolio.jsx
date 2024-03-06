// import images from assests later

import kumamoImage from '../assets/kumamo-image.jpg';
import weatherImage from '../assets/weather-dashboard.jpg';

const projects = [
    {
        id: 0,
        title: "Kumamo",
        tech: "HTML5, CSS3, Javascript",
        image: kumamoImage,
        description: "Frontend single page web app that recommends recipes based on what you have in your fridge.",
        repo: "https://github.com/CYCBrian/project-1-kumamo-recipe-app",
        live: "https://cycbrian.github.io/project-1-kumamo-recipe-app/"
    },
    {
        id: 1,
        title: "Weather Dashboard",
        tech: "HTML5, CSS3, Javascript",
        image: weatherImage,
        description: "Retrieve and view weather forecasts for multiple cities using an intuitive and easy-to-navigate user interface.",
        repo: "https://github.com/CYCBrian/module-6-challenge-server-api-weather-forecast-app?tab=readme-ov-file#links",
        live: "https://cycbrian.github.io/module-6-challenge-server-api-weather-forecast-app/"
    },
];

function Portfolio(props) {
    return (
        <section>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} />
            <p>{props.tech}</p>
            <p>{props.description}</p>
            <a href={props.repo}>REPO</a>
            <a href={props.live}>LIVE</a>
        </section>
    );
}

function ProjectList() {
    return (
        <div>
            {projects.map(project => (
                <Portfolio
                    key={project.id}
                    title={project.title}
                    tech={project.tech}
                    image={project.image}
                    description={project.description}
                    repo={project.repo}
                    live={project.live}
                />
            ))}
        </div>
    );
}

export default ProjectList;