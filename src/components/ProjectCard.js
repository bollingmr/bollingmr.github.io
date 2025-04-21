import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { title, description, image, link } = project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
    >
      <div
        className="project-card"
        style={{ cursor: "pointer" }}
      >
        <h3>{title}</h3>
        <img
          src={image}
          alt={`${title} screenshot`}
        />
        <p>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
