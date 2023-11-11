import React from "react";
import logo from "../../assets/images/MigraCode-16.png";
import "./index.scss";
import facebook from "../../assets/images/facebook-svgrepo-com.svg";
import email from "../../assets/images/email-1-svgrepo-com.svg";
import instagram from "../../assets/images/instagram-167-svgrepo-com.svg";
import github from "../../assets/images/github-142-svgrepo-com.svg";
import meetup from "../../assets/images/meetup-svgrepo-com (1).svg";
import linkedIn from "../../assets/images/linkedin-rounded-border-svgrepo-com.svg";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        to="https://migracode.openculturalcenter.org/"
      >
        <div className="logo_name">
          <img
            src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F666230843-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MRebciU3NcuLgsX3ijf%252Favatar-rectangle-1612180869136.png%3Fgeneration%3D1612180869680419%26alt%3Dmedia"
            alt="MigraCode Logo"
            height="50"
          />
          <h1 className="name">2023 MigraCode, Inc.</h1>
        </div>
      </Link>

      <div className="follow">
        <div className="link" href="#home">
          <img src={email} alt="email_icon" />
          barcelona@migracode.org
        </div>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://github.com/Migracode-Barcelona"
        >
          <img src={github} alt="github_icon" />
          GitHub
        </Link>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://www.linkedin.com/school/migracode-barcelona/"
        >
          <img src={linkedIn} alt="LinkedIn_icon" />
          LinkedIn
        </Link>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://www.instagram.com/migracodebarcelona/?hl=en"
        >
          <img src={instagram} alt="Instagram_icon" />
          Instagram
        </Link>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://www.facebook.com/migracode"
        >
          <img src={facebook} alt="Facebook_icon" />
          Facebook
        </Link>
        <div className="logo_link">
          <Link
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            to="https://www.meetup.com/migracode-barcelona/"
          >
            <img src={meetup} alt="MeetUp_icon" />
            MeetUp
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
