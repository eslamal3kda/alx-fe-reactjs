import React from "react";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { Link, useParams } from "react-router-dom";

export default function RecipeDetails() {
    const { id } = useParams();
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === +id));

    if (!recipe) {
        return (
            <div>
                <h2>recipe not found</h2>
                <Link style={{ textDecoration: "none", border: "0.5px solid", padding: "10px 20px", backgroundColor: "#1aF", color: "white", borderRadius: "10px" }} to="/">
                    Back
                </Link>
            </div>
        );
    }
    return (
        <div style={{ padding: "16px" }}>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
            <br />
            <br />
            <Link style={{ textDecoration: "none", border: "0.5px solid", padding: "10px 20px", backgroundColor: "#1aF", color: "white", borderRadius: "10px" }} to="/">
                Back
            </Link>
        </div>
    );
}
