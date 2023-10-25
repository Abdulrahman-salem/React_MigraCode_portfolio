import React, {useEffect, useState} from "react";
import "./index.scss";
import screen from "../../assets/images/screenshot_MigraCode_page.png"; 
import axios from "axios";

const ProjectsHome = () => {
 const [userData, setUserData] = useState({});
 useEffect(() => {
   axios
     .get("http://localhost:5000/projects")
     .then((response) => {
       console.log(response);
       setUserData(response.data.data);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 }, []);
  return (
    <div className="projects">
      <h1>Projects made with love</h1>
      <main>
        <div className="container_projects">
          <div className="project">
            <p>Name of project: {userData.name}</p>
            <p>Description: {userData.description}</p>
            <p>Github url: {userData.html_url}</p>
            <p>Language: {userData.language}</p>
            <img src={screen} alt="project_photo" width="500px" />
            <h3>Students</h3>
          </div>
          {/* <div className="project">
          <h2>Name of project</h2>
          <img src={screen} alt="project_photo" width="250px" />
          <h3>Students</h3>
        </div>
        <div className="project">
          <h2>Name of project</h2>
          <img src={screen} alt="project_photo" width="250px" />
          <h3>Students</h3>
        </div>{" "}
        <div className="project">
          <h2>Name of project</h2>
          <img src={screen} alt="project_photo" width="250px" />
          <h3>Students</h3>
        </div> */}
        </div>
      </main>
    </div>
  );
};

export default ProjectsHome;
