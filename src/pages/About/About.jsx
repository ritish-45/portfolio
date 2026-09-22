import "./About.css";

function About() {
  return (
    <main className="about-page">
      <div className="about-heading">
        <p>ABOUT ME</p>
        <h1>Who I Am</h1>
      </div>

      <div className="about-content">
        <p>
          I'm Ritish Mohanty, a final-year Computer Science
          Engineering student and aspiring Full Stack Developer.
        </p>

        <p>
          I enjoy building web applications and learning how
          frontend and backend technologies work together.
        </p>

        <p>
          My main technologies include Java, Spring Boot,
          React.js, Node.js, Python, SQL and MySQL.
        </p>

        <p>
          I am continuously improving my development skills by
          building real-world projects and working on practical
          applications.
        </p>
      </div>

      <div className="skills">
        <h2>Skills</h2>

        <div className="skills-list">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>SQL</span>
          <span>MySQL</span>
          <span>Git</span>
          <span>Docker</span>
          <span>AWS</span>
        </div>
      </div>
    </main>
  );
}

export default About;