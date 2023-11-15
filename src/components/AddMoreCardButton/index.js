import React from "react";
import "./index.scss";

function AddMoreCardButton({ onClick }) {
    return (
        <button
            className="addMoreCardButton"
            onClick={onClick}
            title="Add Card"
        >
            <img src={require("../../assets/images/add.svg").default} alt="" />
        </button>
    );
}

export default AddMoreCardButton;
