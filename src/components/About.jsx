import React from "react";
import suit from "../assets/meSuit.jpg"

const About = () => {
  return (
    <div id="about">
      <div className="heading">
        <p className="who">Who Am I?</p>
        <h1>About Me</h1>
      </div>

      <div className="main">

        
      <img src={suit} alt="myself"/>

        <div className="about">
            <p className="subheading">A Dedicated Front-end Web Developer</p>

            <p className="text">
                I am a highly motivated individual with a passion for web development. In the past six months, my journey in this field has been driven by self-study and practical experience, during which I have established a strong foundationin key technologies such as JavaScript, HTML, and React. I am also a team-player who value team-spirit in group projects. I believe that a harmonious working environment can enhance productivity and collective well-being. 
            </p>
        </div>

      </div>
    </div>
  );
};

export default About;
