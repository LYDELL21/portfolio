// app/page.js
import Nav from "../components/nav";
import Hero from "../components/hero";
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
