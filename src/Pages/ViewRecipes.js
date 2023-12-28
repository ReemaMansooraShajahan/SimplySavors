import React from 'react'
import Search from '../components/Search'
import RecipeCard from '../components/RecipeCard'

 function ViewRecipes({onToggleFavorite , favoriteRecipes}) {
  const recipes=[
    {
      title:"Chicken Pan Pizza",
      image:"./images/img_1.jpg"
    },
    {
      title:"Spaghetti and Meatballs",
      image:"./images/img_4.jpg"
    },
    {
      title:"American Cheese Burger",
      image:"./images/img_5.jpg"
    },
    {
      title:"Mutton Biriyani",
      image:"/images/img_6.jpg"
    },
    {
      title:"Japanese Sushi",
      image:"/images/img_10.jpg"
    },
    {
      title:"Donut",
      image:"/images/img_14.jpg"
    },
    {
      title:"Angel Strawberry Dessert",
      image:"/images/img_15.jpg"
    },
    {
      title:"Mojito",
      image:"/images/img_16.jpg"
    },
    {
      title:"White Sauce Pasta",
      image:"/images/img_17.jpg"
    },
    {
      title:"Stuffed Mushroom",
      image:"/images/img_18.jpg"
    },
    {
      title:"Grilled Shrimp",
      image:"/images/img_19.jpg"
    },
    {
      title:"Grilled Fish",
      image:"/images/img_20.jpg"
    },
    {
      title:"Mutton Masala",
      image:"/images/img_21.jpg"
    },
    {
      title:"Chicken Wrap",
      image:"/images/img_22.jpg"
    },
    {
      title:"Kadai Paneer",
      image:"/images/img_24.jpg"
    },
    {
      title:"Greek Grilled Chicken Salad",
      image:"/images/img_23.jpg"
    },
    {
      title:"Mango Pudding",
      image:"/images/img_25.jpg"
    },
    {
      title:"Creamy Lemon Chicken",
      image:"/images/img_26.jpg"
    },
  ].sort(()=> Math.random()-0.5)
  return (
    <div>
    <Search />
    <div className='recipe-container'>
      {recipes.map((recipe, index) => (
        // eslint-disable-next-line react/jsx-key
        <RecipeCard
          key={index}
          recipe={recipe}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favoriteRecipes.some((favRecipe) => favRecipe.title === recipe.title)}
        />
      ))}
    </div>
  </div>
);
};

export default ViewRecipes;