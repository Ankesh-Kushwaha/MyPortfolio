import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactimg from '../../assets/contact.png'
import Menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="dektopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>

        <a href="/path-to-resume" className="desktopMenuListItem">
          Resume
        </a>
        
      </div>
      <button
        className="desktopMenuButton"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactimg} alt="" className="desktopMenuImage" />
        Contact Me
      </button>

      <img
        src={Menu}
        alt="Menu"
        className="MobMenu"
        onClick={() => {
          setMenu(!showMenu);
        }}
      />
      <div className="NavMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => {
            setMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => {
            setMenu(false);
          }}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="ListItem"
          onClick={() => {
            setMenu(false);
          }}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="ListItem"
          onClick={() => {
            setMenu(false);
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;