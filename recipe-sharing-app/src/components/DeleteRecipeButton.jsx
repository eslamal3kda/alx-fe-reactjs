import React from 'react'
import useRecipeStore from './recipeStore'
import { useNavigate } from 'react-router-dom';

export default function DeleteRecipeButton({recipeId}) {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate('/')
    }
  return (
    <button style={{margin:'10px',backgroundColor:'#ec5050',padding:'10px 30px',borderRadius:'10px',outline:'0',border:'0',color:'white',cursor:'pointer'}} onClick={handleDelete}>Delete</button>
  )
}
