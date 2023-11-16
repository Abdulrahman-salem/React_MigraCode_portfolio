import React, { useRef, useState } from "react";
import "./index.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LINK_OFFICIAL_MIGRACODE_WEBSITE } from "../../helpers/constants/endpoints";

function Student() {
  const contactSection = useRef();

  const { state } = useLocation();
  console.log(state);
  // Languages, courseCertificate, gender, group, selectedCourse
  const {
    LinkedIn,
    gitHub,
    email,
    fullName,
    imageUrl,
    comment,
    countryOfBirth,
    // id,
    skills = [],
  } = state;
  // const { projects } = state;

  const projects = [
    {
      project_image_link: require("../../assets/images/Screenshot_6.png"),
      name: "hello",
      technologies_used: ["html", "js", "scss", "react"],
    },
  ];

  const handleNavigateToContact = () => {
    contactSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Form submitted:",
      "name: " + e.target.elements.name.value,
      "email: " + e.target.elements.email.value,
      "message: " + e.target.elements.message.value
    );
  };
  return (
    <div className="student">
      <div className="background-img">
        <header>
          <div className="section1">
            <div className="name">
              <Link to={LINK_OFFICIAL_MIGRACODE_WEBSITE}>
                <img
                  className="web-name"
                  src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1785193790-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MRVzxrxQhk2sxc6UAyx%252Favatar-rectangle-1613405272523.png%3Fgeneration%3D1613405273168456%26alt%3Dmedia"
                  alt=""
                />
              </Link>
            </div>
            <div className="social-media">
              {gitHub && (
                <Link to={`https://github.com/${gitHub}`}>
                  <img
                    className="social"
                    src={
                      require("../../assets/images/github-profile.svg").default
                    }
                    alt=""
                  />
                </Link>
              )}
              {LinkedIn && (
                <Link to={LinkedIn}>
                  <img
                    className="social"
                    src={
                      require("../../assets/images/linkedin-profile.svg")
                        .default
                    }
                    alt=""
                  />
                </Link>
              )}
              {email && (
                <Link to={email}>
                  <img
                    className="social"
                    src={
                      require("../../assets/images/email-profile.svg").default
                    }
                    alt=""
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="main-header">
            <div className="section2">
              <p className="main-p">
                Nice To Meet You! <br />
                I'm <span>{fullName}</span>.
              </p>
              <p className="second-p">
                Based in {countryOfBirth}
                <br />
                Migracode comment: {comment}
              </p>
              <button
                className="contact-me-btn"
                onClick={handleNavigateToContact}
              >
                Contact Me
              </button>
            </div>

            <img className="profile-img" alt="" src={imageUrl} />
          </div>
        </header>
      </div>

      <main>
        <div className="skills">
          {skills.map((skill, index) => (
            <p className="languages" key={index}>
              {skill}
            </p>
          ))}
        </div>

        {projects && projects.length > 0 && (
          <div className="projects">
            <p className="project-header">Projects</p>
            {projects.map((project) => (
              <div className="project-main" key={project.id}>
                {project.project_image_link && (
                  <img
                    className="project-img"
                    src={project.project_image_link}
                    alt=""
                  />
                )}
                <p className="project-name">{project.name}</p>
                {project.technologies_used && (
                  <div className="project-languages-container">
                    {project.technologies_used.map((technology) => (
                      <p className="project-languages">{technology}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
      <footer className="profile-footer">
        <div className="contact" ref={contactSection}>
          <div className="contact-info">
            <p className="contact-header">Contact</p>
            <p className="contact-details">
              I would love to hear about your project and how I could help.{" "}
              <br />
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="container">
            <div className="contact-box">
              <div className="left"></div>
              <div className="right">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="field"
                    placeholder="Your Name"
                    name="name"
                  />
                  <input
                    type="email"
                    className="field"
                    placeholder="Your Email"
                    name="email"
                  />
                  <textarea
                    className="field"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                  <button type="submit" className="send-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-media">
          <div className="name">
            <img
              className="web-name"
              src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1785193790-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MRVzxrxQhk2sxc6UAyx%252Favatar-rectangle-1613405272523.png%3Fgeneration%3D1613405273168456%26alt%3Dmedia"
              alt=""
            />
          </div>
          <div className="social-media">
            {gitHub && (
              <Link to={`https://github.com/${gitHub}`}>
                <img
                  className="social-footer"
                  src={
                    require("../../assets/images/github-profile.svg").default
                  }
                  alt=""
                />
              </Link>
            )}
            {LinkedIn && (
              <Link to={LinkedIn}>
                <img
                  className="social-footer"
                  src={
                    require("../../assets/images/linkedin-profile.svg").default
                  }
                  alt=""
                />
              </Link>
            )}
            {email && (
              <Link to={email}>
                <img
                  className="social-footer"
                  src={require("../../assets/images/email-profile.svg").default}
                  alt=""
                />
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Student;

// useEffect(() => {
//     setAllData({
//         students:
//     });
// }, []);
