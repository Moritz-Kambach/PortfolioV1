import "./SkillsSection.css";

import Database from "../icons/database.png";
import Tools from "../icons/social.png";
import Design from "../icons/paint-brush.png";
import TopoBG from "../topographic.png";
import { useEffect, useRef } from "react";

function SkillSection() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    boxes.forEach((box) => observer.observe(box));

    return () => observer.disconnect();
  }, []);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * -30;
    const rotateY = (x - 0.5) * 30;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    card.style.transition = "transform 1s ease";
  };

  return (
    <section
      className="skillsSection"
      style={{
        background: `url(${TopoBG})`,
        backgroundSize: "50%",
        backgroundRepeat: "repeat",
      }}
      id="skillsSection"
    >
      <div className="sectionHeadInfo">Skills</div>
      <div className="sectionHeadline">
        <span className="headlineFitter">&lt;</span>{" "}
        <span className="headlineContent">My Skills, My Toolbox.</span>{" "}
        <span className="headlineFitter">/&gt;</span>
      </div>
      <div className="skills">
        <div
          className="skill-card"
          id="card01"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
        >
          <div className="icon">&lt;/&gt;</div>
          <h3>Frontend</h3>
          <div className="divider"></div>
          <div className="tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
        </div>

        <div
          className="skill-card"
          id="card02"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
        >
          <img src={Database} className="skillImg" />
          <h3>Backend & Database</h3>
          <div className="divider"></div>
          <div className="tags">
            <span>Supabase</span>
            <span>Spring-boot</span>
          </div>
        </div>

        <div
          className="skill-card"
          id="card03"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
        >
          <img src={Tools} className="skillImg" />
          <h3>Tools</h3>
          <div className="divider"></div>
          <div className="tags">
            <span>Git</span>
          </div>
        </div>

        <div
          className="skill-card"
          id="card04"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
        >
          <img src={Design} className="skillImg" />
          <h3>Design</h3>
          <div className="divider"></div>
          <div className="tags">
            <span>Figma</span>
            <span>PhotoShop</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillSection;
