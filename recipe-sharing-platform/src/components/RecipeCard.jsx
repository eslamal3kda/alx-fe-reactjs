import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({id, image, title, summary }) {
    return (
        <div className="border border-blue-500 border-1 w-72 h-96 p-4 rounded-md">
            <Link to={`/recipe/${id}}`}>
                <img src={image} alt="" className="w-60 mb-4 mx-auto cursor-pointer hover:scale-110 transition duration-300 rounded " />
                <h2 className="text-blue-600 my-4 cursor-pointer">{title}</h2>
            </Link>
            <p>{summary}</p>
        </div>
    );
}
