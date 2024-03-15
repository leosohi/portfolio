import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const hamMenu = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const clickHamburger = () => {
    setOpenMenu(!openMenu);
  };

  const clickEmpty = (e) => {
    setOpenMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickEmpty);

    return () => {
      document.removeEventListener("mousedown", clickEmpty);
    };
  }, [openMenu]);

  return (
    <div className="navBar">
      <div className="logo">
        <a href="#">Leo So</a>
      </div>

      <ul className="navList">
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={10}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={10}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={10}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-65}
            duration={10}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="dropDown" onClick={clickHamburger}>
        <GiHamburgerMenu size={38} />

        {openMenu && (
          <div className="list" ref={hamMenu}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;