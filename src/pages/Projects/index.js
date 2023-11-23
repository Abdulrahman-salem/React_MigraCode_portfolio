import React, { useContext, useEffect, useRef, useState } from "react";
import { getData, postData } from "../../adapters/fetch";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
import LoadMoreButton from "../../components/LoadMoreButton";
import Footer from "../../components/Footer/Footer";
import { JwtContext } from "../../components/JwtContext";
import {
  QUERY_FILTER_PROJECTS,
  QUERY_FILTER_PROJECTS_BY_A_TO_Z,
  QUERY_FILTER_PROJECTS_BY_NEWEST_TO_OLDEST,
  QUERY_FILTER_PROJECTS_BY_OLDEST_TO_NEWEST,
  QUERY_FILTER_PROJECTS_BY_Z_TO_A,
  QUERY_TO_FETCH_NEXT_PAGE_PROJECTS,
  URL_NEW_PROJECT,
  URL_PROJECTS,
} from "../../helpers/constants/endpoints";

import { useDispatch, useSelector } from "react-redux";
import {
  firstFetchedProjects,
  fetchMoreProjects,
  fetchingProjects,
  endFoFetchingProjects,
} from "../../redux/projects";
import Loader from "../../components/Loader";
import AddMoreCardButton from "../../components/AddMoreCardButton";
import ContainerFormAddMoreCard from "../../components/ContainerFormAddMoreCard";
import FormNewProject from "../../components/FormNewProject";

