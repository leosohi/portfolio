import React from "react";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">

      <div className="text">
        <h1>Curious about me ?</h1>
        <h1 className="bye">Contact me</h1>
      </div>

        <div className="btnp">
            <p className="mail"><MdEmail size={28}/>Mantikso333@gmail.com</p>
            <p><FaSquarePhone size={28}/>+852 95883127</p>
            <p><a target="_blank" href="https://github.com/leosohi?tab=repositories"><FaGithub size={28}/>My Github Repo</a></p>
        </div>

    </div>
  );
};

export default Contact;
