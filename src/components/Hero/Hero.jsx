import { Link } from "react-router-dom";
import "./Hero.css";
import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Ritish
          <br />
          Mohanty.
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using React, Spring Boot and other modern technologies.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="hero-primary">
            View My Work
          </Link>

          <Link to="/contact" className="hero-secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-image">
          <img src={profile} alt="Ritish Mohanty" />
        </div>
      </div>
    </section>
  );
}

export default Hero;