function Projects() {
  const addMoreCardBtnRef = useRef(null);
  const [openAddMoreCardButton, setOpenAddMoreCardButton] = useState(false);
  const [statusScrollY, setStatusScrollY] = useState(0);

  // token
  const { currentUserJwt } = useContext(JwtContext);
//   console.log(`Hi I am projects page and jwt is ${currentUserJwt}`);

  // to read redux projects state
  const { projectsState } = useSelector((store) => store);

  // to set redux state
  const dispatch = useDispatch();
  // console.log(projectsState);

    async function fetchData(fetchRequirement) {
        // queryFilterData to load more filtered data
        const { url, queryFilterData = ``, actionType = `` } = fetchRequirement;
        // fetchingProjects starting fetching projects // loader
        dispatch(fetchingProjects({}));
        try {
            const data = await getData(url);

            if (data) {
                // console.log(data);
                data.items.forEach((project) => {
                    if (project.project_image_link.length === 0) {
                        project.project_image_link =
                            require("../../assets/images/default_project_img.svg").default;
                    }
                });
                if (actionType === `FIRST_FETCH_DATA`) {
                    // firstFetchedProjects to set first fetched projects
                    dispatch(
                        firstFetchedProjects({
                            projects: [...data.items],
                            nextPage: data.nextpage
                                ? data.nextpage.toString()
                                : "",
                            queryFilterData,
                        })
                    );
                } else if (actionType === `FETCH_MORE_DATA`) {
                    // fetchMoreProjects to set more fetched projects
                    dispatch(
                        fetchMoreProjects({
                            projects: [...data.items],
                            nextPage: data.nextpage
                                ? data.nextpage.toString()
                                : "",
                        })
                    );
                } else {
                    throw new Error(
                        `The actionType ${actionType} is not supported`
                    );
                }
            }
        } catch (error) {
            console.log(error.message);
        }
        // endFoFetchingProjects end of fetching projects // loader
        dispatch(endFoFetchingProjects());
    }

    // first load fetch
    useEffect(() => {
        if (projectsState.projects.length === 0) {
            fetchData({ url: URL_PROJECTS, actionType: "FIRST_FETCH_DATA" });
        }
    }, [projectsState.projects]);

    useEffect(() => {
        // console.log(statusScrollY);
        setTimeout(() => {
            window.scrollBy({
                behavior: "smooth",
                left: 0,
                top: statusScrollY,
            });
        }, 0);
    }, [statusScrollY, projectsState.projects]);

    // on click load more btn
    const handleOnLoadMoreProjects = async (e) => {
        e.preventDefault();
        // console.log("click", projectsState);

        if (projectsState.nextPage.length === 0) {
            return;
        }
        setStatusScrollY(document.body.scrollTop || window.scrollY);

        await fetchData({
            url: `${URL_PROJECTS}?${
                QUERY_TO_FETCH_NEXT_PAGE_PROJECTS + projectsState.nextPage
            }&${projectsState.queryFilterData}`,
            actionType: "FETCH_MORE_DATA",
        });
    };

    // on click one of the filter options btn
    const handleOnClickFilterOption = async (e) => {
        switch (e.target.value) {
            // case 1
            case "a-z":
                await fetchData({
                    url: `${URL_PROJECTS}?${QUERY_FILTER_PROJECTS}=${QUERY_FILTER_PROJECTS_BY_A_TO_Z}`,
                    queryFilterData:
                        QUERY_FILTER_PROJECTS +
                        "=" +
                        QUERY_FILTER_PROJECTS_BY_A_TO_Z,
                    actionType: "FIRST_FETCH_DATA",
                });
                break;

            // case 2
            case "z-a":
                await fetchData({
                    url: `${URL_PROJECTS}?${QUERY_FILTER_PROJECTS}=${QUERY_FILTER_PROJECTS_BY_Z_TO_A}`,
                    queryFilterData:
                        QUERY_FILTER_PROJECTS +
                        "=" +
                        QUERY_FILTER_PROJECTS_BY_Z_TO_A,
                    actionType: "FIRST_FETCH_DATA",
                });
                break;

            // case 3
            case "date-a-z":
                await fetchData({
                    url: `${URL_PROJECTS}?${QUERY_FILTER_PROJECTS}=${QUERY_FILTER_PROJECTS_BY_OLDEST_TO_NEWEST}`,
                    queryFilterData:
                        QUERY_FILTER_PROJECTS +
                        "=" +
                        QUERY_FILTER_PROJECTS_BY_OLDEST_TO_NEWEST,
                    actionType: "FIRST_FETCH_DATA",
                });
                break;

            // case 4
            case "date-z-a":
                await fetchData({
                    url: `${URL_PROJECTS}?${QUERY_FILTER_PROJECTS}=${QUERY_FILTER_PROJECTS_BY_NEWEST_TO_OLDEST}`,
                    queryFilterData:
                        QUERY_FILTER_PROJECTS +
                        "=" +
                        QUERY_FILTER_PROJECTS_BY_NEWEST_TO_OLDEST,
                    actionType: "FIRST_FETCH_DATA",
                });
                break;

            default:
                break;
        }
        return;
    };

    const handleClickAddMoreCard = (e) => {
        setOpenAddMoreCardButton(!openAddMoreCardButton);
    };

    const onSubmitForm = async (submittingOptions) => {
        const { isSubmitted, formData } = submittingOptions;

        setOpenAddMoreCardButton(!isSubmitted);

        let token = "";
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const [name, value] = cookie.split("=");
            if (name.trim() === "login") {
                if (value.trim()) {
                    token = value;
                }
            }
        }

        if (!token) {
            return alert(
                "you don't have access to add new project. Please login first!"
            );
        }
        try {
            const headers = {
                "Content-Type": "application/json",
                token: token,
            };
            const bodyData = formData;
            const data = await postData(URL_NEW_PROJECT, headers, bodyData);

            if (data) {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
        }
        // console.log(formData);
        return;
    };
    return (
        <div className="projects">
            <header>
                <NavBar />
            </header>
            <main>
                {currentUserJwt?.length > 0 && (
                <section className="AddCardContainer" ref={addMoreCardBtnRef}>
                    <AddMoreCardButton onClick={handleClickAddMoreCard} />

                    {openAddMoreCardButton && (
                        <ContainerFormAddMoreCard>
                            <button
                                className="closeFormNewProject"
                                onClick={() => {
                                    setOpenAddMoreCardButton(
                                        !openAddMoreCardButton
                                    );
                                }}
                            >
                                X
                            </button>
                            <FormNewProject onSubmitForm={onSubmitForm} />
                        </ContainerFormAddMoreCard>
                    )}
                </section>
                )}

                {!projectsState.isFetching &&
                    projectsState.projects?.length > 0 && (
                        <>
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
                                <button
                                    value={"date-a-z"}
                                    onClick={handleOnClickFilterOption}
                                >
                                    Oldest - Newest
                                </button>
                                <button
                                    value={"date-z-a"}
                                    onClick={handleOnClickFilterOption}
                                >
                                    Newest - Oldest
                                </button>
                            </Filter>

                            <Cards
                                allData={projectsState.projects}
                                onClickGoTo={"/project"}
                            />
                            <LoadMoreButton
                                showLoadMore={projectsState.nextPage}
                                onClick={handleOnLoadMoreProjects}
                            />
                        </>
                    )}
                {!projectsState.isFetching &&
                    projectsState.projects?.length === 0 && (
                        <p className="onDataMessage">There is no Projects</p>
                    )}
            </main>
            {projectsState.isFetching && <Loader />}
            <Footer />
        </div>
    );
}
export default Projects;

