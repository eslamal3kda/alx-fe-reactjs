import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

export default function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: "20px" }}>
                <h1>Recipe Sharing App</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <AddRecipeForm />
                                <RecipeList />
                            </>
                        }
                    />
                    <Route path="/recipes/:id" element={<RecipeDetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
