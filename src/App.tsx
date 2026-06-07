import "./App.css";

// import { useEffect, useState } from "react";

import HeroSection from "./assets/components/HeroSection";
import QuoteSection from "./assets/components/QuoteSection";
import SkillSection from "./assets/components/SkillsSection";
import AboutSection from "./assets/components/AboutSection";
import ProjectsSection from "./assets/components/ProjectsSection";
import ContactSection from "./assets/components/ContactSection";
import FooterSection from "./assets/components/FooterSection";

function App() {
  // useEffect(() => {
  //   const sections = [
  //     {
  //       id: "home",
  //       lineId: "line-home",
  //     },
  //     {
  //       id: "skills",
  //       lineId: "line-skills",
  //     },
  //     {
  //       id: "about",
  //       lineId: "line-about",
  //     },
  //     {
  //       id: "projects",
  //       lineId: "line-projects",
  //     },
  //   ];
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     sections.forEach(({ id, lineId }, i) => {
  //       const current = document.getElementById(id);
  //       const next = document.getElementById(sections[i + 1]?.id);
  //       const line = document.getElementById(lineId);

  //       if (!current || !line) return;

  //       const start = current.offsetTop;
  //       const end = next ? next.offsetTop : document.body.scrollHeight;

  //       let progress = 0;

  //       if (scrollY >= start && scrollY <= end) {
  //         progress = (scrollY - start) / (end - start);
  //       } else if (scrollY > end) {
  //         progress = 1;
  //       } else {
  //         progress = 0;
  //       }

  //       line.style.height = `${progress * 100}%`;
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {/* <ProgressNav /> */}
      <div id="home">
        <HeroSection />
        <QuoteSection />
      </div>
      <div id="skills">
        <SkillSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
