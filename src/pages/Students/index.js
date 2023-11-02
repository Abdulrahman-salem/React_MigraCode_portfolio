import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";

function Students() {
    let data;

    return (
        <div className="students">
            <header>
                <NavBar />
            </header>
            {data && (
                <main>
                    {/* <Filter>
                        <button
                            onClick={() => {
                                console.log("hello");
                            }}
                        >
                            <p>feature students</p>
                        </button>
                    </Filter> */}

                    <Cards />
                </main>
            )}
        </div>
    );
}

export default Students;
