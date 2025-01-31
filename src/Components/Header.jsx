import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(false); // To track the active link

  const handleClick = (index) => {
    setActive(index); // Set the active link index
  };

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };


  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <h1>My Portfolio</h1>
      </div> */}
      <ul className={`navbar-links ${isMobile ? "active" : ""}`}>
        <a href="#home"><li
          className={`nav-item ${active === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}
        >
          Home
          <span className="underline"></span>
        </li></a>
        <a href="#about"><li
          className={`nav-item ${active === 1 ? 'active' : ''}`}
          onClick={() => handleClick(1)}
        >
          About
          <span className="underline"></span>
        </li></a>
        <a href="#skills"><li
          className={`nav-item ${active === 2 ? 'active' : ''}`}
          onClick={() => handleClick(2)}
        >
          Skills
          <span className="underline"></span>
        </li></a>
        <a href="#portfolio"><li
          className={`nav-item ${active === 3 ? 'active' : ''}`}
          onClick={() => handleClick(3)}
        >
          Portfolio
          <span className="underline"></span>
        </li></a>
        <a href="#contact"><li
          className={`nav-item ${active === 4 ? 'active' : ''}`}
          onClick={() => handleClick(4)}
        >
          Contact
          <span className="underline"></span>
        </li></a>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Header;
