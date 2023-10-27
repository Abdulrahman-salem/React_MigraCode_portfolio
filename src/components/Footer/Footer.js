import React from "react";
import logo from "../../assets/images/MigraCode-16.png";
import "./index.scss";
import facebook from "../../assets/images/facebook-svgrepo-com.svg";
import email from "../../assets/images/email-1-svgrepo-com.svg";
import instagram from "../../assets/images/instagram-167-svgrepo-com.svg";
import github from "../../assets/images/github-142-svgrepo-com.svg";
import meetup from "../../assets/images/meetup-svgrepo-com (1).svg";
import linkedIn from "../../assets/images/linkedin-rounded-border-svgrepo-com.svg";
// import youtube from "../../assets/images/twitter-x-seeklogo.com-4.svg";


const Footer = () => {
  return (
    <footer>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://migracode.openculturalcenter.org/"
      >
        <div className="logo_name">
          <img src={logo} alt="MigraCode Logo" height="60" />
          <h1 className="name">2023 MigraCode, Inc.</h1>
        </div>
      </a>

      <div className="follow">
        <a className="link" href="#home">
          <img src={email} alt="email_icon" />
          barcelona@migracode.org
        </a>
        <a
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/Migracode-Barcelona"
        >
          <img src={github} alt="github_icon" />
          GitHub
        </a>
        <a
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/school/migracode-barcelona/"
        >
          <img src={linkedIn} alt="LinkedIn_icon" />
          LinkedIn
        </a>
        <a
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/migracodebarcelona/?hl=en"
        >
          <img src={instagram} alt="Instagram_icon" />
          Instagram
        </a>
        <a
          className="link"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/migracode"
        >
          <img src={facebook} alt="Facebook_icon" />
          Facebook
        </a>
        <div className="logo_link">
          <a
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.meetup.com/migracode-barcelona/"
          >
            <img src={meetup} alt="MeetUp_icon" />
            MeetUp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
