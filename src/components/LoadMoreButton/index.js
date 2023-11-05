import "./index.scss";
import React from "react";

function LoadMoreButton({ showLoadMore, onClick = () => {} }) {
    return (
        <>
           { showLoadMore && <section className="LoadMoreButton">
                <button onClick={onClick}>
                    <div className="containerLines">
                        <hr className="firstLine" />
                    </div>
                    <p>Load more</p>
                    <div className="containerLines">
                        <hr className="lastLine" />
                    </div>
                </button>
            </section>}
        </>
    );
}

export default LoadMoreButton;
