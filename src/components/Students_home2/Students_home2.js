import React, { useEffect, useState } from "react";
import "./index.scss";
import "../../assets/styles/scss/_fonts.scss";
import screen from "../../assets/images/screenshot_MigraCode_page.png";

const StudentsHome2 = () => {
  const [studentData, setStudentData] = useState([]); // Define studentData using useState

  useEffect(() => {
    const students = ["IrynaSyvashchenko", "keithtou", "Abdulrahman-salem"];
    const userPromises = [];

    students.forEach((username) => {
      const userPromise = fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: "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", // Replace with your GitHub Personal Access Token
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`GitHub API request failed for ${username}: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then((userData) => {
          userPromises.push(userData);
        })
        .catch((error) => {
          console.error(`Error fetching GitHub data for ${username}:`, error);
        });
    });

    Promise.all(userPromises)
      .then((userDataArray) => {
        // All student data has been fetched and processed
        setStudentData(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data for one or more students:", error);
      });
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h1>Featuring Students</h1>
      <ul>
        {studentData.map((student) => (
          <li key={student.login}>
            <img src={student.avatar_url} alt={student.login} />
            <a href={student.html_url} target="_blank" rel="noopener noreferrer">
              {student.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsHome2;
