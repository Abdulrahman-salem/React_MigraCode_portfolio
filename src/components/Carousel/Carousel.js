import React, { useState, useEffect } from "react";
import group_photo from "../../assets/images/Screenshot_31.png";
import group_photo1 from "../../assets/images/Screenshot_11.png";
import "./Carousel.scss"

const Carousel = ({ onClickSeeMore = () => {} }) => {
    const [showDescription, setShowDescription] = useState(true);
    useEffect(() => {
        const timer = setInterval(() => {
            setShowDescription((prev) => !prev);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handleNextSlide = () => {
        setShowDescription(false);
    };

    const handlePrevSlide = () => {
        setShowDescription(true);
    };

    return (
        <div className="description">
            <div className="animation-description">
                {showDescription ? (
                    <div className="description_text">
                        <div className="text">
                            <h1 className="title">Our mission</h1>
                            <p>
                                Migracode acts as a bridge between the demand
                                for skilled people in the tech sector and people
                                with a migration background who are eager to
                                work in the tech industry. Founded in 2019, we
                                are cooperating with other code schools in
                                Europe to build a large community of companies
                                and students to foster both labor integration as
                                well as social inclusion.
                            </p>
                            <button
                                className="button slide-right2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  onClickSeeMore(e);
                                }}
                            >
                                See more
                            </button>
                        </div>
                        <img src={group_photo} alt="group_photo" />
                    </div>
                ) : (
                    <div className="description_text">
                        <div className="text">
                            <h1 className="title">About us</h1>
                            <p>
                                In the last 2 months of every MigraCode course,
                                students work in groups on a final project in
                                which they combine all the knowledge they have
                                gained during the first 6 months of learning
                                through our program. Besides that, we often also
                                offer side-projects to gain experience and build
                                their portfolio. Below you can find some project
                                examples made by MigraCode students.
                            </p>
                            <button
                                className="button slide-right2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  onClickSeeMore(e);
                              }}
                            >
                                See more
                            </button>
                        </div>
                        <img src={group_photo1} alt="group_photo" />
                    </div>
                )}

                <div className="dots">
                    <span
                        className={`dot ${showDescription ? "active" : ""}`}
                        onClick={handlePrevSlide}
                    ></span>
                    <span
                        className={`dot ${!showDescription ? "active" : ""}`}
                        onClick={handleNextSlide}
                    ></span>
                </div>

                {/* <div className="arrows">
          <span className="arrow" onClick={handlePrevSlide}>
            &#8249;
          </span>
          <span className="arrow" onClick={handleNextSlide}>
            &#8250;
          </span>
        </div> */}
            </div>
        </div>
    );
};

export default Carousel;
