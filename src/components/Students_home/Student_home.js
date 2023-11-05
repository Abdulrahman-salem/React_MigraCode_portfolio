// import React, {useEffect, useState} from "react";
// import "./index.scss";
// import axios from "axios";
// import Students from "../../pages/Students";

// const StudentHome = () => {
//   const [userData, setUserData] = useState({});
//   useEffect(() => {
//   axios
//   .get("http://localhost:5000/gitusers")
//   .then((response) => {
//     console.log(response);
//     setUserData(response.data.data)})
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   })
// }, [])

//   return (
//     <div className="students">
//       <h1>Our talented students</h1>
//       <main>
//         {/* <Students/> */}
//         <div className="container_students">
//           <div className="student">
//             <p>Github name: {userData.login}</p>
//             <p>Github link: {userData.html_url}</p>
//             <p>Name: {userData.name}</p>
//             <p>Email: {userData.email}</p>
//             <p>Location: {userData.location}</p>
//             <p>Company: {userData.company}</p>
//             <p>Bio: {userData.bio}</p>
//             <img src={userData.avatar_url} alt="project_photo" width="250px" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default StudentHome;

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
import { getData } from "../../adapters/fetch";
import LoadMoreButton from "../../components/LoadMoreButton";
import Footer from "../../components/Footer/Footer";
import {
  URL_STUDENTS,
  QUERY_TO_FETCH_NEXT_PAGE_STUDENTS,
  QUERY_FILTER_STUDENTS_BY_A_TO_Z,
  QUERY_FILTER_STUDENTS_BY_Z_TO_A,
} from "../../helpers/constants/endpoints";

function StudentHome() {
  const [allData, setAllData] = useState({
    students: [],
    offSet: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(
          URL_STUDENTS +
            "?" +
            QUERY_TO_FETCH_NEXT_PAGE_STUDENTS +
            allData.offSet
        );
        if (data) {
          data.values.forEach((student) => {
            console.log(student);
            if (student.imageUrl.length === 0) {
              student.imageUrl =
                require("../../assets/images/person_image.svg").default;
            }
          });
          setAllData({
            students: [...allData.students, ...data.values],
            offSet: data.offSet,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (allData.students.length === 0) {
      fetchData();
    }
  }, [allData.students, allData.offSet]);

  const filteredStudents = allData.students.slice(0, 3);

return (
  <div className="students">
    {filteredStudents.length > 0 ? (
      <main>
        {console.debug(filteredStudents)}
        {console.log(allData.offSet)}
        <Cards allData={filteredStudents} onClickGoTo="/student" />
      </main>
    ) : null}
  </div>
);
}

export default StudentHome;
