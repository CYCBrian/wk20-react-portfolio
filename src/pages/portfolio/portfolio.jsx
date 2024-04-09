/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./portfolio.css";

import kumamoImage from "../../assets/projects/kumamo-image.jpg";
import weatherImage from "../../assets/projects/weather-dashboard.jpg";
import cmsImage from "../..//assets/projects/employee-tracker-cms.jpg"
import jatePWA from "../../assets/projects/Jate-PWA.jpg"
import noteTakerImage from "../../assets/projects/note-taker.jpg"
import workDaySchedulerImage from "../../assets/projects/work-day-scheduler.jpg"
import fitzysFadesImage from "../../assets/projects/Fitzys_Fades.jpg"

const projects = [
  {
    id: 0,
    title: "Fitzy's Fades",
    image: fitzysFadesImage,
    description:
      "Full Stack website that allows clients to create an account to book appointments and send messages to the business, and barber's to view and manage booked appointments.",
    repo: "https://github.com/JohnM89/Fitzys_Fades",
    live: "https://fizzyfads.onrender.com/",
    demo: ""
  },
  {
    id: 1,
    title: "Kumamo",
    image: kumamoImage,
    description:
      "An simple web app to reduce food waste by cooking with what's already in your fridge. Enter ingredients found in your fridge, and the page will find you a dish that uses those ingredients. ",
    repo: "https://github.com/CYCBrian/project-1-kumamo-recipe-app",
    live: "https://cycbrian.github.io/project-1-kumamo-recipe-app/",
    demo: ""
  },
  {
    id: 2,
    title: "Weather Dashboard",
    image: weatherImage,
    description:
      "Allow users to retrieve and view weather forecasts for multiple cities. It utilizes the OpenWeatherMap API to gather weather data and presents it in an intuitive, easy-to-navigate interface.",
    repo: "https://github.com/CYCBrian/module-6-challenge-server-api-weather-forecast-app?tab=readme-ov-file#links",
    live: "https://cycbrian.github.io/module-6-challenge-server-api-weather-forecast-app/",
    demo: ""
  },
  {
    id: 3,
    title: "Employee Tracker CMS",
    image: cmsImage,
    description:
      "Command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
    repo: "https://github.com/CYCBrian/Week-12-Employee-Tracker-CMS",
    live: "",
    demo: "https://drive.google.com/file/d/1_3gC0REaLzTGM9XKmVFA-trRgB6dQa_G/view?usp=sharing"
  },
  {
    id: 4,
    title: "JATE-PWA",
    image: jatePWA,
    description:
      "A PWA allowing users to create and edit notes or code snippets both online and offline. The application features data persistence using IndexedDB.",
    repo: "https://github.com/CYCBrian/wk-19-pwa-textEditor",
    live: "https://wk-19-pwa-texteditor-1.onrender.com/",
    demo: ""
  },
  {
    id: 5,
    title: "Note Taker",
    image: noteTakerImage,
    description:
      "Create, save, view, and delete notes through a user-friendly web interface. Uses an back end to save and retrieve note data.",
    repo: "https://github.com/CYCBrian/Week-11-Express.js-Note-Taker",
    live: "https://pure-ocean-62493-bf1d3e6fee62.herokuapp.com/",
    demo: ""
  },
  {
    id: 6,
    title: "Work Day Scheduler",
    image: workDaySchedulerImage,
    description:
      "Calendar application that allows users to save events for each hour of a typical working day. Features dynamically updated HTML and CSS",
    repo: "https://github.com/CYCBrian/challenge-5-day-planner?tab=readme-ov-file",
    live: "https://cycbrian.github.io/challenge-5-day-planner/",
    demo: ""
  },
  
];

function ProjectCard(props) {
  return (
    <section className="project-card">
      <h3 className="project-title">{props.title}</h3>
      <img className="project-image" src={props.image} alt={props.title} />
      <p className="project-description">{props.description}</p>
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
        {props.live !=="" && (
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
        )}
        {props.demo !=="" && (
          <section className="link-container">
            <a
              className="project-link"
              href={props.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              DEMO
            </a>
          </section>
        )}
      </section>
    </section>
  );
}

function ProjectList() {
  return (
    <section className="project-container">
      <h2>Here are a few projects I've done!</h2>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          repo={project.repo}
          live={project.live}
          demo={project.demo}
        />
      ))}
    </section>
  );
}

export default ProjectList;
