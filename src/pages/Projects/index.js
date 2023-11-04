import React, { useEffect, useState } from "react";
import { getData } from "../../adapters/fetch";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
import LoadMoreButton from "../../components/LoadMoreButton";
import Footer from "../../components/Footer/Footer";
import {
    QUERY_FILTER_PROJECTS,
    QUERY_FILTER_PROJECTS_BY_A_TO_Z,
    QUERY_FILTER_PROJECTS_BY_Z_TO_A,
    QUERY_TO_FETCH_NEXT_PAGE_PROJECTS,
    URL_PROJECTS,
} from "../../helpers/constants/endpoints";

function Projects() {
    // this state to know witch filter is used during LoadMore projects
    const [queryFilterData, setQueryFilterData] = useState("");
    // this state to know on the first fetching projects with filter. It's set to true. so on the first fetch with a filter will set new data to projectData in order not to be added to the old data
    const [firstFetchNewFilter, setFirstFetchNewFilter] = useState(true);

    const [projectData, setProjectData] = useState({
        projects: [],
        nextPage: "",
    });

    // async function fetchData(url) {
    async function fetchData(fetchRequirement) {
        const { url, isFetchWithFilter = false } = fetchRequirement;
        try {
            const data = await getData(url);
            if (data) {
                console.log(data);
                data.items.forEach((project) => {
                    if (project.project_image_link.length === 0) {
                        project.project_image_link =
                            require("../../assets/images/default_project_img.svg").default;
                    }
                });
                if (isFetchWithFilter) {
                    setProjectData({
                        projects: [...data.items],
                        nextPage: firstFetchNewFilter
                            ? data.nextpage.toString()
                            : data.nextpage
                            ? data.nextpage.toString()
                            : "",
                    });
                    setFirstFetchNewFilter(false);
                } else {
                    setProjectData({
                        projects: [...projectData.projects, ...data.items],
                        nextPage: data.nextpage ? data.nextpage.toString() : "",
                    });
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // first load fetch
    useEffect(() => {
        if (projectData.projects.length === 0) {
            fetchData({ url: URL_PROJECTS });
        }
    }, []);

    // on click load more btn
    const handleOnLoadMoreProjects = async (e) => {
        if (projectData.nextPage.length === 0) {
            return;
        }

        await fetchData({
            url: `${URL_PROJECTS}?${
                QUERY_TO_FETCH_NEXT_PAGE_PROJECTS + projectData.nextPage
            }&${queryFilterData ? queryFilterData : ""}`,
        });
    };

    // on click one of the filter options btn
    const handleOnClickFilterOption = async (e) => {
        switch (e.target.value) {
            // case 1
            case "a-z":
                setQueryFilterData(
                    QUERY_FILTER_PROJECTS +
                        "=" +
                        QUERY_FILTER_PROJECTS_BY_A_TO_Z
                );
                await fetchData({
                    url: `${URL_PROJECTS}?${QUERY_FILTER_PROJECTS}=${QUERY_FILTER_PROJECTS_BY_A_TO_Z}`,
                    isFetchWithFilter: true,
                });
                break;

            // case 2
            case "z-a":
                setQueryFilterData(
                    QUERY_FILTER_PROJECTS +
                        "=" +
                        QUERY_FILTER_PROJECTS_BY_Z_TO_A
                );
                await fetchData({
                    url: `${URL_PROJECTS}?${QUERY_FILTER_PROJECTS}=${QUERY_FILTER_PROJECTS_BY_Z_TO_A}`,
                    isFetchWithFilter: true,
                });
                break;

            default:
                break;
        }
        return;
    };

    return (
        <div className="projects">
            <header>
                <NavBar />
            </header>
            {projectData.projects?.length > 0 && (
                <main>
                    <Filter>
                        <button
                            value={"a-z"}
                            onClick={handleOnClickFilterOption}
                        >
                            A - Z
                        </button>
                        <button
                            value={"z-a"}
                            onClick={handleOnClickFilterOption}
                        >
                            Z - A
                        </button>
                    </Filter>

                    <Cards
                        allData={projectData.projects}
                        onClickGoTo={"/project"}
                    />
                    <LoadMoreButton
                        showLoadMore={projectData.nextPage}
                        onClick={handleOnLoadMoreProjects}
                    />
                </main>
            )}
            <Footer />
        </div>
    );
}

export default Projects;

// function Projects() {
//     const [projectData, setProjectData] = useState({
//         projects: [],
//         nextPage: "",
//     });

//     useEffect(() => {
//         setProjectData({
//             ...projectData,
//             projects: [
//                 {
//                     name: "Project 1",
//                     description:
//                         "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
//                     project_image_link: require("../../assets/images/Screenshot_6.png"),
//                 },
//                 {
//                     name: "OCCycling",
//                     description:
//                         "A platform to manage the free bicycle provision service given by OCC in a refugee camp in Greece to allow them to go to the city",
//                     repository_link: "https://github.com/hheiress/OCCycling",
//                     live_demo_link: "https://github.com",
//                     project_image_link:
//                         "https://666230843-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MRebciU3NcuLgsX3ijf%2F-MVb5XncnoYEToFic_k6%2F-MVbCGfSvh7L9-UlBmjZ%2FfpTeam3.PNG?alt=media&token=7c35f842-d59d-45da-a178-c6bbc3b8993f",
//                     technologies_used: [
//                         "HTML",
//                         "CSS",
//                         "JavaScript",
//                         "React.js",
//                         "Database(SQL)",
//                     ],
//                     instructors_names: ["Nandan Rao"],
//                     team_member_names: [
//                         "Diana Dashkovska (TL)",
//                         "José Arriaga",
//                         "Anny Gómez",
//                         "Gustavo Rossini",
//                     ],
//                     team_member_roles: [
//                         "Team leader: Diana Dashkovska",
//                         "Fullstack developer: Anny Gómez",
//                         "Frontend developer: José Arriaga",
//                         "Backend developer: Gustavo Rossini",
//                         "Designer: Diana Dashkovska",
//                     ],
//                     trello_link: "Trello link 10",
//                     product_presentation_link:
//                         "https://docs.google.com/document/d/1SOLHVUsEQX-OH8T2z_OXfwbBM1-DUXOdQWbSjgCI_WM/edit#heading=h.zi8nw4t10oa6",
//                 },
//                 {
//                     name: "Project 1",
//                     description:
//                         "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
//                     project_image_link: "https://via.placeholder.com/150",
//                 },
//                 {
//                     name: "Project 1",
//                     description:
//                         "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
//                     project_image_link: "https://via.placeholder.com/150",
//                 },
//                 {
//                     name: "Project 1",
//                     description:
//                         "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
//                     project_image_link: "https://via.placeholder.com/150",
//                 },
//                 {
//                     name: "Project 1",
//                     description:
//                         "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
//                     project_image_link: "https://via.placeholder.com/150",
//                 },
//             ],
//         });
//     }, []);

//     return (
//         <div className="projects">
//             <header>
//                 <NavBar />
//             </header>
//             {projectData.projects?.length > 0 && (
//                 <main>
//                     <Filter>
//                         <button>A - Z</button>
//                         <button>Z - A</button>
//                     </Filter>

//                     <Cards
//                         allData={projectData.projects}
//                         onClickGoTo={"/project"}
//                     />
//                     <LoadMoreButton />
//                 </main>
//             )}
//             <Footer />
//         </div>
//     );
// }

// export default Projects;
