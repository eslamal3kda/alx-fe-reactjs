import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

export default function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div>
            {recipes.length === 0 ? (
                <p>No recipes yet!</p>
            ) : (
                recipes.map((recipe) => (
                    <div key={recipe.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                        <h3>
                            <Link style={{ color: '#2d2d2d', backgroundColor:'#99f',padding:'10px 30px',borderRadius:'10px'}} to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        </h3>
                        <p>{recipe.description?.slice(0, 50)}...</p>
                    </div>
                ))
            )}
        </div>
    );
}
