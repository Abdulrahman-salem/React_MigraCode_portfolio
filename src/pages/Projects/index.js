import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";

function Projects() {
    let data;

    return (
        <div className="projects">
            <header>
                <NavBar />
            </header>
            {data && (
                <main>
                    <Filter>
                        <button
                            onClick={() => {
                                console.log("hello");
                            }}
                        >
                            <p>best projects</p>
                        </button>
                    </Filter>

                    <Cards />
                </main>
            )}
        </div>
    );
}

export default Projects;
