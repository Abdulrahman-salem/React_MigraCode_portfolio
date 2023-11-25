import "./index.scss";
function Card({ cardData }) {
  // console.log(cardData);
  
  // projects
  const { project_image_link, name, description } = cardData;

  // students
  const { imageUrl, fullName, group, Languages, gitHub, skills } = cardData;
  
  return (
    <div className="card">
     <div className="image-container">
        {imageUrl ? (
          <img
            className={
              imageUrl.indexOf("default_person_img") > -1
                ? "default-img base-img"
                : `student-image base-img`
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
     </div>
      <div className="card-content">
        <button>
          <h2 className="card-title">{fullName ? fullName : name}</h2>
        </button>
        <p className="card-description">
          {Languages ? `Languages: ${Languages}` : null}
        </p>
        {skills?.length > 0 ? (
                    <p className="card-description">
                        Skills:
                        {skills.map((skill, index) => (
                            <span key={index}>
                                {index === 0 ? " " + skill : ", " + skill}
                            </span>
                        ))}
                    </p>
                ) : null}

        <button className="card-description-button slide-right2">
          See More
        </button>
      </div>
    </div>
  );
}
export default Card;
