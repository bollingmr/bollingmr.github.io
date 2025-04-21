import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Jamming React App",
      description:
        "A React application that allows users to search for and create playlists from Spotify.",
      image: "/assets/jamming-screenshot.jpg",
      link: "https://bollingmr-jammming.netlify.app/",
    },
    // Additional projects can be added here...
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-intro">
        <div className="text">
          <h1>Portfolio</h1>
          <p>
            I'm currently working on several projects. <br></br>Take a look at some of my recent
            work below.
          </p>
        </div>
        <img
          src="/assets/portfolio.svg"
          alt="Code icon"
        />
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
