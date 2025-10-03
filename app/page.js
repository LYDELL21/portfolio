// app/page.js
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <ProjectsGrid />
      <About />
      <Contact />
    </>
  );
}
