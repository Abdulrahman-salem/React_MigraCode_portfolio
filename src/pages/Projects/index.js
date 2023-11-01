import React, {  useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
// import { getData } from "../../adapters/fetch";
import LoadMoreButton from "../../components/LoadMoreButton";
import Footer from "../../components/Footer/Footer";

function Projects() {
    // let URL_PROJECTS;
    const [allData, setAllData] = useState({});
    // useEffect(() => {
    //     getData(URL_PROJECTS).then((data) => {
    //         console.log(data);
    //     });
    // }, []);

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

                    <Cards allData onClickGoTo={"/project"} />
                    <LoadMoreButton />
                </main>
            )}
            <Footer />
        </div>
    );
}

export default Projects;

