import React from "react";
import demo from "../assets/burger.png";
import mel from "../assets/mel.png"
import snake from "../assets/snake.png"
import { FaGithub } from "react-icons/fa";
import { RiSlideshow3Line } from "react-icons/ri";

const Work = () => {
  const newPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="work">
      <div className="header">
        <p>What I do?</p>
        <h1>My Work</h1>
      </div>

      <div className="main">
        <div className="row">
          <div className="col">
            <img src={demo} alt="demo" />

            <p>Deliveroo Clone</p>

            <div className="btnp">

              <button className="git" onClick={()=>newPage("https://github.com/leosohi/clone")}>
                <FaGithub size={21} />
              </button>

              <button className="live" onClick={()=>newPage("https://65f311b937ffb2ea308e3c22--joyful-rugelach-01a2cc.netlify.app/#/")}>
                <RiSlideshow3Line size={24} />
              </button>

            </div>
          </div>
          <div className="col">
            <img src={mel} alt="demo" />

            <p>Traveling Website</p>

            <div className="btnp">

              <button className="git" onClick={()=>newPage("https://github.com/leosohi/Melbourne-Travel-Website")}>
                <FaGithub size={21} />
              </button>

              <button className="live" onClick={()=>newPage("https://cheery-griffin-1f6677.netlify.app/")}>
                <RiSlideshow3Line size={24} />
              </button>
            </div>
          </div>
          <div className="col">
            <img src={snake} alt="demo" />

            <p>Snake Game</p>
            
            <div className="btnp">

              <button className="git" onClick={()=>newPage("https://github.com/leosohi/Snake-game")}>
                <FaGithub size={21} />
              </button>

              <button className="live" onClick={()=>newPage("https://65f30e30f1c7da767aacc203--reliable-granita-95721f.netlify.app/")}>
                <RiSlideshow3Line size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
