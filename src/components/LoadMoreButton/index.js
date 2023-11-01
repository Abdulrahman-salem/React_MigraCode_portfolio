import "./index.scss";
import React from "react";

function LoadMoreButton() {
    return (
        <section className="LoadMoreButton">
            <button>
                <div className="containerLines">
                    <hr className="firstLine" />
                </div>
                <p>Load more</p>
                <div className="containerLines">
                    <hr className="lastLine" />
                </div>
            </button>
        </section>
    );
}

export default LoadMoreButton;
