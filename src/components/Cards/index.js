import Card from "../Card";
import "./index.scss";

function Cards({ allData }) {
    // const projectsData = [
    //     {
    //         projectName: "Project 1",
    //         personName: "Person 1",
    //         projectDescription:
    //             "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
    //         imageUrl: require("../../assets/images/Screenshot_6.png"), // Replace with your image URL
    //     },
    //     {
    //         projectName: "Project 1",
    //         personName: "Person 1",
    //         projectDescription:
    //             "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
    //         imageUrl: "", // Replace with your image URL
    //     },
    //     {
    //         projectName: "Project 1",
    //         personName: "Person 1",
    //         projectDescription:
    //             "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
    //         imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
    //     },
    //     {
    //         projectName: "Project 1",
    //         personName: "Person 1",
    //         projectDescription:
    //             "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
    //         imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
    //     },
    //     {
    //         projectName: "Project 1",
    //         personName: "Person 1",
    //         projectDescription:
    //             "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
    //         imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
    //     },
    //     {
    //         projectName: "Project 1",
    //         personName: "Person 1",
    //         projectDescription:
    //             "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
    //         imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
    //     },
    //     {
    //         projectName: "Project 1",
    //         personName: "Person 1",
    //         projectDescription:
    //             "Descriptioasdfasdf asdf asdf asdf asdf asdf asdf asdf weafasd fawef asdf asdf asdf asdf asdf asdf asdf asdf sdafas dfsadf asdf sadf sdn for Project 1",
    //         imageUrl: "https://via.placeholder.com/200", // Replace with your image URL
    //     },
    // ];

    return (
        <>
            <div className="cards">
                {allData?.map((data, index) => (
                    <Card cardData={data} key={index} />
                ))}
            </div>
        </>
    );
}

export default Cards;
