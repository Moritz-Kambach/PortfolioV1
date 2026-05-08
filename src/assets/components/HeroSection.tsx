import "./HeroSection.css";

import Ebene1 from "../Parallaxebenen/Ebene1test.png";
import Ebene2 from "../Parallaxebenen/Ebene2.png";
import Ebene3 from "../Parallaxebenen/Ebene3.png";
import Ebene4 from "../Parallaxebenen/Ebene4.png";
import Ebene5 from "../Parallaxebenen/Ebene5.png";
import Ebene6 from "../Parallaxebenen/Ebene6.png";
import Ebene7 from "../Parallaxebenen/Ebene7.png";
import Arrow from "../pfeil.png";
import { useEffect, useState } from "react";

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="heroSection">
      <div className="background">
        <img
          src={Ebene7}
          style={{ transform: `translateY(${scrollY * 1}px)` }}
          className="layer"
        />
        <img
          src={Ebene6}
          style={{ transform: `translateY(${scrollY * 0.9}px)` }}
          className="layer"
        />

        <img
          src={Ebene5}
          style={{ transform: `translateY(${scrollY * 0.8}px)` }}
          className="layer"
        />

        <img
          src={Ebene4}
          style={{ transform: `translateY(${scrollY * 0.7}px)` }}
          className="layer"
        />

        <img
          src={Ebene3}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          className="layer"
        />

        <img
          src={Ebene2}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          className="layer"
        />

        <img
          src={Ebene1}
          style={{ transform: `translateY(${scrollY * 0}px)` }}
          className="layer"
        />
      </div>
      <div>
        <div className="nameContainer">
          <p className="greeting">Hi, I'm</p>
          <p className="name">Moritz Kambach</p>
          <div className="nameDivider"></div>
          <p className="txt">
            I build digital experiences that are fast, accessible and
            meaningful.
          </p>
        </div>
        <div className="scroll">
          <img src={Arrow} className="scrollImg"></img>
          <span className="scrollSpan">Scroll down to see more</span>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
