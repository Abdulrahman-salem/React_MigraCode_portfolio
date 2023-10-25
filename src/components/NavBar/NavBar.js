import React from "react";
import logo from "../../assets/images/MigraCode-16.png"; 
import "./index.scss";

const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        <div className="logo_name">
          <img src={logo} alt="MigraCode Logo" height="60" />
          <div className="header-name" href="/">
            MigraCode Portfolio
          </div>
        </div>

        <div className="nav">
          <a className="nav_link" href="#home">
            Home
          </a>
          <a className="nav_link" href="#projects">
            Projects
          </a>
          <a className="nav_link" href="#final_projects">
            Final projects
          </a>
          <a className="nav_link" href="#students">
            Students
          </a>
          <a className="nav_link" href="#portfolio">
            Portfolio
          </a>
          <a className="nav_link" href="#portfolio">
            Tips
          </a>
          <a className="nav_link" href="#about">
            About
          </a>
        </div>
        <div className="login">
          <button>Log in</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
