import React from "react";
import Card from "../Card";
import "./index.scss";
import { Link, Outlet } from "react-router-dom";

function Cards({ allData, onClickGoTo }) {
    console.log(allData);

    return (
        <>
            <div className="cards">
                {allData?.map((data, index) => (
                    <Link to={onClickGoTo} state={data} key={index}>
                        <Card cardData={data} />
                    </Link>
                ))}
            </div>
            <Outlet />
        </>
    );
}

export default Cards;
