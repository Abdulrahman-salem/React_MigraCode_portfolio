import "./index.scss";
import { Link } from "react-router-dom";
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
          {/* {group ? `Group: ${group}` : description} */}
          {Languages ? `Languages: ${Languages}` : null}
        </p>
        <p className="card-description">
          {/* {Languages ? `Languages: ${Languages}` : null} */}
          {skills ? `Skills: ${skills}` : null}
        </p>
        <button className="card-description-button slide-right2">
          {/* {skills ? `Skills: ${skills}` : null} */}
          See More
        </button>
        {/* <p className="card-description">
            {gitHub ? `GitHub:https://github.com/${gitHub}/` : null}
          </p> */}
        {/* <p className="card-description">
            {gitHub ? (
              <Link to={`https://github.com/${gitHub}/`}>GitHub Profile</Link>
            ) : null}
          </p> */}
      </div>
    </div>
  );
}
export default Card;
// import { emptyTypeAnnotation } from "@babel/types";
// import "./index.scss";
// import { Link } from "react-router-dom";
// function Card({ cardData }) {
//     // console.log(cardData);
//     // projects
//     const { project_image_link, name, description } = cardData;
//     // students
//     const { imageUrl, fullName, group, Languages, gitHub, skills } = cardData;
//     return (
//       <div className="card">
//         {imageUrl ? (
//           <img
//             className={
//               imageUrl.indexOf("default_person_img") > -1
//                 ? "default-img base-img"
//                 : `card-image base-img`
//             }
//             src={imageUrl}
//             alt="Card img"
//           />
//         ) : null}
//         {project_image_link ? (
//           <img
//             className={
//               project_image_link.indexOf("default_project_img") > -1
//                 ? "default-img base-img"
//                 : `card-image base-img`
//             }
//             src={project_image_link}
//             alt="Card img"
//           />
//         ) : null}
//         <div className="card-content">
//           <button>
//             <h2 className="card-title">{fullName ? fullName : name}</h2>
//           </button>
//           <p className="card-description">
//             {group ? `Group: ${group}` : description}
//           </p>
//           <p className="card-description">
//             {Languages ? `Languages: ${Languages}` : null}
//           </p>
//           <p className="card-description">
//             {skills ? `Skills: ${skills}` : null}
//           </p>
//           <p className="card-description">
//             {gitHub ? `GitHub:https://github.com/${gitHub}/` : null}
//           </p>
//           {/* <p className="card-description">
//             {gitHub ? (
//               <Link to={`https://github.com/${gitHub}/`}>GitHub Profile</Link>
//             ) : null}
//           </p> */}
//         </div>
//       </div>
//     );
// }
// export default Card;
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./index.scss";
// // import github from "../../assets/images/github-142-svgrepo-com.svg";
// // function Card({ cardData }) {
// //   const { imageUrl, fullName, countryOfBirth, email, gitHub } = cardData;
// //   const handleGitHubClick = (event) => {
// //     event.preventDefault();
// //     if (gitHub) {
// //       window.open(`https://github.com/${gitHub}`, "_blank");
// //     }
// //   };
// //   return (
// //     <div className="card" onClick={handleGitHubClick}>
// //       {imageUrl && (
// //         <img
// //           className={
// //             imageUrl.indexOf("default_person_img") > -1
// //               ? "default-img base-img"
// //               : `card-image base-img`
// //           }
// //           src={imageUrl}
// //           alt="Card img"
// //         />
// //       )}
// //       <div className="card-content">
// //         <h2 className="card-title">{fullName}</h2>
// //         <p className="card-description">
// //           {countryOfBirth ? `Country: ${countryOfBirth}` : null}
// //         </p>
// //         <p className="card-description">{email ? `Email: ${email}` : null}</p>
// //         <p className="card-description">
// //           {gitHub ? (
// //             <Link
// //               to={`https://github.com/${gitHub}`}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <img height = "30px" src={github} alt="Github icon" />
// //             </Link>
// //           ) : null}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }
// // export default Card;
