import "./ProjectsSection.css";

import TopoBG from "../topographic.png";
import Proj1 from "../projects/Shopping_MainScreen.png";
import Proj2 from "../projects/WeatherApp_HomeScreen.png";
import Proj3 from "../projects/CatFlix_MainScreen.png";

function ProjectsSection() {
  return (
    <section
      className="projectsSection"
      style={{
        background: `url(${TopoBG})`,
        backgroundSize: "40%",
        backgroundRepeat: "repeat",
        backgroundColor: "#02080b",
      }}
      id="skillsSection"
    >
      <div className="sectionHeadInfo">Projects</div>
      <div className="sectionHeadline">
        <span className="headlineFitter">&lt;</span>{" "}
        <span className="headlineContent">Selected Projects</span>{" "}
        <span className="headlineFitter">/&gt;</span>
      </div>
      <div className="projects">
        <div className="project-card">
          <img src={Proj1}></img>
          <div className="projectDescription">
            <p>CheckOut Screen</p>
            <span>
              The project was designed to create a smooth purchasing flow while
              keeping the interface minimal and distraction-free. It also
              includes a built-in coupon system and was structured in a way that
              allows it to be integrated into a larger e-commerce platform or
              extended into a complete shop experience.
            </span>
          </div>
          <div className="projectTools">
            <div className="projectTool">HTML</div>
            <div className="projectTool">CSS</div>
            <div className="projectTool">JavaScript</div>
          </div>
        </div>
        <div className="project-card">
          <img src={Proj2}></img>
          <div className="projectDescription">
            <p>Weather App</p>
            <span>
              An interactive weather application that delivers real-time
              forecasts through a modern and atmospheric interface. Built with
              React and the OpenWeather API, the app combines functional data
              handling with a visually engaging design. The focus of this
              project was understanding API-workflows.
            </span>
          </div>
          <div className="projectTools">
            <div className="projectTool">React</div>
            <div className="projectTool">OpenWeather API</div>
            <div className="projectTool">Figma</div>
          </div>
        </div>
        <div className="project-card">
          <img src={Proj3}></img>
          <div className="projectDescription">
            <p>CatFlix</p>
            <span>
              A streaming platform concept inspired by Netflix, reimagined with
              a humorous cat-themed twist. Built with React and Supabase, it
              also served as an opportunity to experiment with dynamic data
              handling and polished interface design.
            </span>
          </div>
          <div className="projectTools">
            <div className="projectTool">React</div>
            <div className="projectTool">SupaBase</div>
            <div className="projectTool">Figma</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;
