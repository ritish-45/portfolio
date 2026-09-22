import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../services/projectService";
import "./ProjectCarousel.css";

function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrent(
      (current - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="project-carousel">
      <div className="carousel-header">
        <div>
          <p>SELECTED WORK</p>
          <h2>My Projects</h2>
        </div>

        <div className="carousel-buttons">
          <button onClick={previousProject}>←</button>
          <button onClick={nextProject}>→</button>
        </div>
      </div>

      <ProjectCard project={projects[current]} />

      <div className="carousel-dots">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProjectCarousel;