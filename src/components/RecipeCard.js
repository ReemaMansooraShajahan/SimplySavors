import React, { useState, useEffect } from 'react';
import Customimage from './Customimage';

const RecipeCard = ({ recipe, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check local storage for saved favorite state
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    
    if (Array.isArray(storedFavorites)) {
      setIsFavorite(storedFavorites.some((favRecipe) => favRecipe.title === recipe.title));
    }
  }, [recipe.title]);

  const handleToggleFavorite = () => {
    const updatedFavorites = [...JSON.parse(localStorage.getItem('favoriteRecipes')) || []];

    if (isFavorite) {
      // Remove from favorites
      const index = updatedFavorites.findIndex((favRecipe) => favRecipe.title === recipe.title);
      updatedFavorites.splice(index, 1);
    } else {
      // Add to favorites
      updatedFavorites.push(recipe);
    }

    // Save to local storage
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));

    // Toggle the state
    setIsFavorite(!isFavorite);

    // Trigger the parent component's toggle function
    onToggleFavorite(recipe);
  };

  return (
    <div className='recipe-card'>
      <Customimage imgSrc={recipe.image} pt="65%" />
      <div className='recipe-card-info'></div>
      <p className='recipe-title'>{recipe.title}</p>
      <p className='recipe-desc'>Discover the world through taste</p>
      <a className='view-btn' href='#!'>
        VIEW RECIPE
      </a>
      <button onClick={handleToggleFavorite}aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeCard;