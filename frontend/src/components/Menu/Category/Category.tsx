import React from "react";
import "./Category.css";

interface ICategory{
    category: string
}

export const Category: React.FC<ICategory> = ({ category }): JSX.Element => {
    return <div className="category">{category}</div>
}