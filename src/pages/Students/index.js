// import React, { useState, useEffect } from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import "./index.scss";
// import Cards from "../../components/Cards";
// import Filter from "../../components/Filter";
// import { getData } from "../../adapters/fetch";
// import LoadMoreButton from "../../components/LoadMoreButton";
// import Footer from "../../components/Footer/Footer";
// import {
//     URL_STUDENTS,
//     QUERY_TO_FETCH_NEXT_PAGE_STUDENTS,
//     QUERY_FILTER_STUDENTS_BY_A_TO_Z,
//     QUERY_FILTER_STUDENTS_BY_Z_TO_A,
// } from "../../helpers/constants/endpoints";

// function Students() {
//     const [allData, setAllData] = useState({
//         students: [],
//         offSet: "",
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getData(
//                     URL_STUDENTS +
//                         "?" +
//                         QUERY_TO_FETCH_NEXT_PAGE_STUDENTS +
//                         allData.offSet
//                 );
//                 if (data) {
//                     data.items.forEach((student) => {
//                         console.log(student);
//                         if (student.imageUrl.length === 0) {
//                             student.imageUrl =
//                                 require("../../assets/images/default_person_img.svg").default;
//                         }
//                     });
//                     setAllData({
//                         students: [...allData.students, ...data.items],
//                         offSet: data.offSet,
//                     });
//                 }
//             } catch (error) {
//                 console.log(error.message);
//             }
//         };

//         if (allData.students.length === 0) {
//             fetchData();
//         }
//     }, [allData.students, allData.offSet]);

//     return (
//         <div className="students">
//             <header>
//                 <NavBar />
//             </header>
//             {allData.students.length > 0 ? (
//                 <main>
//                     {console.debug(allData.students)}
//                     {console.log(allData.offSet)}
//                     <Filter>
//                         <button
//                             onClick={() => {
//                                 console.log("hello");
//                             }}
//                         >
//                             <p>A - Z</p>
//                         </button>
//                         <button
//                             onClick={() => {
//                                 console.log("hello");
//                             }}
//                         >
//                             <p>Z - A</p>
//                         </button>
//                     </Filter>

//                     <Cards
//                         allData={allData.students}
//                         onClickGoTo={"/student"}
//                     />
//                     <LoadMoreButton />
//                 </main>
//             ) : null}
//             <Footer />
//         </div>
//     );
// }

// export default Students;

import React, { useEffect, useState } from "react";
import { getData } from "../../adapters/fetch";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
import LoadMoreButton from "../../components/LoadMoreButton";
import Footer from "../../components/Footer/Footer";
import {
    URL_STUDENTS,
    QUERY_TO_FETCH_NEXT_PAGE_STUDENTS,
    QUERY_FILTER_STUDENTS,
    QUERY_FILTER_STUDENTS_BY_A_TO_Z,
    QUERY_FILTER_STUDENTS_BY_Z_TO_A,
} from "../../helpers/constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import {
    firstFetchedStudents,
    fetchMoreStudents,
    fetchingStudents,
    endFoFetchingStudents,
} from "../../redux/students";
import Loader from "../../components/Loader";

