import React from "react";
import RecipeCard from "./RecipeCard";

function FilteredRecipes({ recipes }) {
  return (
    <section>
      <h2>Filtered Recipes</h2>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.recipeId} recipe={recipe} />
          ))
        ) : (
          <p>Your Searched Recipes will be shown here.</p>
        )}
      </div>
    </section>
  );
}

export default FilteredRecipes;
