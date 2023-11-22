import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import JwtContext from "./components/JwtContext";
import Home from "./pages/Home/Home";
// import { AdminPage } from "./pages/Admin";
import Projects from "./pages/Projects";
import Project from "./pages/project";
import Students from "./pages/Students";
import Student from "./pages/Student";

// import React, { useEffect } from "react";
// import { getData } from "./adapters/fetch";
// import { URL_PROJECTS } from "./helpers/constants/endpoints";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     firstFetchedProjects,
//     fetchingProjects,
//     resetProjectsState,
// } from "./redux/projects";

function App() {
  // // to read redux projects state
  // const { projectsState } = useSelector((store) => store);

  // // to set redux state
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     // fetchingProjects is before starting fetching data because of loader
  //     dispatch(fetchingProjects({}));
  //     if (projectsState.projects.length === 0) {
  //         async function fetchData(fetchRequirement) {
  //             const { url } = fetchRequirement;
  //             try {
  //                 const data = await getData(url);
  //                 if (data) {
  //                     // console.log(data);
  //                     data.items.forEach((project) => {
  //                         if (project.project_image_link.length === 0) {
  //                             project.project_image_link =
  //                                 require("./assets/images/default_project_img.svg").default;
  //                         }
  //                     });
  //                     // to set first fetching
  //                     dispatch(
  //                         firstFetchedProjects({
  //                             projects: [...data.items],
  //                             nextPage: data.nextpage
  //                                 ? data.nextpage.toString()
  //                                 : "",
  //                         })
  //                     );
  //                 }
  //             } catch (error) {
  //                 console.log(error.message);
  //             }
  //         }
  //         fetchData({ url: URL_PROJECTS });
  //         // to reset projects State before going to Projects page
  //         dispatch(resetProjectsState());
  //     }
  // }, []);

  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("login=")); // replace with logic for checking login cookie
  const jwt = cookie ? cookie?.split("=")[1] : null;

  const [currentUserJwt, setCurrentUserJwt] = useState(jwt);
  const jwtContext = { currentUserJwt, setCurrentUserJwt };

  return (
    <JwtContext.Provider value={jwtContext}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student" element={<Student />} />
        {/* <Route path="/admin/*" element={<AdminPage />} /> */}
      </Routes>
    </JwtContext.Provider>
  );
}
export default App;
