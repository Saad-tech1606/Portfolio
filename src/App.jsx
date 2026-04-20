import { useEffect } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";  
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications"; // ✅ FIXED
import Research from "./components/Research";
import Timeline from "./components/Timeline";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";

export default function App() {

  useEffect(() => {
    fetch("http://localhost:5000/visit", {
      method: "POST",
    }).catch(() => {});
  }, []);

  return (
    <div className="text-white overflow-x-hidden">

      <Hero />
      <About />
      <Skills />
      <Projects /> 
      <Experience /> 
      <Education />
      <Certifications /> {/* ✅ NOW WORKS */}
      <Research />
      <Timeline />
      <GithubStats />
      <Contact />

    </div>
  );
}