import React, { useState } from "react";
import "./index.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect } from "react";

function FormNewProject({ onSubmitForm }) {
    const animatedOptionsComponents = makeAnimated();
    const [isTeamMemberExist, setIsTeamMemberExist] = useState(false);

    // check img validation on submit
    const [isImgValid, setIsImgValid] = useState(false);

    const [inputsTeamNames, setInputsTeamNames] = useState([
        {
            id: 0,
            value: "",
        },
    ]);

    const [inputsInstructorsNames, setInputsInstructorsNames] = useState([
        {
            id: 0,
            value: "",
        },
    ]);

    const [inputsRepositoriesLinks, setInputsRepositoriesLinks] = useState([
        {
            id: 0,
            value: "",
        },
    ]);

    const [formState, setFormState] = useState({
        name: "",
        description: "",
        repositoryLink: [""],
        liveDemoLink: "",
        projectImageLink: "",
        technologiesUsed: [""],
        instructorsNames: [""],
        teamMembersNames: [],
        team_members_role_for_teamLeader: [],
        team_members_role_for_fullstackDevelopers: [],
        team_members_role_for_frontendDevelopers: [],
        team_members_role_for_backendDevelopers: [],
        team_members_role_for_designers: [],
        trelloLink: "",
        productPresentation: "",
        dateHaveBeenDone: null,
        migracodeBatch: "",
    });

    // input change
    const handleOnChangeInput = async (details) => {
        const { e, nameOfState, id } = details;
        // console.log(e.target.value, id);
        // console.log(e);
        const newValue = e.target.value;

        if (nameOfState === "inputsTeamNames") {
            const updatedInputs = inputsTeamNames.map((input) =>
                input.id === id ? { ...input, value: newValue } : input
            );
            setInputsTeamNames(updatedInputs);

            const isAnyMemberExist = updatedInputs.some(
                (member) => member.value.length > 0
            );
            return setIsTeamMemberExist(isAnyMemberExist);
        }

        //
        else if (nameOfState === "inputsInstructorsNames") {
            const updatedInputs = inputsInstructorsNames.map((input) =>
                input.id === id ? { ...input, value: newValue } : input
            );
            return setInputsInstructorsNames(updatedInputs);
        }

        //
        else if (nameOfState === "inputsRepositoriesLinks") {
            const updatedInputs = inputsRepositoriesLinks.map((input) =>
                input.id === id ? { ...input, value: newValue } : input
            );
            return setInputsRepositoriesLinks(updatedInputs);
        }

        //
        else if (nameOfState === "formState.dateHaveBeenDone") {
            return setFormState({ ...formState, dateHaveBeenDone: newValue });
        }

        // formState
        else if (nameOfState === "formState.projectImage") {
            const img = new Image();
            img.src = newValue;

            img.onload = () => {
                // Image is valid
                setIsImgValid(true);
            };

            img.onerror = () => {
                // Image is not valid
                setIsImgValid(false);
            };
            return setFormState({ ...formState, projectImageLink: newValue });
        }

        //
        else if (nameOfState === "formState.product_presentation") {
            return setFormState({
                ...formState,
                productPresentation: newValue,
            });
        }

        //
        else if (nameOfState === "formState.name") {
            return setFormState({ ...formState, name: newValue });
        }

        //
        else if (nameOfState === "formState.description") {
            return setFormState({ ...formState, description: newValue });
        }

        //
        else if (nameOfState === "formState.liveDemoLink") {
            return setFormState({ ...formState, liveDemoLink: newValue });
        }

        //
        else if (nameOfState === "formState.trelloLink") {
            return setFormState({ ...formState, trelloLink: newValue });
        }

        //
        else if (nameOfState === "formState.migracodeBatch") {
            return setFormState({ ...formState, migracodeBatch: newValue });
        }

        return;
    };

    let team_member_role_options = [];

    useEffect(() => {
        inputsTeamNames.map((name) => {
            if (name.value) {
                return team_member_role_options.push({
                    value: `${name.value}`,
                    label: `${name.value}`,
                });
            }
        });
    }, [
        inputsTeamNames,
        formState,
        inputsInstructorsNames,
        inputsRepositoriesLinks,
        isImgValid,
    ]);

    const technologyOptions = [
        { value: "HTML1", label: "HTML2" },
        { value: "CSS", label: "CSS" },
        { value: "JAVASCRIPT", label: "JAVASCRIPT" },
        { value: "REACT JS", label: "REACT JS" },
        { value: "NODE JS", label: "NODE JS" },
    ];

    const handleAddMoreInput = (e, inputRequirement) => {
        e.preventDefault();
        // destructure inputRequirement
        const { nameOfState, value, index } = inputRequirement;

        // check for which state to set the input
        if (nameOfState === "inputsTeamNames") {
            return setInputsTeamNames((prev) => [
                ...prev,
                { id: index, value: value },
            ]);
        }
        if (nameOfState === "inputsInstructorsNames") {
            return setInputsInstructorsNames([
                ...inputsInstructorsNames,
                { id: index, value: value },
            ]);
        }
        if (nameOfState === "inputsRepositoriesLinks") {
            console.log(index);
            if (index === 2)
                return alert("Can't add more than two repositories");
            return setInputsRepositoriesLinks([
                ...inputsRepositoriesLinks,
                { id: index, value: value },
            ]);
        }
    };

    const handleDeleteInput = (e, index, nameOfState) => {
        e.preventDefault();
        console.log(e);
        if (nameOfState === "inputsInstructorsNames") {
            const updatedInputs = inputsInstructorsNames.filter(
                (input) => input.id !== index
            );
            setInputsInstructorsNames(updatedInputs);
        } else if (nameOfState === "inputsTeamNames") {
            const updatedInputs = inputsTeamNames.filter(
                (input) => input.id !== index
            );
            setInputsTeamNames(updatedInputs);
        } else if (nameOfState === "inputsRepositoriesLinks") {
            console.log(index);
            // if (index === 2) return;
            const updatedInputs = inputsRepositoriesLinks.filter(
                (input) => input.id !== index
            );
            return setInputsRepositoriesLinks(updatedInputs);
        }
    };

    const handleonsubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(e.target.elements);
        let team_members_role_for_teamLeader = [];
        let team_members_role_for_fullstackDevelopers = [];
        let team_members_role_for_frontendDevelopers = [];
        let team_members_role_for_backendDevelopers = [];
        let team_members_role_for_designers = [];

        const valuesFromInputs = (inputs) => {
            const newValues = [];
            // const inputs = inputs;

            if (inputs?.value.length === 0) {
                for (let i = 0; i < inputs.length; i++) {
                    newValues.push(inputs[i].value);
                }
            } else newValues.push(inputs?.value);
            return newValues;
        };

        const isSelectedOptionsAreInOptions = (members = [], options) => {
            let isValuesEquals = true;
            members.map((member) => {
                if (!options.some((option) => member === option.value)) {
                    isValuesEquals = false;
                }
            });
            return isValuesEquals;
        };

        // team_members_role_for_teamLeader
        if (e.target.elements.team_members_role_for_teamLeader) {
            team_members_role_for_teamLeader = valuesFromInputs(
                e.target.elements.team_members_role_for_teamLeader
            );
            const isTeamLeaderValid = isSelectedOptionsAreInOptions(
                team_members_role_for_teamLeader,
                team_member_role_options
            );
            if (!isTeamLeaderValid) {
                return alert("Invalid team role (Team Leader)");
            }
        }

        // team_members_role_for_fullstackDevelopers
        if (e.target.elements.team_members_role_for_fullstackDevelopers) {
            team_members_role_for_fullstackDevelopers = valuesFromInputs(
                e.target.elements.team_members_role_for_fullstackDevelopers
            );
            // check if fullstack developers are in the team_member_role_options
            const isFullstackDevelopersValid = isSelectedOptionsAreInOptions(
                team_members_role_for_fullstackDevelopers,
                team_member_role_options
            );
            if (!isFullstackDevelopersValid) {
                return alert("Invalid team role (Fullstack Developers)");
            }
        }

        // team_members_role_for_frontendDevelopers
        if (e.target.elements.team_members_role_for_frontendDevelopers) {
            team_members_role_for_frontendDevelopers = valuesFromInputs(
                e.target.elements.team_members_role_for_frontendDevelopers
            );
            const isFrontendDevelopersValid = isSelectedOptionsAreInOptions(
                team_members_role_for_frontendDevelopers,
                team_member_role_options
            );
            if (!isFrontendDevelopersValid) {
                return alert("Invalid team role (Frontend Developers)");
            }
        }

        // team_members_role_for_backendDevelopers
        if (e.target.elements.team_members_role_for_backendDevelopers) {
            team_members_role_for_backendDevelopers = valuesFromInputs(
                e.target.elements.team_members_role_for_backendDevelopers
            );
            const isBackendDevelopersValid = isSelectedOptionsAreInOptions(
                team_members_role_for_backendDevelopers,
                team_member_role_options
            );
            if (!isBackendDevelopersValid) {
                return alert("Invalid team role (Backend Developers)");
            }
        }

        // team_members_role_for_designers
        if (e.target.elements.team_members_role_for_backendDevelopers) {
            team_members_role_for_designers = valuesFromInputs(
                e.target.elements.team_members_role_for_designers
            );
            const isDesignersValid = isSelectedOptionsAreInOptions(
                team_members_role_for_designers,
                team_member_role_options
            );
            if (!isDesignersValid) {
                return alert("Invalid team role (Designers)");
            }
        }
        // technologiesUsed
        const technologiesUsed = valuesFromInputs(
            e.target.elements.technologiesUsed
        );

        // teamMembersNames
        const teamMembersNames = [];
        inputsTeamNames.map((inputs) => {
            return teamMembersNames.push(inputs.value);
        });

        // instructorsNames
        const instructorsNames = [];
        inputsInstructorsNames.map((inputs) => {
            return instructorsNames.push(inputs.value);
        });

        // repositoryLink
        const repositoryLink = [];
        inputsRepositoriesLinks.map((inputs) => {
            return repositoryLink.push(inputs.value);
        });

        // img validation
        const checkImageValidity = () => {
            const img = new Image();
            img.src = formState.projectImageLink;

            img.onload = () => {
                // Image is valid
                setIsImgValid(true);
            };

            img.onerror = () => {
                // Image is not valid
                setIsImgValid(false);
            };
        };
        if (formState.projectImageLink) {
            console.log(formState.projectImageLink);
            checkImageValidity();
            
            if (!isImgValid) {
                return alert("Image is not valid");
            }
        }

        // console.log({
        //     ...formState,
        //     repositoryLink: repositoryLink,
        //     instructorsNames: instructorsNames,
        //     teamMembersNames: teamMembersNames,
        //     technologiesUsed: technologiesUsed,
        //     team_members_role_for_teamLeader: team_members_role_for_teamLeader,
        //     team_members_role_for_fullstackDevelopers:
        //         team_members_role_for_fullstackDevelopers,
        //     team_members_role_for_frontendDevelopers:
        //         team_members_role_for_frontendDevelopers,
        //     team_members_role_for_backendDevelopers:
        //         team_members_role_for_backendDevelopers,
        //     team_members_role_for_designers: team_members_role_for_designers,
        // });
        onSubmitForm({
            isSubmitted: true,
            formData: {
                // ...formState,
                name: formState.name,
                description: formState.description,
                repository_link: repositoryLink,
                live_demo_link: formState.liveDemoLink,
                project_image_link: formState.projectImageLink,
                technologies_used: technologiesUsed,
                instructors_names: instructorsNames,
                team_member_names: teamMembersNames,
                team_leader: team_members_role_for_teamLeader,
                fullstack_developers: team_members_role_for_fullstackDevelopers,
                frontend_developers: team_members_role_for_frontendDevelopers,
                backend_developers: team_members_role_for_backendDevelopers,
                designers: team_members_role_for_designers,
                trello_link: formState.trelloLink,
                product_presentation_link: formState.productPresentation,
                date_have_been_done: formState.dateHaveBeenDone,
                migracode_batch: formState.migracodeBatch,
            },
        });
    };

    const preventEnterKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    return (
        <form
            className="newProjectForm"
            autoComplete="off"
            onSubmit={handleonsubmit}
        >
            <section>
                {/* Project name */}
                <section className="project_name_section">
                    <h2>Project name: *</h2>
                    <label htmlFor="name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Project name"
                            maxLength={120}
                            required
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState: "formState.name",
                                });
                            }}
                        />
                    </label>
                </section>

                {/* Date have been done */}
                <section className="date_have_been_done_section">
                    <h2>Date have been done : </h2>
                    <label htmlFor="date_have_been_done">
                        <input
                            className="input_date_have_been_done"
                            type="date"
                            name="date_have_been_done"
                            pattern="/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/"
                            placeholder="YYYY-MM-DD"
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState: "formState.dateHaveBeenDone",
                                });
                            }}
                        ></input>
                    </label>
                </section>

                {/* Migracode batch  */}
                <section className="migracode_batch_section">
                    <h2>Migracode batch : </h2>
                    <label htmlFor="migracode_batch">
                        <input
                            type="text"
                            name="migracode_batch"
                            placeholder="migracode batch"
                            maxLength={60}
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState: "formState.migracodeBatch",
                                });
                            }}
                        />
                    </label>
                </section>

                {/* Technologies */}
                <section className="technologiesUsed_section">
                    <h2>Technologies :</h2>
                    <label htmlFor="technologiesUsed">
                        <Select
                            isMulti
                            options={technologyOptions}
                            isClearable={true}
                            isSearchable={true}
                            // isDisabled={false}
                            name="technologiesUsed"
                            placeholder="technology"
                            components={animatedOptionsComponents}
                            onKeyDown={preventEnterKey}
                        />
                    </label>
                </section>

                <section className="instructors_names_section">
                    <h2>Instructor name :</h2>
                    {inputsInstructorsNames.map((input, index) => {
                        return (
                            <label htmlFor="instructors_names" key={index}>
                                <input
                                    // key={index}
                                    type="text"
                                    name="instructors_names"
                                    placeholder="Instructor name"
                                    onChange={(e) => {
                                        return handleOnChangeInput({
                                            e: e,
                                            id: input.id,
                                            nameOfState:
                                                "inputsInstructorsNames",
                                        });
                                    }}
                                    onKeyDown={preventEnterKey}
                                />
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={(e) =>
                                            handleDeleteInput(
                                                e,
                                                input.id,
                                                "inputsInstructorsNames"
                                            )
                                        }
                                        title="Delete"
                                    >
                                        X
                                    </button>
                                )}
                            </label>
                        );
                    })}
                    <button
                        onClick={(e) => {
                            handleAddMoreInput(e, {
                                nameOfState: "inputsInstructorsNames",
                                value: "",
                                index: inputsInstructorsNames?.length,
                            });
                        }}
                    >
                        Add more instructor
                    </button>
                </section>

                {/* Team members names */}
                <section className="team_members_names_section">
                    <h2>Team members names :</h2>
                    {inputsTeamNames.map((input, index) => {
                        return (
                            <label htmlFor="team_members_names" key={index}>
                                <input
                                    // key={index}
                                    type="text"
                                    name="team_members_names"
                                    placeholder="Team member name"
                                    onChange={(e) => {
                                        return handleOnChangeInput({
                                            e: e,
                                            id: input.id,
                                            nameOfState: "inputsTeamNames",
                                        });
                                    }}
                                    onKeyDown={preventEnterKey}
                                />
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={(e) =>
                                            handleDeleteInput(
                                                e,
                                                input.id,
                                                "inputsTeamNames"
                                            )
                                        }
                                        title="Delete"
                                    >
                                        X
                                    </button>
                                )}
                            </label>
                        );
                    })}
                    <button
                        onClick={(e) => {
                            handleAddMoreInput(e, {
                                nameOfState: "inputsTeamNames",
                                value: "",
                                index: inputsTeamNames?.length,
                            });
                        }}
                    >
                        Add more team member
                    </button>
                </section>

                {/* Team members role */}
                <section className="team_members_role_section">
                    <h2>Team members role :</h2>
                    {/* Team leader */}
                    <section>
                        <h3>Team leader :</h3>
                        <label htmlFor="team_members_role_for_teamLeader">
                            <Select
                                options={team_member_role_options}
                                isClearable={true}
                                isSearchable={true}
                                isDisabled={!isTeamMemberExist}
                                name="team_members_role_for_teamLeader"
                                placeholder="Team leader"
                                components={animatedOptionsComponents}
                                onKeyDown={preventEnterKey}
                            />
                        </label>
                    </section>

                    {/* Fullstack developers */}
                    <section>
                        <h3>Fullstack developers :</h3>
                        <label htmlFor="team_members_role_for_fullstackDevelopers">
                            <Select
                                isMulti
                                options={team_member_role_options}
                                isClearable={true}
                                isSearchable={true}
                                isDisabled={!isTeamMemberExist}
                                name="team_members_role_for_fullstackDevelopers"
                                placeholder="Fullstack developers"
                                components={animatedOptionsComponents}
                                onKeyDown={preventEnterKey}
                            />
                        </label>
                    </section>

                    {/* Backend developers */}
                    <section>
                        <h3>Backend developers :</h3>
                        <label htmlFor="team_members_role_for_backendDevelopers">
                            <Select
                                isMulti
                                options={team_member_role_options}
                                isClearable={true}
                                isSearchable={true}
                                isDisabled={!isTeamMemberExist}
                                name="team_members_role_for_backendDevelopers"
                                placeholder="Backend developers"
                                components={animatedOptionsComponents}
                                onKeyDown={preventEnterKey}
                            />
                        </label>
                    </section>

                    {/* Frontend developers */}
                    <section>
                        <h3>Frontend developers :</h3>
                        <label htmlFor="team_members_role_for_frontendDevelopers">
                            <Select
                                isMulti
                                options={team_member_role_options}
                                isClearable={true}
                                isSearchable={true}
                                isDisabled={!isTeamMemberExist}
                                name="team_members_role_for_frontendDevelopers"
                                placeholder="Frontend developers"
                                components={animatedOptionsComponents}
                                onKeyDown={preventEnterKey}
                            />
                        </label>
                    </section>

                    {/* Designers */}
                    <section>
                        <h3>Designers :</h3>
                        <label htmlFor="team_members_role_for_designers">
                            <Select
                                isMulti
                                options={team_member_role_options}
                                isClearable={true}
                                isSearchable={true}
                                isDisabled={!isTeamMemberExist}
                                name="team_members_role_for_designers"
                                placeholder="Designers"
                                components={animatedOptionsComponents}
                                onKeyDown={preventEnterKey}
                            />
                        </label>
                    </section>
                </section>

                {/* Repositories links */}
                <section className="repositories_links_section">
                    <h2>Repositories links :</h2>
                    <label htmlFor="repositories_links" />
                    {inputsRepositoriesLinks.map((input, index) => {
                        return (
                            <label htmlFor="repositories_links" key={index}>
                                <input
                                    // key={index}
                                    type="url"
                                    name="repositories_links"
                                    placeholder="Repository link"
                                    onChange={(e) => {
                                        return handleOnChangeInput({
                                            e: e,
                                            id: input.id,
                                            nameOfState:
                                                "inputsRepositoriesLinks",
                                        });
                                    }}
                                    onKeyDown={preventEnterKey}
                                />
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={(e) =>
                                            handleDeleteInput(
                                                e,
                                                input.id,
                                                "inputsRepositoriesLinks"
                                            )
                                        }
                                        title="Delete"
                                    >
                                        X
                                    </button>
                                )}
                            </label>
                        );
                    })}
                    <button
                        onClick={(e) => {
                            handleAddMoreInput(e, {
                                nameOfState: "inputsRepositoriesLinks",
                                value: "",
                                index: inputsRepositoriesLinks?.length,
                            });
                        }}
                    >
                        Add more Repository link
                    </button>
                </section>

                {/* Live demo link */}
                <section className="live_demo_link_section">
                    <h2>Live demo link : </h2>
                    <label htmlFor="live_demo_link">
                        <input
                            type="url"
                            name="live_demo_link"
                            placeholder="Live demo link"
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState: "formState.liveDemoLink",
                                });
                            }}
                        ></input>
                    </label>
                </section>

                {/* Trello link */}
                <section className="trello_link_section">
                    <h2>Trello link : </h2>
                    <label htmlFor="trello_link">
                        <input
                            type="url"
                            name="trello_link"
                            placeholder="Trello link"
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState: "formState.trelloLink",
                                });
                            }}
                        ></input>
                    </label>
                </section>

                {/* Product presentation */}
                <section className="product_presentation_section">
                    <h2>Product presentation : </h2>
                    <label htmlFor="product_presentation">
                        <input
                            type="url"
                            name="Product presentation link"
                            placeholder="product_presentation"
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState:
                                        "formState.product_presentation",
                                });
                            }}
                        ></input>
                    </label>
                </section>
            </section>

            <section>
                {/* Image */}
                <section className="image_section">
                    <h2>Image : </h2>
                    {formState.projectImageLink && (
                        <div className="preview-image">
                            <img src={formState.projectImageLink} alt="Preview" />
                        </div>
                    )}
                    <label htmlFor="image">
                        <input
                            type="url"
                            name="image"
                            placeholder="Image Link"
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState: "formState.projectImage",
                                });
                            }}
                        ></input>
                    </label>
                </section>

                {/* Description */}
                <section className="description_section">
                    <h2>Description : </h2>
                    <label htmlFor="description">
                        <textarea
                            name="description"
                            placeholder="Description"
                            onKeyDown={preventEnterKey}
                            onChange={(e) => {
                                return handleOnChangeInput({
                                    e: e,
                                    nameOfState: "formState.description",
                                });
                            }}
                        ></textarea>
                    </label>
                </section>
            </section>

            <input type="submit" />
        </form>
    );
}

export default FormNewProject;
