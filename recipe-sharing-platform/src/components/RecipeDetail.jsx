import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data.json'

export default function RecipeDetail() {
  const {id} = useParams()
  const recipe = data.find((r)=>r.id === parseInt(id) )
  return (
    <div className='flex flex-col gap-4 p-4 border border-teal-700 mx-auto'>
      <img src={recipe.image} alt="" className='w-64 ' />
      <h2 className='text-blue-500 '>{ recipe.title}</h2>
      <p className=''>{ recipe.details}</p>
      <Link to={'/'} className='border border-blue-500 bg-slate-600 text-white w-fit rounded p-1'>go back</Link>
    </div>
  )
}
