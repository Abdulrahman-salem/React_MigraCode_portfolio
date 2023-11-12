import React from "react";
import logo from "../../assets/images/MigraCode-16.png";
import "./index.scss";
import { Link } from "react-router-dom";
import { resetProjectsState } from "../../redux/projects";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleResetData = () => {
    dispatch(resetProjectsState())
  }
  return (
    <section className="navBar">
      <div className="logo_name">
        <Link
          target="_blank"
          rel="noreferrer noopener"
          to="https://migracode.openculturalcenter.org/"
        >
          <img
            src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F666230843-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MRebciU3NcuLgsX3ijf%252Favatar-rectangle-1612180869136.png%3Fgeneration%3D1612180869680419%26alt%3Dmedia"
            alt="MigraCode Logo"
            height="50"
          />
          <div className="header-name" to="/">
            MigraCode Portfolio
          </div>
        </Link>
      </div>

      <div className="nav">
        <Link className="nav_link" to="/">
          Home
        </Link>
        <Link className="nav_link" to="/projects" onClick={handleResetData}>
          Projects
        </Link>
        {/* <Link className="nav_link" to="#final_projects">
          Final projects
        </Link> */}
        <Link className="nav_link" to="/students" onClick={handleResetData}>
          Students & Graduates
        </Link>
        <Link
          className="nav_link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://migracode.openculturalcenter.org/"
        >
          Official website
        </Link>
        {/* <Link className="nav_link" to="#portfolio">
          Tips
        </Link> */}
        <Link className="nav_link" to="/aboutus">
          About us
        </Link>
      </div>
      <div className="login">
        <button>Log in</button>
      </div>
    </section>
  );
};

export default NavBar;

