import "./index.scss";

function Card({ cardData }) {
    return (
        <div className="card">
            <img className="card-image" src={cardData.imageUrl} alt="project" />
            <div className="card-content">
                <button>
                    <h2 className="card-projectName">{cardData.projectName}</h2>
                </button>
                <button>
                    <h3 className="card-personName">{cardData.personName}</h3>
                </button>
                <p className="card-description">
                    {cardData.projectDescription}
                </p>
            </div>
        </div>
    );
}

export default Card;
