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

function Students() {
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
                    data.items.forEach((student) => {
                        console.log(student);
                        if (student.imageUrl.length === 0) {
                            student.imageUrl =
                                require("../../assets/images/default_person_img.svg").default;
                        }
                    });
                    setAllData({
                        students: [...allData.students, ...data.items],
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

    return (
        <div className="students">
            <header>
                <NavBar />
            </header>
            {allData.students.length > 0 ? (
                <main>
                    {console.debug(allData.students)}
                    {console.log(allData.offSet)}
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

                    <Cards
                        allData={allData.students}
                        onClickGoTo={"/student"}
                    />
                    <LoadMoreButton />
                </main>
            ) : null}
            <Footer />
        </div>
    );
}

export default Students;