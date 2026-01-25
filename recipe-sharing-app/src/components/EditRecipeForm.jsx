import React, { useState } from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function EditRecipeForm({ recipe }) {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({ ...recipe, title, description });
        navigate(`/recipes/${recipe.id}`);
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{ border: "1px solid", padding: "20px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center", width: "300px" }}>
            <input
                style={{ width: "100%", height: "30px", borderRadius: "12px", outline: "none", border: "1px solid", padding: "6px" }}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                style={{ width: "100%", height: "100px", borderRadius: "12px", resize: "none", padding: "6px" }}
                name=""
                id=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required></textarea>
            <button type="submit" style={{ padding: "10px 20px", borderRadius: "12px", outline: "none", border: "none", cursor: "pointer", backgroundColor: "#afa", color: "#2d2d2d" }}>
                Save Changes
            </button>
        </form>
    );
}
