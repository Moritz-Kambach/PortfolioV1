import "./AboutSection.css";

import { useEffect, useRef, useState } from "react";

import Me from "../me.jpeg";
import ArrowMutedColor from "../pfeil.png";
import ArrowMainColor from "../pfeil-main-color.png";

function AboutSection() {
  function moveToContact() {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleRatio = Math.max(0, visibleHeight / rect.height);

      const start = 0.1;
      const end = 0.8;
      const p = Math.min(
        1,
        Math.max(0, (visibleRatio - start) / (end - start)),
      );

      setProgress((prev) => Math.max(prev, p));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imgTranslateX = (-1 + progress) * 40;
  const imgTranslateY = (1 - progress) * 100;
  const opacity = progress;

  const cardTranslateX = (1 - progress) * 80;

  const buttonTranslateY = (-1 + progress) * 100;

  return (
    <section className="aboutSection" ref={sectionRef}>
      <div className="sectionHeadInfo">About Me</div>
      <div className="content">
        <div
          className="img-card"
          style={{
            transform: `translateX(${imgTranslateX}px) translateY(${imgTranslateY}px)`,
            opacity,
          }}
        >
          <img src={Me}></img>
        </div>
        <div>
          <div
            className="about-card"
            style={{
              transform: `translateX(${cardTranslateX}px)`,
            }}
          >
            <div className="line"></div>
            <span>
              Nice to meet <em>You</em>!
            </span>
            <div className="line"></div>
            <p>
              I’m a <strong>frontend developer</strong> who enjoys turning ideas
              into polished digital experiences. Creating interfaces that not
              only work smoothly, but also feel intuitive and visually refined
              are my key principles of coding. I pay attention to the small
              details, because they make the biggest difference in how people
              interact with a product.
            </p>
            <p>
              Currently, I’m studying at{" "}
              <strong>Mittweida University of Applied Science</strong> while
              simultaneously building personal projects that allow me to
              experiment, improve, and bring my own concepts to life. Working on
              these projects has strengthened both my technical mindset and my
              ability to approach challenges creatively.
            </p>
            <p>
              Outside of development, I spend a lot of time staying active
              through sports and exploring my passion for cooking. Both help me
              maintain a balanced mindset and often inspire the same patience,
              structure, and creativity that I bring into my work as a
              developer.
            </p>
          </div>
          <div
            className="formula-btn"
            style={{
              transform: `translateY(${buttonTranslateY}px)`,
            }}
          >
            <span>Was I able to convince you?</span>
            <button onClick={moveToContact}>
              Let's work together
              <div className="imgWrapper">
                <img className="imgBase" src={ArrowMutedColor}></img>
                <img className="imgShow" src={ArrowMainColor}></img>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