function Students() {
    const [statusScrollY, setStatusScrollY] = useState(0);

    // to read redux students state
    const { studentsState } = useSelector((store) => store);

    // to set redux state
    const dispatch = useDispatch();
    // console.log(studentsState);

    async function fetchData(fetchRequirement) {
        // queryFilterData to load more filtered data
        const { url, queryFilterData = ``, actionType = `` } = fetchRequirement;
        // fetchingStudents starting fetching students // loader
        dispatch(fetchingStudents({}));

        let data;

        try {
            data = await getData(url);
            // data = await getData('https://jsonplaceholder.typicode.com/photos/' + 25500);
        } catch (error) {
            console.log(error.message);
        }

        if (data?.items?.length > 0) {
            // console.log(data);
            await Promise.all(
                data.items.map(async (student) => {
                    if (student?.imageUrl.length === 0) {
                        try {
                            // 1) fetch image link
                            const githubResponse = await getData(
                                `https://api.github.com/users/${student.gitHub}`
                            );

                            // set image
                            student.imageUrl = githubResponse.avatar_url;
                        } catch (error) {
                            console.error(error.message);
                        } finally {
                            // console.log(student);
                            if ( student && student?.imageUrl?.length === 0) {
                                student.imageUrl =
                                    require("../../assets/images/default_person_img.svg").default;
                            }
                        }
                    }
                })
            );

            // console.log(data);

            if (actionType === `FIRST_FETCH_DATA`) {
                // firstFetchedStudents to set first fetched students (need help on the data structure)
                dispatch(
                    firstFetchedStudents({
                        students: [...data.items],
                        offset: data.offset ? data.offset.toString() : "",
                        queryFilterData,
                    })
                );
            } else if (actionType === `FETCH_MORE_DATA`) {
                // fetchMoreStudents to set more fetched students
                dispatch(
                    fetchMoreStudents({
                        students: [...data.items],
                        offset: data.offset ? data.offset.toString() : "",
                    })
                );
            } else {
                throw new Error(
                    `The actionType ${actionType} is not supported`
                );
            }
        }

        // endFoFetchingStudents end of fetching students // loader
        dispatch(endFoFetchingStudents());
    }

    // first load fetch
    useEffect(() => {
        if (studentsState.students.length === 0) {
            fetchData({ url: URL_STUDENTS, actionType: "FIRST_FETCH_DATA" }); // talk to Abdu about it
        }
    }, [studentsState.students]);

    useEffect(() => {
        // console.log(statusScrollY);
        setTimeout(() => {
            window.scrollBy({
                behavior: "smooth",
                left: 0,
                top: statusScrollY,
            });
        }, 0);
    }, [statusScrollY, studentsState.students]);


    // on click load more btn
    const handleOnLoadMoreStudents = async (e) => {
        e.preventDefault();

        if (studentsState.offset.length === 0) {
            return;
        }

        setStatusScrollY(document.body.scrollTop || window.scrollY);

        await fetchData({
            url: `${URL_STUDENTS}?${
                QUERY_TO_FETCH_NEXT_PAGE_STUDENTS + studentsState.offset
            }&${studentsState.queryFilterData}`,
            actionType: "FETCH_MORE_DATA",
        });
    };

    // on click one of the filter options btn
    const handleOnClickFilterOption = async (e) => {
        switch (e.target.value) {
            // case 1
            case "a-z":
                await fetchData({
                    url: `${URL_STUDENTS}?${QUERY_FILTER_STUDENTS}=${QUERY_FILTER_STUDENTS_BY_A_TO_Z}`,
                    queryFilterData:
                        QUERY_FILTER_STUDENTS +
                        "=" +
                        QUERY_FILTER_STUDENTS_BY_A_TO_Z,
                    actionType: "FIRST_FETCH_DATA",
                });
                break;

            // case 2
            case "z-a":
                await fetchData({
                    url: `${URL_STUDENTS}?${QUERY_FILTER_STUDENTS}=${QUERY_FILTER_STUDENTS_BY_Z_TO_A}`,
                    queryFilterData:
                        QUERY_FILTER_STUDENTS +
                        "=" +
                        QUERY_FILTER_STUDENTS_BY_Z_TO_A,
                    actionType: "FIRST_FETCH_DATA",
                });
                break;

            default:
                break;
        }
        return;
    };

    return (
        <div className="students">
            <header>
                <NavBar />
            </header>
            <main>
                {!studentsState.isFetching &&
                    studentsState.students?.length > 0 && (
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
                            </Filter>

                            <Cards
                                allData={studentsState.students}
                                onClickGoTo={`/student/`}
                            />

                            <LoadMoreButton
                                showLoadMore={studentsState.offset}
                                onClick={handleOnLoadMoreStudents}
                            />
                        </>
                    )}
                {!studentsState.isFetching &&
                    studentsState.students?.length === 0 && (
                        <p className="onDataMessage">There is no Students</p>
                    )}
            </main>
            {studentsState.isFetching && <Loader />}
            <Footer />
        </div>
    );
}
export default Students;