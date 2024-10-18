import React, { useState } from "react";

function RecipeCard({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleInstructions = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-details">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-cuisine">
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p className="recipe-instructions">
          <strong>Instructions:</strong>{" "}
          {isExpanded
            ? recipe.instructions
            : `${recipe.instructions.slice(0, 100)}...`}
          <span
            onClick={toggleInstructions}
            style={{
              color: "black",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "0.8em",
              marginLeft: "5px",
            }}
          >
            {isExpanded ? " (Show Less)" : " (Show More)"}
          </span>
        </p>
        <a href={recipe.videoUrl} target="_blank" rel="noopener noreferrer">
          <button className="ytvideo">Watch Tutorial</button>
        </a>
      </div>
    </article>
  );
}

export default RecipeCard;
