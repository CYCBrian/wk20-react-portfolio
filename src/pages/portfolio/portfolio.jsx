/* eslint-disable react/prop-types */
// import images from assests later
import "./portfolio.css";

import kumamoImage from "../../assets/projects/kumamo-image.jpg";
import weatherImage from "../../assets/projects/weather-dashboard.jpg";

const projects = [
  {
    id: 0,
    title: "Kumamo",
    image: kumamoImage,
    description:
      "Frontend single page web app that recommends recipes based on what you have in your fridge.",
    repo: "https://github.com/CYCBrian/project-1-kumamo-recipe-app",
    live: "https://cycbrian.github.io/project-1-kumamo-recipe-app/",
  },
  {
    id: 1,
    title: "Weather Dashboard",
    image: weatherImage,
    description:
      "Retrieve and view weather forecasts for multiple cities using an intuitive and easy-to-navigate user interface.",
    repo: "https://github.com/CYCBrian/module-6-challenge-server-api-weather-forecast-app?tab=readme-ov-file#links",
    live: "https://cycbrian.github.io/module-6-challenge-server-api-weather-forecast-app/",
  },
];

function ProjectCard(props) {
  return (
    <section className="project-card">
      <h3 className="project-title">{props.title}</h3>
      <img className="project-image" src={props.image} alt={props.title} />
      <p>{props.description}</p>
      <section className="project-link-container">
        <section className="link-container">
          <a
            className="project-link"
            href={props.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            REPO
          </a>
        </section>
        <section className="link-container">
          <a
            className="project-link"
            href={props.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE
          </a>
        </section>
      </section>
    </section>
  );
}

function ProjectList() {
  return (
    <section className="project-container">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          repo={project.repo}
          live={project.live}
        />
      ))}
    </section>
  );
}

export default ProjectList;
