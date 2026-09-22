import { Link, useParams } from "react-router-dom";
import projects from "../../services/projectService";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <main className="project-details">
        <h1>Project Not Found</h1>
        <Link to="/projects">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <p className="details-category">
        {project.category}
      </p>

      <h1>{project.title}</h1>

      <p className="details-description">
        {project.description}
      </p>

      <div className="details-section">
        <h2>Technologies</h2>

        <div className="details-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      {project.github !== "#" && (
        <a
          className="details-github"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub →
        </a>
      )}

      <br />

      <Link className="back-projects" to="/projects">
        ← Back to Projects
      </Link>
    </main>
  );
}

export default ProjectDetails;