import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const hamRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const clickHamburger = () => {
    setOpenMenu(!openMenu);
  };
  
  // click outside logic
  useEffect(() => {
    let clickSth = (e) => {
      if (!hamRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", clickSth);

    return () => {
      document.removeEventListener("mousedown", clickSth)
    }
  });

  // changeNav color
  const changeNav = () => {
    window.scrollY >= 120 ? setNav(true) : setNav(false)
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div className={nav ? "navBar scroll" : "navBar"}>
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

      <div className="dropDown" onClick={clickHamburger} ref={hamRef}>
        <GiHamburgerMenu size={38} className={nav ? "burgerB" : ""}/>


          <div className={openMenu ? "list open" : "list"}>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={10}
              onClick={clickHamburger}
            >
              About
            </Link>
            <Link
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-45}
              duration={10}
              onClick={clickHamburger}
            >
              Skills
            </Link>
            <Link
              to="work"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
              onClick={clickHamburger}
            >
              Work
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={10}
              onClick={clickHamburger}
            >
              Contact
            </Link>
          </div>

      </div>
    </div>
  );
};

export default Nav;
