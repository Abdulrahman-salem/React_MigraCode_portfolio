import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getData } from "../../adapters/fetch";
import { URL_FILTER_STUDENT_BY_NAME } from "../../helpers/constants/endpoints";
import "./index.scss";

function Project() {
    // const [teamLeader, setTeamLeader] = useState([]);
    // const [fullstackDevelopers, setFullstackDevelopers] = useState([]);
    // const [frontendDevelopers, setFrontendDevelopers] = useState([]);
    // const [backendDevelopers, setBackendDevelopers] = useState([]);
    // const [designers, setDesigners] = useState([]);
    const [teamMemberRoles, setTeamMemberRoles] = useState({
        teamLeader: [],
        fullstackDevelopers: [],
        frontendDevelopers: [],
        backendDevelopers: [],
        designers: [],
    });

    // I used this to disable clicking on buttons until fetching data
    const [isFetching, setIsFetching] = useState(false);

    // i used here useNavigate to navigate to profile page and passing data to it
    const navigate = useNavigate();

    // If I didn't get data I will show error message for some seconds
    const [errorMessage, setErrorMessage] = useState({
        message: "",
        seconds: 2000, // 2 seconds
    });

    const { state } = useLocation();
    const {
        name,
        description,
        project_image_link,
        live_demo_link,
        product_presentation_link,
        repository_link,
        trello_link,
        instructors_names,
        team_member_names,
        team_member_roles,
        technologies_used,
    } = state;
    // console.log(state);

    useEffect(() => {
        // get roles members and to set it to state
        const updatedRoles = {
            teamLeader: [],
            fullstackDevelopers: [],
            frontendDevelopers: [],
            backendDevelopers: [],
            designers: [],
        };

        team_member_roles.forEach((role) => {
            const name = role.split(":").pop().trim();
            if (
                role.includes("Team leader") &&
                !updatedRoles.teamLeader.includes(name)
            ) {
                updatedRoles.teamLeader.push(name);
            } else if (
                role.includes("Frontend developer") &&
                !updatedRoles.frontendDevelopers.includes(name)
            ) {
                updatedRoles.frontendDevelopers.push(name);
            } else if (
                role.includes("Backend developer") &&
                !updatedRoles.backendDevelopers.includes(name)
            ) {
                updatedRoles.backendDevelopers.push(name);
            } else if (
                role.includes("Fullstack developer") &&
                !updatedRoles.fullstackDevelopers.includes(name)
            ) {
                updatedRoles.fullstackDevelopers.push(name);
            } else if (
                role.includes("Designer") &&
                !updatedRoles.designers.includes(name)
            ) {
                updatedRoles.designers.push(name);
            }
        });

        setTeamMemberRoles(updatedRoles);
    }, [team_member_roles]);

    const handleGoToStudentProfile = async (e) => {
        if (!isFetching) {
            // setIsFetching to true to disable clicking on buttons until the fetch complete
            setIsFetching(true);
            await getData(
                URL_FILTER_STUDENT_BY_NAME + e.target.textContent
            ).then((data) => {
                console.log(data);
                // able to click on buttons
                setIsFetching(false);
                if (data.items.length > 0) {
                    navigate("/student", { state: data });
                } else {
                    //showing error for some seconds
                    setErrorMessage((prevState) => ({
                        ...prevState,
                        message: "The student is not found!",
                    }));
                    setTimeout(() => {
                        setErrorMessage((prevState) => ({
                            ...prevState,
                            message: "",
                        }));
                    }, errorMessage.seconds);
                }
            });
        }
    };

    return (
        <article className="project">
            <header>
                <p className="name">{name}</p>
                <nav>
                    {repository_link ? (
                        <Link to={repository_link}>
                            <img
                                src={
                                    require("../../assets/images/github-142-svgrepo-com.svg")
                                        .default
                                }
                                title="repository link"
                                alt="repository link"
                                width={40}
                            />
                        </Link>
                    ) : null}
                    {trello_link ? (
                        <Link to={trello_link}>
                            <img
                                src={
                                    require("../../assets/images/trello.svg")
                                        .default
                                }
                                title="trello link"
                                alt="trello link"
                                width={40}
                            />
                        </Link>
                    ) : null}
                    {live_demo_link ? (
                        <Link to={live_demo_link}>
                            <img
                                src={
                                    require("../../assets/images/live-web-demo.svg")
                                        .default
                                }
                                title="live demo link"
                                alt="live demo link"
                                width={40}
                            />
                        </Link>
                    ) : null}
                    {product_presentation_link ? (
                        <Link to={product_presentation_link}>
                            <img
                                src={require("../../assets/images/presentation.png")}
                                title="product presentation link"
                                alt="product presentation link"
                                width={40}
                            />
                        </Link>
                    ) : null}
                </nav>
            </header>
            <main>
                {description ? (
                    <p className="description">{description}</p>
                ) : null}

                {technologies_used?.length > 0 ? (
                    <section className="technology">
                        <h2>technologies</h2>
                        <section className="technologies-list">
                            {technologies_used.map((technology, index) => (
                                <p key={index}>{technology}</p>
                            ))}
                        </section>
                    </section>
                ) : null}
                {instructors_names?.length > 0 ? (
                    <section className="instructors">
                        <h2>instructors</h2>
                        <section className="instructors-list">
                            {instructors_names.map((instructor, index) => (
                                <p key={index}>{instructor}</p>
                            ))}
                        </section>
                    </section>
                ) : null}
                {team_member_names?.length > 0 ? (
                    <section className="team-member">
                        <h2>team member</h2>
                        {team_member_names.map((member, index) => (
                            <button
                                key={index}
                                onClick={handleGoToStudentProfile}
                                disabled={isFetching}
                            >
                                {member}
                            </button>
                        ))}
                    </section>
                ) : null}
                {team_member_roles ? (
                    <section className="team-member-roles">
                        <h2>team member roles</h2>
                        {teamMemberRoles.teamLeader?.length > 0 ? (
                            <>
                                <h3>Team leader</h3>
                                {teamMemberRoles.teamLeader.map(
                                    (member, index) => (
                                        <p key={index}>{member}</p>
                                    )
                                )}
                            </>
                        ) : null}
                        {teamMemberRoles.fullstackDevelopers?.length > 0 ? (
                            <>
                                <h3>Fullstack developers</h3>
                                {teamMemberRoles.fullstackDevelopers.map(
                                    (member, index) => (
                                        <p key={index}>{member}</p>
                                    )
                                )}
                            </>
                        ) : null}
                        {teamMemberRoles.frontendDevelopers?.length > 0 ? (
                            <>
                                <h3>Frontend developers</h3>
                                {teamMemberRoles.frontendDevelopers.map(
                                    (member, index) => (
                                        <p key={index}>{member}</p>
                                    )
                                )}
                            </>
                        ) : null}
                        {teamMemberRoles.backendDevelopers?.length > 0 ? (
                            <>
                                <h3>Backend developers</h3>
                                {teamMemberRoles.backendDevelopers.map(
                                    (member, index) => (
                                        <p key={index}>{member}</p>
                                    )
                                )}
                            </>
                        ) : null}
                        {teamMemberRoles.designers?.length > 0 ? (
                            <>
                                <h3>Designers</h3>
                                {teamMemberRoles.designers.map(
                                    (member, index) => (
                                        <p key={index}>{member}</p>
                                    )
                                )}
                            </>
                        ) : null}
                    </section>
                ) : null}

                {project_image_link ? (
                    <img
                        className="project-image"
                        src={project_image_link}
                        alt="screenshot for first page of project"
                        width={400}
                    />
                ) : null}
            </main>
            {errorMessage.message && <p>{errorMessage.message}</p>}
        </article>
    );
}

export default Project;
