import React from "react";
// import photo from "../../assets/images/group_photo.jpg"; 
import group_photo from "../../assets/images/Screenshot_6.png"
import "./index.scss";
import { Button } from "react-bootstrap";



const Description = () => {
  return (
    <>
      <div className="description">
        <div className="description_text">
          <h1>
            Connecting Dreams to Code: Explore Our Student Web Developer
            Portfolios and Projects
          </h1>
          <p>
            Migracode acts as a bridge between the demand for skilled people in
            the tech sector and people with a migration background who are eager
            to work in the tech industry. Founded in 2019, we are cooperating
            with other code schools in Europe to build a large community of
            companies and students to foster both labor integration as well as
            social inclusion.
          </p>
          <Button className="button" variant="secondary">
            Students portfolio
          </Button>
          <h1>We are working...</h1>
        </div>

        <div className="description_image">
          <img src={group_photo} alt="group_photo" height="350px" />
        </div>
      </div>
    </>
  );
};

export default Description;
