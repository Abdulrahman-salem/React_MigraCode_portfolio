import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
// import { getData } from "../../adapters/fetch";
import LoadMoreButton from "../../components/LoadMoreButton";
import Footer from "../../components/Footer/Footer";

function Projects() {
    // let URL_PROJECTS;
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        // getData(URL_PROJECTS).then((data) => {
        //     console.log(data);
        // });
        setAllData([
            {
                name: "Project 1",
                description:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                project_image_link: require("../../assets/images/Screenshot_6.png"), // Replace with your image URL
            },
            {
                name: "Project 1",
                description:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                project_image_link: "https://via.placeholder.com/150", // Replace with your image URL
            },
            {
                name: "Project 1",
                description:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                project_image_link: "https://via.placeholder.com/150", // Replace with your image URL
            },
            {
                name: "Project 1",
                description:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                project_image_link: "https://via.placeholder.com/150", // Replace with your image URL
            },
            {
                name: "Project 1",
                description:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                project_image_link: "https://via.placeholder.com/150", // Replace with your image URL
            },
            {
                name: "Project 1",
                description:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                project_image_link: "https://via.placeholder.com/150", // Replace with your image URL
            },
        ])
    }, []);

    return (
        <div className="projects">
            <header>
                <NavBar />
            </header>
            {allData && (
                <main>
                    <Filter>
                        <button
                            onClick={() => {
                                console.log("hello");
                            }}
                        >
                            <p>A - Z</p>
                        </button>
                        <button
                            onClick={() => {
                                console.log("hello");
                            }}
                        >
                            <p>Z - A</p>
                        </button>
                    </Filter>

                    <Cards allData={allData} onClickGoTo={"/project"} />
                    <LoadMoreButton />
                </main>
            )}
            <Footer />
        </div>
    );
}

export default Projects;

