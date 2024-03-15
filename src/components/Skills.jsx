import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="header">
        <p className="why">Why am I?</p>
        <h1 className="sk">My Skills</h1>
      </div>

      <div className="row">
        <div className="col">
          <h2>Front-end</h2>
          <p>HTML</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "92%" }}></div>
          </div>
          <p>CSS/SCSS</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "90%" }}></div>
          </div>
          <p>JavaScript</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
          <p>React</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="84"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
          <p>BootStrap</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="col">
          <h2>Back-end</h2>
          <p>Node.js</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "55%" }}></div>
          </div>
          <p>Git</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "55%" }}></div>
          </div>
          <p>MongoDB</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "50%" }}></div>
          </div>

          <p>MySQL</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "35%" }}></div>
          </div>

        </div>

        <div className="col">
          <h2>Soft Skills</h2>
          <p>Determination</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "90%" }}></div>
          </div>
          <p>Decision Making</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "85%" }}></div>
          </div>
          <p>Organization Skills</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
          <p>Interpersonal Skills</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
