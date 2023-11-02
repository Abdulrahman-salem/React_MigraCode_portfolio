import "./index.scss";

function Card({ cardData }) {
    // console.log(cardData);
    // projects
    const { project_image_link, name, description } = cardData;

    // students
    const { imageUrl, fullName, comment } = cardData;

    return (
        <div className="card">
            {imageUrl ? (
                <img
                    className={
                        imageUrl.indexOf("person_image") > -1
                            ? "default-student-img"
                            : `card-image`
                    }
                    src={imageUrl}
                    alt="Card img"
                />
            ) : null}
            {project_image_link ? (
                <img
                    className={`card-image`}
                    src={project_image_link}
                    alt="Card img"
                />
            ) : null}

            <div className="card-content">
                <button>
                    <h2 className="card-title">{fullName ? fullName : name}</h2>
                </button>
                <p className="card-description">
                    {comment ? comment : description}
                </p>
            </div>
        </div>
    );
}

export default Card;