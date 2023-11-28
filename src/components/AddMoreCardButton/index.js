import React from "react";
import "./index.scss";

function AddMoreCardButton({ onClick }) {
    return (
        <button
            className="addMoreCardButton"
            onClick={onClick}
            title="Add Card"
        >
            <img
                src={require("../../assets/images/add.svg").default}
                alt="button for add more card"
                width="auto"
                height="auto"
                loading="eager"
            />
        </button>
    );
}

export default AddMoreCardButton;
