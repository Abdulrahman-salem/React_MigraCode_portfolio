import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/MigraCode-12.png"; 
import Button from "react-bootstrap/Button";
import "./index.scss";

const NavBar = () => {
  return (
    <>
      <Navbar
        className="navbar_main"
        sticky="top"
        bg="dark"
        expand="lg"
        variant="dark"
      >
        <div className="logo_name">
          <Navbar.Brand href="/">
            <img src={logo} alt="MigraCode Logo" height="60" />
          </Navbar.Brand>
          <Navbar.Brand className="header-name" href="/">
            MigraCode Portfolio
          </Navbar.Brand>
        </div>
        <Navbar.Toggle className="toggle-navbar" aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="nav ml-auto">
            <Nav.Link className="nav_link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav_link" href="#createportfolio">
              Projects
            </Nav.Link>
            <Nav.Link className="nav_link" href="#">
              Final projects
            </Nav.Link>
            <Nav.Link className="nav_link" href="#othersdevelopers">
              Students
            </Nav.Link>
            <Nav.Link className="nav_link" href="#helpingcommunity">
              Admin page
            </Nav.Link>
            <Nav.Link className="nav_link" href="#about">
              About
            </Nav.Link>
          </Nav>
          <div className="login_signup justify-content-start">
            <Nav.Link className="login-link" href="#">
              Log in
            </Nav.Link>
            <Button className="button" variant="secondary">
              Sign up
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
