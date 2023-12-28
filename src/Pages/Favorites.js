// Favorites.js
import React from 'react';
import RecipeCard from '../components/RecipeCard';

const Favorites = ({ favoriteRecipes }) => {
  if (!Array.isArray(favoriteRecipes)) {
    console.error("favoriteRecipes is not an array",favoriteRecipes);
    return null; // or handle this case in another way
  }
  return (
    <div>
      <h2 className='fav-head'>Your Favorite Recipes</h2>
      <div className='recipe-container'>
      {favoriteRecipes.map((recipe, index) => (
        <div key={index}>
            
         <RecipeCard
          key={index}
          recipe={recipe}
          onToggleFavorite={() => {}}
        />
         </div>
      ))}</div>
    </div>
  );
};

export default Favorites;