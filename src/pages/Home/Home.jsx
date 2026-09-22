import Hero from "../../components/Hero/Hero";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <ProjectCarousel />

      <section className="home-about">
        <p>ABOUT ME</p>

        <h2>
          I create web applications that are
          <span> simple, functional and modern.</span>
        </h2>
      </section>
    </>
  );
}

export default Home;