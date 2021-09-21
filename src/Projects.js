import "./Projects.css";
import React from "react";
import projects from "./data";

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      {projects.map((project, index) => {
        return (
          <ul key={index}>
            <h2 className="project-list">{project.name}</h2>
            <h3 className="project-list">
              {" "}
              <a className="project-link" href={project.link}>
                View Website
              </a>
            </h3>
            <h3 className="project-list">
              {" "}
              <a className="project-link" href={project.frontRepo}>
                View Frontend GitHub Repo
              </a>
            </h3>
            <h3 className="project-list">
              {" "}
              <a className="project-link" href={project.backRepo}>
                View Backend GitHub Repo
              </a>
            </h3>
            <h3 className="project-list">{project.description}</h3>
            <h3 className="project-list">{project.languages}</h3>
          </ul>
        );
      })}
    </section>
  );
}
