import "./index.scss";

function Card({ cardData }) {
    // console.log(cardData);
    // projects
    const { project_image_link, name, description } = cardData;

    // students
    const { imageUrl, fullName, comment } = cardData;

    return (
        <div className="card">
            <img
                className="card-image"
                src={imageUrl ? imageUrl : project_image_link}
                alt="project"
            />
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
