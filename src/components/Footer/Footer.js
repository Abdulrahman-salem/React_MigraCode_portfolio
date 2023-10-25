import React from "react";
import logo from "../../assets/images/MigraCode-16.png"; 
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <main>
        <div className="logo_name">
          <img src={logo} alt="MigraCode Logo" height="60" />
          <div className="name" href="/">
            2023 MigraCode, Inc.
          </div>
        </div>

        <div className="follow">
          <a className="link" href="#home">
            barcelona@migracode.org
          </a>
          <a className="link" href="#projects">
            GitHub
          </a>
          <a className="link" href="#final_projects">
            LinkedIn
          </a>
          <a className="link" href="#final_projects">
            Instagram
          </a>
          <a className="link" href="#students">
            Facebook
          </a>
          <a className="link" href="#portfolio">
            MeetUp
          </a>
          <a className="link" href="#about">
            YouTube
          </a>
        </div>
      </main>
    </div>
  );
};

export default Footer;
