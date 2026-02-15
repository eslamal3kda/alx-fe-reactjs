import React, { useEffect, useState } from "react";
import data from "../data.json";
import RecipeCard from "./RecipeCard";
import AddRecipeForm from "./AddRecipeForm";
export default function HomePage() {
    const [recipes, setRecipes] = useState(data);

    useEffect(() => {
        console.log(recipes);
    }, []);
    return (
        <main>
            <div className="bg-slate-200 p-6 flex flex-wrap gap-4">
                {recipes.map((r) => (
                    <RecipeCard key={r.id} image={r.image} title={r.title} summary={r.summary} id={r.id} />
                ))}
            </div>
            <AddRecipeForm />
        </main>
    );
}
