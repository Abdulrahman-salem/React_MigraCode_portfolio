import React from "react";
import "./index.scss";
import "../../assets/styles/scss/_fonts.scss";
import screen from "../../assets/images/screenshot_MigraCode_page.png"; 

const StudentsHome = () => {
  return (
    <>
      <h1>Featuring Students</h1>
      <div className="container_projects">
        <div className="project">
          <h2>Name of the Student</h2>
          <img src={screen} alt="project_photo" width="250px" />
          <h3>Projects</h3>
        </div>
        <div className="project">
          <h2>Name of the Student</h2>
          <img src={screen} alt="project_photo" width="250px" />
          <h3>Projects</h3>
        </div>
        <div className="project">
          <h2>Name of the Student</h2>
          <img src={screen} alt="project_photo" width="250px" />
          <h3>Projects</h3>
        </div>{" "}
        <div className="project">
          <h2>Name of the Student</h2>
          <img src={screen} alt="project_photo" width="250px" />
          <h3>Projects</h3>
        </div>
      </div>
    </>
  );
};

export default StudentsHome;
