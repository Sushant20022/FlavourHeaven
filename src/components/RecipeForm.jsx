import React, { useState } from "react";

function RecipeForm({ onAddRecipe }) {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    categoryId: "",
    instructions: "",
    image: "",
    videoUrl: "",
    cuisine: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    console.log("New Recipe Data:", newRecipe);

    try {
      const response = await fetch("http://localhost:5118/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      console.log("Response Status:", response.status);
      const responseBody = await response.text();
      console.log("Response Body:", responseBody);

      if (!response.ok) {
        const errorData = responseBody ? JSON.parse(responseBody) : {};
        throw new Error(errorData.message || "Failed to add recipe");
      }

      const addedRecipe = JSON.parse(responseBody);
      onAddRecipe(addedRecipe);
      setSuccessMessage("Recipe added successfully!");
      setNewRecipe({
        title: "",
        categoryId: "",
        instructions: "",
        image: "",
        videoUrl: "",
        cuisine: "",
      });
    } catch (error) {
      if (error instanceof TypeError) {
        setError("Network error. Please try again.");
      } else {
        setError(error.message);
      }
      console.error("Failed to add recipe:", error);
    }
  };

  return (
    <section id="add-recipe">
      <h2>Add a New Recipe</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form id="recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Recipe Title"
          value={newRecipe.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="cuisine"
          placeholder="Cuisine"
          value={newRecipe.cuisine}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          id="categoryId"
          placeholder="Category ID (e.g., 1 for Breakfast, 2 for Dinner)"
          value={newRecipe.categoryId}
          onChange={handleChange}
          required
        />
        <textarea
          id="instructions"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          id="image"
          placeholder="Enter URL for Recipe Image"
          value={newRecipe.image}
          onChange={handleChange}
        />
        <input
          type="text"
          id="videoUrl"
          placeholder="Video URL"
          value={newRecipe.videoUrl}
          onChange={handleChange}
        />
        <button type="submit">Add Recipe</button>
        <button
          type="reset"
          onClick={() =>
            setNewRecipe({
              title: "",
              categoryId: "",
              instructions: "",
              image: "",
              videoUrl: "",
              cuisine: "",
            })
          }
        >
          Reset
        </button>
      </form>
    </section>
  );
}

export default RecipeForm;
