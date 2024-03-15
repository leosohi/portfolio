import React from "react";
import cv from "../../assets/immediate.pdf";

const Intro = () => {
  return (
    <div id="intro">
      <div className="text">
        <p className="hi">Hi, I'm</p>
        <p className="name">Leo So</p>
        <p className="role one">A Determined Practitioner </p>
        <p className="role two">A Self-taught Coder </p>
        <p className="role three">A Lifelong Learner </p>
      </div>

      <div className="btnContainer">
        <a href={cv} target="_blank" alt="cv">
          <button className="cv">Resume</button>
        </a>

        <a href="#contact">
          <button className="contact">Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
