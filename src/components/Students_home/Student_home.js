import React, {useEffect, useState} from "react";
import "./index.scss";
import "../../assets/styles/scss/_fonts.scss";
import axios from "axios";

const StudentHome = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
  axios
  .get("http://localhost:5000/gitusers")
  .then((response) => {
    console.log(response);
    setUserData(response.data.data)})
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
}, [])

  return (
    <>
      <h1>Our talented students</h1>
      <div className="container_projects">
        <div className="project">
          <h2>github name: {userData.login}</h2>
          <h2>github link: {userData.html_url}</h2>
          <h2>Name: {userData.name}</h2>
          <h2>Location: {userData.location}</h2>
          <h2>Name: {userData.name}</h2>
          <h2>Company: {userData.company}</h2>
          <img src={userData.avatar_url} alt="project_photo" width="250px" />
        </div>
      </div>
    </>
  );
};

export default StudentHome;
