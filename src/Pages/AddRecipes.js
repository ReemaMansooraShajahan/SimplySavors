import React from 'react'
import { useState } from 'react';

export default function AddRecipes() {
  const[recipe,setRecipe]=useState(
    {
      name:"",
      ingredients:[],
      instructions:"",
      imageUrl:"",
      cookingTime:0,
      userOwner:0
    }
  );
  const handleChange=(event)=>{
     const { name,value}=event.target;
    setRecipe({...recipe,[name]:value});
  }
  const handleIngredientChange=(event,idx)=>{
    const {value}=event.target;
    const ingredients=recipe.ingredients;
    ingredients[idx]=value;
    setRecipe({...recipe,ingredients});
    
  }
  const addIngredient=()=>{
    setRecipe({...recipe,ingredients:[...recipe.ingredients,""]});
  }
  console.log(recipe);
  return (
    
    <div className='addRecipe'>

    <h2 className='h2'>Add Recipes</h2><br/>
    <form>
    <label htmlFor='name'>Name</label><br/>
    <input type='text' id='name' onChange={handleChange}/><br/>
    <label htmlFor='ingredients'>Ingredients</label><br/>
    {recipe.ingredients.map((ingredient,idx)=>(
      <input key={idx} type='text' name ='ingredients' value={ingredient} onChange={(event)=>{
        handleIngredientChange(event,idx)
      }}/>
    ))}<br/>
     <button onClick={addIngredient} type='button'>Add Ingredient</button><br/>

    <label htmlFor='instructions'>Instructions</label><br/>
    <textarea id='instructions' name='instructions' onChange={handleChange}/><br/>
    <label htmlFor='imageUrl'>Image URL</label><br/>
    <input type='text' id='imageUrl' name='imageUrl' onChange={handleChange}/><br/>
    <label htmlFor='cookingTime'>Cooking Time (minutes)</label><br/>
    <input type='number' id='cookingTime' name='cookingTime' onChange={handleChange}/><br/>
    <button className='btn-submit' onClick={addIngredient} type='submit'>Create Recipe</button><br/>

    </form></div>
  )
}




