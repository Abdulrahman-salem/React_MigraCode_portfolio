import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
// import { getData } from "../../adapters/fetch";
import LoadMoreButton from "../../components/LoadMoreButton";
import Footer from "../../components/Footer/Footer";
import {
    URL_STUDENTS,
    QUERY_TO_FETCH_NEXT_PAGE_STUDENTS,
    QUERY_FILTER_STUDENTS_BY_A_TO_Z,
    QUERY_FILTER_STUDENTS_BY_Z_TO_A,
} from "../../helpers/constants/endpoints";

function Students() {
    // let URL_PROJECTS;
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        // getData(URL_PROJECTS).then((data) => {
        //     console.log(data);
        // });

        const fetchData = async () => {
            const url = `${URL_STUDENTS}?${QUERY_TO_FETCH_NEXT_PAGE_STUDENTS}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response error");
                }
                const data = await response.json();
                setAllData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        setAllData([
            {
                fullName: "Student 1",
                comment:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                imageUrl: require("../../assets/images/Screenshot_6.png"),
            },
            {
                fullName: "OCCycling",
                comment:
                    "A platform to manage the free bicycle provision service given by OCC in a refugee camp in Greece to allow them to go to the city",
                repository_link: "https://github.com/hheiress/OCCycling",
                live_demo_link: "https://github.com",
                project_image_link:
                    "https://666230843-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MRebciU3NcuLgsX3ijf%2F-MVb5XncnoYEToFic_k6%2F-MVbCGfSvh7L9-UlBmjZ%2FfpTeam3.PNG?alt=media&token=7c35f842-d59d-45da-a178-c6bbc3b8993f",
                technologies_used: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React.js",
                    "Database(SQL)",
                ],
                instructors_names: ["Nandan Rao"],
                team_member_names: [
                    "Diana Dashkovska (TL)",
                    "José Arriaga",
                    "Anny Gómez",
                    "Gustavo Rossini",
                ],
                team_member_roles: [
                    "Team leader: Diana Dashkovska",
                    "Fullstack developer: Anny Gómez",
                    "Frontend developer: José Arriaga",
                    "Backend developer: Gustavo Rossini",
                    "Designer: Diana Dashkovska",
                ],
                trello_link: "Trello link 10",
                product_presentation_link:
                    "https://docs.google.com/document/d/1SOLHVUsEQX-OH8T2z_OXfwbBM1-DUXOdQWbSjgCI_WM/edit#heading=h.zi8nw4t10oa6",
            },
            {
                fullName: "Student 1",
                comment:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                imageUrl: "https://via.placeholder.com/150",
            },
            {
                fullName: "Student 1",
                comment:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                imageUrl: "https://via.placeholder.com/150",
            },
            {
                fullName: "Student 1",
                comment:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                imageUrl: "https://via.placeholder.com/150",
            },
            {
                fullName: "Student 1",
                comment:
                    "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
                imageUrl: "https://via.placeholder.com/150",
            },
        ]);
    }, []);

    return (
        <div className="students">
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

                    <Cards allData={allData} onClickGoTo={"/student"} />
                    <LoadMoreButton />
                </main>
            )}
            <Footer />
        </div>
    );
}

export default Students;
