import React from "react";
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
    <footer className="footer-allpages">
      <Link
        target="_blank"
        rel="noreferrer noopener"
        to="https://migracode.openculturalcenter.org/"
      >
        <div className="logo_name">
          <img
            className="logo"
            src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F666230843-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MRebciU3NcuLgsX3ijf%252Favatar-rectangle-1612180869136.png%3Fgeneration%3D1612180869680419%26alt%3Dmedia"
            alt="MigraCode Logo"
          />
        </div>
      </Link>

      <div className="follow">
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="mailto:barcelona@migracode.org"
        >
          <img src={email} alt="email_icon" />
          <p className="text_link">barcelona@migracode.org</p>
        </Link>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://github.com/Migracode-Barcelona"
        >
          <img src={github} alt="github_icon" />
          <p className="text_link">GitHub</p>
        </Link>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://www.linkedin.com/school/migracode-barcelona/"
        >
          <img src={linkedIn} alt="LinkedIn_icon" />
          <p className="text_link">LinkedIn</p>
        </Link>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://www.instagram.com/migracodebarcelona/?hl=en"
        >
          <img src={instagram} alt="Instagram_icon" />
          <p className="text_link">Instagram</p>
        </Link>
        <Link
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          to="https://www.facebook.com/migracode"
        >
          <img src={facebook} alt="Facebook_icon" />
          <p className="text_link">Facebook</p>
        </Link>
        <div className="logo_link">
          <Link
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            to="https://www.meetup.com/migracode-barcelona/"
          >
            <img src={meetup} alt="MeetUp_icon" />
            <p className="text_link">MeetUp</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
