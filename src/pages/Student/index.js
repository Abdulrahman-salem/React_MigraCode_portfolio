import React, { useRef, useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import {
    LINK_OFFICIAL_MIGRACODE_WEBSITE,
    URL_POST_CONTACT,
    URL_PORTFOLIO
} from "../../helpers/constants/endpoints";
import { postData } from "../../adapters/fetch";

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
    selectedCourse,
    gender,
    Languages,
    courseCertificate,
    graduationDate,
    topSkills,
    currentLocation
  } = state;

  //  id: record.id,
  //               createdTime: record.createdTime,
  //               fullName: record.fields["Full name"],
  //               countryOfBirth: record.fields["Country of Birth"],
  //               email: record.fields["Email address"],
  //               Languages: record.fields["Language(s)"],
  //               gender: record.fields.Gender,
  //               gitHub: record.fields["GitHub handle"],
  //               imageUrl: ``,
  //               group: record.fields.Group,
  //               LinkedIn: record.fields.LinkedIn ? record.fields.LinkedIn : "",
  //               skills: record.fields.Skills,
  //               selectedCourse: record.fields["Selected course"],
  //               comment: record.fields.Comment,
  //               courseCertificate: record.fields["Course certificate"],
  // const projects = [
  //   {
  //     project_image_link:
  //       "https://github.com/Abdulrahman-salem/React-app-Portfolio-MigraCode/blob/master/src/assets/images/Portfolio.png?raw=true",
  //     name: "Migracode",
  //     technologies_used: ["html", "js", "scss", "react"],
  //   },
  // ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Assuming you have an API endpoint to fetch student data
    const fetchStudentData = async () => {
      try {
        // Make a fetch request to your API endpoint for projects data
        const projectsResponse = await fetch(`${URL_PORTFOLIO}/${fullName}`);
        console.log(fullName);
        const projectsData = await projectsResponse.json();

        // Update the state with the fetched projects data
        setProjects(projectsData.projects);
        console.log(projectsData.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudentData();
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToContact = () => {
    contactSection.current?.scrollIntoView({ behavior: "smooth" });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let RecruiterName = e.target.elements.name.value.trim();
        let RecruiterEmail = e.target.elements.email.value.trim();
        let RecruiterMessage = e.target.elements.message.value.trim();
        if (!RecruiterName || !RecruiterEmail || !RecruiterMessage) {
            return alert("Please complete the form");
        }

        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const bodyData = {
                Student: email,
                Recruiter: RecruiterEmail,
                Name: RecruiterName,
                Message: RecruiterMessage,
            };
            const data = await postData(URL_POST_CONTACT, headers, bodyData);

            if (data) {
                // console.log(data);
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
        e.target.elements.name.value = "";
        e.target.elements.email.value = "";
        e.target.elements.message.value = "";
        
        setTimeout(() => {
          window.scrollBy({
              behavior: "smooth",
              left: 0,
              top: 0,
          });
        }, 0);
        
        return;
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
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    to={`https://github.com/${gitHub}`}
                  >
                    <img
                      className="social"
                      src={
                        require("../../assets/images/github-profile.svg")
                          .default
                      }
                      alt=""
                    />
                  </Link>
                )}
                {LinkedIn && (
                  <Link target="_blank" rel="noreferrer noopener" to={LinkedIn}>
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
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="social"
                      src={
                        require("../../assets/images/email-profile.svg").default
                      }
                      alt=""
                    />
                  </a>
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
                  Gender: {gender}
                  <br />
                  Country of birth: {countryOfBirth}
                  <br />
                  Email: {email}
                  <br />
                  Language(s): {Languages}
                  <br />
                  Current location: {currentLocation}
                  <br />
                  Graduation Date: {graduationDate}
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
          <h1>My skills</h1>
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
              {projects.map((project, index) => (
                <div className="project-main" key={index}>
                  {project.project_image_link && (
                    <img
                      className="project-img"
                      src={project.project_image_link}
                      alt=""
                    />
                  )}
                  <p className="project-name">{project.name}</p>
                  <p>{project.description}</p>
                  <Link>{project.repository_link}</Link>
                  {project.technologies_used && (
                    <div className="project-languages-container">
                      {/* <p>Technologies used</p> */}
                      {project.technologies_used.map((technology, index) => (
                        <p className="project-languages" key={index}>
                          {technology}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* certificate: {courseCertificate.url} */}
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
                    className="social-footer"
                    src={
                      require("../../assets/images/email-profile.svg").default
                    }
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