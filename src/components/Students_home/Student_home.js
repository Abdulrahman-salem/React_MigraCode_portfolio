import React, {useEffect, useState} from "react";
import "./index.scss";
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
    <div className="students">
      <h1>Our talented students</h1>
      <main>
        <div className="container_students">
          <div className="student">
            <p>Github name: {userData.login}</p>
            <p>Github link: {userData.html_url}</p>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Location: {userData.location}</p>
            <p>Company: {userData.company}</p>
            <p>Bio: {userData.bio}</p>
            <img src={userData.avatar_url} alt="project_photo" width="250px" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentHome;
