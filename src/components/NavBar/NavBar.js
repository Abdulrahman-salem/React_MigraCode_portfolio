import React, { useContext, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { resetProjectsState } from "../../redux/projects";
import { useDispatch } from "react-redux";
import { resetStudentsState } from "../../redux/students";
import { JwtContext } from "../JwtContext";

const Navbar = () => {
  const { currentUserJwt, setCurrentUserJwt } = useContext(JwtContext);

  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleResetStudentsData = () => {
    dispatch(resetStudentsState());
  };

  const handleResetProjectsData = () => {
    dispatch(resetProjectsState());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    setCurrentUserJwt(null);
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="logo-name">
        <Link to="/">
          <img
            src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F666230843-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MRebciU3NcuLgsX3ijf%252Favatar-rectangle-1612180869136.png%3Fgeneration%3D1612180869680419%26alt%3Dmedia"
            alt="Logo"
            width="auto" height="auto" loading="eager" title="Migracode"
          />
        </Link>
      </div>

      <div className={`nav ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link
          to="/projects"
          className="nav-link"
          onClick={() => {
            handleResetProjectsData();
            toggleMobileMenu();
          }}
        >
          Projects
        </Link>
        <Link
          to="/students"
          className="nav-link"
          onClick={handleResetStudentsData}
        >
          Students & Graduates
        </Link>
        <a
          href="https://migracode.openculturalcenter.org/"
          target="_blank"
          rel="noreferrer noopener"
          className="nav-link"
        >
          Official website
        </a>
        {currentUserJwt?.length > 0 && (
          <button className="btn-logout slide-right2" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </button>
        )}
      </div>

      <div className="burger-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
