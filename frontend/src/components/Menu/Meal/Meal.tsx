import React from "react";
import { IMeal } from "../../../SourceTypes";
import "./Meal.css";

export const Meal: React.FC<IMeal> = ({ name, description, price }): JSX.Element => {
    return (
        <div className="meal">
            <h3>{name}</h3>
            <p>{description}</p>
            <button>From {price}</button>
        </div>
    );
}