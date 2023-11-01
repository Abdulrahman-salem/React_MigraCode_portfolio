import React, {useState} from "react";
import Card from "../Card";
import "./index.scss";
import { Link, Outlet } from "react-router-dom";

function Cards({ allData, onClickGoTo }) {
    const projectsData = [
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
    ];

    return (
        <>
            <div className="cards">
                {projectsData?.map((data, index) => (
                    <Link to={onClickGoTo} state={data} key={index}>
                        <Card cardData={data} />
                    </Link>

                ))}
            </div>
            <Outlet />
        </>
    );
}

export default Cards;
