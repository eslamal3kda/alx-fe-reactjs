import React, { useEffect, useState } from "react";
import data from "../data.json";
import RecipeCard from "./RecipeCard";
import AddRecipeForm from "./AddRecipeForm";
export default function HomePage() {
    const [recipes] = useState(data);

    useEffect(() => {
        console.log(recipes);
    }, [recipes]);
    return (
        <main>
            <h1 className="text-slate-100 text-2xl bg-slate-800 my-4 p-4 w-fit rounded mx-auto hover:bg-slate-700 shadow-2xl">Welcome to our app</h1>
            <div className="bg-slate-200 p-6 flex flex-wrap gap-8 ">
                {recipes.map((r) => (
                    <RecipeCard key={r.id} image={r.image} title={r.title} summary={r.summary} id={r.id} />
                ))}
            </div>
            <AddRecipeForm />
        </main>
    );
}
