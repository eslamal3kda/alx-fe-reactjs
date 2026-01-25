import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

export default function AddRecipeForm() {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} style={{border:'1px solid',padding:'20px',display:'flex',flexDirection:'column', gap:'20px', alignItems:'center',justifyContent:'center',width:'300px'}}>
            <input style={{width:'100%',height:'30px',borderRadius:'12px',outline:'none', border:'1px solid',padding:'6px'}} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required/>
            <textarea style={{width:'100%',height:'100px',borderRadius:'12px',resize:'none',padding:'6px'}} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
            <button style={{padding:'10px 20px',borderRadius:'12px',outline:'none', border:'none',cursor:'pointer',backgroundColor:'#aaa',color:'#2d2d2d'}} type="submit">Add Recipe</button>
        </form>
    );
}
