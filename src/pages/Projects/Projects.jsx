import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../services/projectService";
import "./Projects.css";

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-heading">
        <p>MY WORK</p>
        <h1>Projects</h1>
        <span>
          A collection of projects I have built while learning
          and working with different technologies.
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;