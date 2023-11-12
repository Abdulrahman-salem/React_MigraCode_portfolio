import { emptyTypeAnnotation } from "@babel/types";
import "./index.scss";

function Card({ cardData }) {
    // console.log(cardData);
    // projects
    const { project_image_link, name, description } = cardData;

    // students
    const { imageUrl, fullName, countryOfBirth, email, gitHub } = cardData;

    return (
      <div className="card">
        {imageUrl ? (
          <img
            className={
              imageUrl.indexOf("default_person_img") > -1
                ? "default-img base-img"
                : `card-image base-img`
            }
            src={imageUrl}
            alt="Card img"
          />
        ) : null}

        {project_image_link ? (
          <img
            className={
              project_image_link.indexOf("default_project_img") > -1
                ? "default-img base-img"
                : `card-image base-img`
            }
            src={project_image_link}
            alt="Card img"
          />
        ) : null}

        <div className="card-content">
          <button>
            <h2 className="card-title">{fullName ? fullName : name}</h2>
          </button>
          <p className="card-description">
            {countryOfBirth ? `Country: ${countryOfBirth}` : description}
          </p>
          <p className="card-description">
            {email ? `Email: ${email}` : null}
          </p>
                    <p className="card-description">
            {gitHub ? `GitHub: https://github.com/${gitHub}` : null}
          </p>
        </div>
      </div>
    );
}

export default Card;