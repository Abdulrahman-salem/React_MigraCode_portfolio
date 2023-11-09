import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Description from "../../components/Description_home/Description_home";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer/Footer";
import { useStudentContext } from "../../components/StudentData";
import { useProjectContext } from "../../components/ProjectData";
import "./index.scss";
import group_photo from "../../assets/images/Screenshot_6.png";
// import photo from "../../assets/images/group_photo.jpg";
import {
  QUERY_FILTER_PROJECTS,
  QUERY_FILTER_PROJECTS_BY_A_TO_Z,
  QUERY_FILTER_PROJECTS_BY_Z_TO_A,
  QUERY_TO_FETCH_NEXT_PAGE_PROJECTS,
  URL_PROJECTS,
} from "../../helpers/constants/endpoints";
import { getData } from "../../adapters/fetch";

function Home() {
  //   const { allData } = useStudentContext();
  //   const { projectData } = useProjectContext();

  // console.log("Data in Home: ", allData);
  // console.log("ProjectData in Home: ", projectData);

  //   const filteredStudents = allData.students.slice(0, 3);
  const [projectData, setProjectData] = useState({
    projects: [],
    nextPage: "",
  });

  const [filteredProjectsData, setFilteredProjectsData] = useState();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAllDataFetched, setAllDataFetched] = useState(false);

  async function fetchData(fetchRequirement) {
    const { url } = fetchRequirement;
    try {
      const data = await getData(url);

      if (data) {
        console.log("fetch", data);
        data.items.forEach((project) => {
          if (project.project_image_link.length === 0) {
            project.project_image_link =
              require("../../assets/images/default_project_img.svg").default;
          }
        });
        const filterData = data.items.slice(0, 2);
        setFilteredProjectsData(filterData);
        setCurrentIndex(currentIndex + 2);
        setProjectData({
          projects: [...projectData.projects, ...data.items],
          nextPage: data.nextpage ? data.nextpage.toString() : "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // first load fetch
  useEffect(() => {
    fetchData({ url: URL_PROJECTS });
  }, []);

  //  let filteredProjects = projectData.projects.slice(0, 2);
  //  console.log(filteredProjects)

  // on click load more btn
  const handleOnLoadMoreData = async (e) => {
    console.log("button", filteredProjectsData);
    if (currentIndex % 6 === 0 && !isAllDataFetched) {
      await fetchData({
        url: `${URL_PROJECTS}?${
          QUERY_TO_FETCH_NEXT_PAGE_PROJECTS + projectData.nextPage
        }`,
      });
      return;
    }

    const newProjectsData = projectData.projects.slice(
      currentIndex,
      currentIndex + 2
    );
    setFilteredProjectsData(newProjectsData);
    if (newProjectsData.length > 1) {
      setCurrentIndex(currentIndex + 2);
    } else {
      setCurrentIndex(0);
      setAllDataFetched(true);
    }
  };

  // useEffect(() => {
  //   setProjectData({
  //     ...projectData,
  //     projects: [
  //       {
  //         name: "Project 1",
  //         description:
  //           "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
  //         project_image_link: require("../../assets/images/Screenshot_6.png"),
  //       },
  //       {
  //         name: "OCCycling",
  //         description:
  //           "A platform to manage the free bicycle provision service given by OCC in a refugee camp in Greece to allow them to go to the city",
  //         repository_link: "https://github.com/hheiress/OCCycling",
  //         live_demo_link: "https://github.com",
  //         project_image_link:
  //           "https://666230843-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MRebciU3NcuLgsX3ijf%2F-MVb5XncnoYEToFic_k6%2F-MVbCGfSvh7L9-UlBmjZ%2FfpTeam3.PNG?alt=media&token=7c35f842-d59d-45da-a178-c6bbc3b8993f",
  //         technologies_used: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "React.js",
  //           "Database(SQL)",
  //         ],
  //         instructors_names: ["Nandan Rao"],
  //         team_member_names: [
  //           "Diana Dashkovska (TL)",
  //           "José Arriaga",
  //           "Anny Gómez",
  //           "Gustavo Rossini",
  //         ],
  //         team_member_roles: [
  //           "Team leader: Diana Dashkovska",
  //           "Fullstack developer: Anny Gómez",
  //           "Frontend developer: José Arriaga",
  //           "Backend developer: Gustavo Rossini",
  //           "Designer: Diana Dashkovska",
  //         ],
  //         trello_link: "Trello link 10",
  //         product_presentation_link:
  //           "https://docs.google.com/document/d/1SOLHVUsEQX-OH8T2z_OXfwbBM1-DUXOdQWbSjgCI_WM/edit#heading=h.zi8nw4t10oa6",
  //       },

  //     ],
  //   });
  // }, []);

  return (
    <div className="home">
      <NavBar />
      <div className="main">
        <div className="description">
          <div className="description_text">
            <h1>Migracode - Connecting Dreams to Code</h1>
            <img src={group_photo} alt="group_photo" height="350px" />
            <p>
              Migracode acts as a bridge between the demand for skilled people
              in the tech sector and people with a migration background who are
              eager to work in the tech industry. Founded in 2019, we are
              cooperating with other code schools in Europe to build a large
              community of companies and students to foster both labor
              integration as well as social inclusion.
            </p>
            <button className="button">Go to projects</button>
          </div>
        </div>
        <div className="project_student">
          {console.log(projectData.projects)}
          <h1>Projects made with love</h1>
          {projectData.projects?.length > 0 && (
            <div className="projects_home">
              {console.log(projectData.projects)}
              <Cards allData={filteredProjectsData} onClickGoTo="/projects" />
              <button className="button" onClick={handleOnLoadMoreData}>
                Show next
              </button>
            </div>
          )}

          <h1>Our students</h1>
          <div className="students_home">
            {/* <Cards allData={projectData.items} onClickGoTo="/students" /> */}
            <button className="button">More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
