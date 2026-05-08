import "./ProgressNav.css";

function ProgressNav() {
  return (
    <div className="progressbar">
      <span className="startFont">Start</span>
      <div className="progressDivider" />
      <div className="timeLineFitter">
        <div className="timeLine" />
        <div className="pointHome">
          <div className="point" />
          <span>Home</span>
        </div>
        <div className="segmentLine" id="line-home" />
        <div className="pointSkills">
          <div className="point" />
          <span>Skills</span>
        </div>
        <div className="segmentLine" id="line-skills" />
        <div className="pointAbout">
          <div className="point" />
          <span>About</span>
        </div>
        <div className="segmentLine" id="line-about" />
        <div className="pointProjects">
          <div className="point" />
          <span>Projects</span>
        </div>
        <div className="segmentLine" id="line-projects" />
        <div className="pointContact">
          <div className="point" />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressNav;
