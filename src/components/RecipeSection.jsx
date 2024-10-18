import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

function RecipeSection({ title, categoryId }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `http://localhost:5118/api/recipes/category/${categoryId}`
        );
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [categoryId]);

  if (loading) return <p>Loading recipes...</p>;

  return (
    <section className="recipe-section">
      <h3>{title}</h3>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.recipeId} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </section>
  );
}

export default RecipeSection;
