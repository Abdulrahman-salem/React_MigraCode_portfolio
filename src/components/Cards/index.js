import React, {useState} from "react";
import Card from "../Card";
import "./index.scss";


function Cards({ allData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const projectsData = [
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/Screenshot_6.png"), // Replace with your image URL
      },
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/group_photo.jpg"), // Replace with your image URL
      },
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/Screenshot_6.png"), // Replace with your image URL
      },
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/group_photo.jpg"), // Replace with your image URL
      },
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/Screenshot_6.png"), // Replace with your image URL
      },
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/group_photo.jpg"), // Replace with your image URL
      },
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/Screenshot_6.png"), // Replace with your image URL
      },
      {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/group_photo.jpg"), // Replace with your image URL
      },
    {
        projectName: "Project 1",
        personName: "Person 1",
        projectDescription:
          "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
        imageUrl: require("../../assets/images/Screenshot_6.png"), // Replace with your image URL
      }
    ];

    return (
        <>
            <div className="cards">
                {projectsData?.map((data, index) => (
                    <Card cardData={data} key={index} />
                ))}
            </div>
        </>
    );
}

export default Cards;
