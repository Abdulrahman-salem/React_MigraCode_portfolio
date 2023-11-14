import React from "react";
import "./index.scss";

function ContainerFormAddMoreCard({ children }) {
    return (
        <section className="formFixedContainer">
            <div className="formRelativeContainer">{children}</div>
        </section>
    );
}

export default ContainerFormAddMoreCard;
