import React, { useState, useRef } from "react";
import RecipeSection from "./RecipeSection";
import RecipeForm from "./RecipeForm";
import FilteredRecipes from "./FilteredRecipes";
import Footer from "./Footer";
import "./styles1.css";

function Header({ onSearch, onSearchSubmit }) {
  return (
    <header>
      <div className="logo">
        <img id="logo" src="src/assets/logo.png" alt="Logo" />
        <span>Recipe Book</span>
      </div>
      <nav className="navbar" id="navbar">
        <a href="/">Home</a>
        <a href="#add-recipe" id="add-recipe-link">
          Add Recipe
        </a>
      </nav>
      <div id="search-bar">
        <input
          type="text"
          id="filter-input"
          placeholder="Search by title or cu   isine..."
          onChange={onSearch}
        />
        <button onClick={onSearchSubmit}>Search</button>
      </div>
    </header>
  );
}

function App() {
  const [addedRecipes, setAddedRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredRecipesRef = useRef(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleSearchSubmit = async () => {
    if (!searchTerm) return;

    const response = await fetch(
      `http://localhost:5118/api/recipes/search?term=${searchTerm}`
    );
    if (response.ok) {
      const results = await response.json();
      setFilteredRecipes(results);

      if (results.length > 0 && filteredRecipesRef.current) {
        filteredRecipesRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.error("Failed to fetch recipes");
    }
  };

  const handleAddRecipe = (newRecipe) => {
    setAddedRecipes([...addedRecipes, newRecipe]);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} onSearchSubmit={handleSearchSubmit} />
      <main>
        <h2>Recipe Collection</h2>
        <div ref={filteredRecipesRef}>
          <FilteredRecipes recipes={filteredRecipes} />
        </div>
        <RecipeSection title="Breakfast" categoryId={1} />
        <RecipeSection title="Dinner" categoryId={2} />
        <RecipeSection title="Dessert" categoryId={3} />
        <RecipeForm onAddRecipe={handleAddRecipe} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
