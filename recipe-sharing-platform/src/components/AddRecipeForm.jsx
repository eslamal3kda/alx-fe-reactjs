import React from "react";

export default function AddRecipeForm() {
    const handleForm = (e) => {
        e.preventDefault()
    };
    return (
        <form className="flex flex-col gap-4 w-96 mx-auto my-4 border border-teal-700 p-4" onSubmit={(e) => handleForm(e)}>
            <input type="text" value={"https://picsum.photos/400/300?random"} disabled className="bg-slate-200 p-1 " />
            <input type="text" placeholder="Add recipe title" className="p-1 border border-slate-200" />
            <textarea name="" id="" placeholder="Add recipe summary" className="resize-none border p-2"></textarea>
            <textarea name="" id="" placeholder="Add recipe details" className="resize-none border p-2"></textarea>
            <button type="submit" className="border bg-gray-200 w-fit mx-auto p-2 rounded-md">
                Add Recipe
            </button>
        </form>
    );
}
