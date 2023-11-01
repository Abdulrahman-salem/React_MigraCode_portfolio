import React from "react";
import logo from "../../assets/images/MigraCode-16.png"; 
import "./index.scss";

const NavBar = () => {
  return (
    <section className="navBar">
      <div className="logo_name">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://migracode.openculturalcenter.org/"
        >
          <img src={logo} alt="MigraCode Logo" height="60" />
          <div className="header-name" href="/">
            MigraCode Portfolio
          </div>
        </a>
      </div>

      <div className="nav">
        <a className="nav_link" href="/">
          Home
        </a>
        <a className="nav_link" href="/projects">
          Projects
        </a>
        {/* <a className="nav_link" href="#final_projects">
          Final projects
        </a> */}
        <a className="nav_link" href="#students">
          Students & Graduates
        </a>
        <a
          className="nav_link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://migracode.openculturalcenter.org/"
        >
          Official website
        </a>
        {/* <a className="nav_link" href="#portfolio">
          Tips
        </a>
        <a className="nav_link" href="#about">
          About
        </a> */}
      </div>
      <div className="login">
        <button>Log in</button>
      </div>
    </section>
  );
};

export default NavBar;
