import React, { useState } from "react";
import imageDownPointer from "../../assets/images/downPointer.svg";
import imageUpPointer from "../../assets/images/upPointer.svg";
import "./index.scss";

function Filter({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [pointerImageUrl, setPointerImageUrl] = useState(imageDownPointer);

    const handleOpenFilterOption = (e) => {
        // if there is no children don't open the options
        if (!children.props.children) {
            return;
        }

        // change image pointer
        if (isOpen) {
            setPointerImageUrl(imageDownPointer);
        } else {
            setPointerImageUrl(imageUpPointer);
        }

        // toggle opening and closing filter
        return setIsOpen(!isOpen);
    };

    return (
        <section className="filter">
            <button onClick={handleOpenFilterOption}>
                <p>Filter</p>
                <img src={pointerImageUrl} alt="pointer" />
            </button>
            {isOpen && <div className="filter-option">{children}</div>}
        </section>
    );
}

export default Filter;
