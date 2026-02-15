import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
    const { id } = useParams();
    const recipe = data.find((r) => r.id === parseInt(id));
    useEffect(() => {
        console.log(recipe);
    }, [recipe]);
    return (
        <div className="flex flex-col gap-4 p-4 border border-teal-700 mx-auto">
            <img src={recipe.image} alt="" className="w-64 " />
            <h2 className="text-blue-500 ">{recipe.title}</h2>
            <p className="">{recipe.details}</p>
            <h3 className="text-2xl font-bold">Ingredients</h3>
            <ul className="border border-blue-200 rounded p-4 shadow">
                {recipe.ingredients.map((i) => (
                    <li className="my-1 bg-slate-100">{i}</li>
                ))}
            </ul>
            <h3 className="text-2xl font-bold">Instructions</h3>
            <ol className="list-decimal shadow">
                {recipe.instructions.map((i) => (
                    <li className="p-1 bg-slate-100 my-1">{i}</li>
                ))}
            </ol>
            <Link to={"/"} className="border border-blue-500 bg-slate-600 text-white w-fit rounded p-1">
                go back
            </Link>
        </div>
    );
}
