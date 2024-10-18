import React from "react";
import RecipeCard from "./RecipeCard.jsx";
import biryani from "../assets/biriyani.jpg";
import tacos from "../assets/tacos-pastor.jpg";
import sushi from "../assets/sushi-rolls.jpg";
import cookies from "../assets/chocolate-chip-cookies.jpg";
import pasta from "../assets/pasta.jpg";
import padThai from "../assets/pad-thai.jpg";

function RecipeList() {
  const recipes = [
    {
      image: biryani,
      title: "Vegetarian Biryani",
      cuisine: "Indian",
      instructions:
        "Marinate vegetables in yogurt and spices. Layer with partially cooked basmati rice, and cook on low heat until fully done. Serve with raita.",
      videoUrl: "https://youtu.be/SZByh7nXp1U?si=cNC9kCCE03jmMbLq",
    },
    {
      image: tacos,
      title: "Vegetarian Tacos",
      cuisine: "Mexican",
      instructions:
        "Sauté bell peppers, onions, and black beans with taco seasoning; serve in warm tortillas topped with avocado, salsa, and cilantro.",
      videoUrl: "https://youtu.be/pvSL_VsLb4w?si=ZwSIEaSeamMCDilw",
    },
    {
      image: sushi,
      title: "Sushi Rolls",
      cuisine: "Japanese",
      instructions:
        "Cook sushi rice. Roll rice and fillings in Nori seaweed. Slice and serve with soy sauce.",
      videoUrl: "https://youtu.be/nIoOv6lWYnk?si=iYJwhjOVnPS23fCT",
    },
    {
      image: cookies,
      title: "Chocolate Chip Cookies",
      cuisine: "American",
      instructions:
        "Cream butter and sugar, add eggs and flour, then mix in chocolate chips. Bake until golden.",
      videoUrl: "https://youtu.be/gFT3Cw3fAN4?si=Fuknvkq7jPdjdGfu",
    },
    {
      image: pasta,
      title: "Pasta Primavera",
      cuisine: "Italian",
      instructions:
        "Saute seasonal vegetables, mix with cooked pasta, and toss with olive oil and parmesan cheese.",
      videoUrl: "https://youtu.be/j1hAAcPay1w?si=a9altz6LLdewamii",
    },
    {
      image: padThai,
      title: "Pad Thai",
      cuisine: "Thai",
      instructions:
        "Soak rice noodles, stir-fry with shrimp or tofu, eggs, and bean sprouts in a tamarind sauce. Serve with lime and crushed peanuts.",
      videoUrl: "https://youtu.be/b7YnoRFuZ9o?si=KD2f9kE2qJWItRUd",
    },
  ];

  return (
    <section id="recipes">
      <h2>Spotlight Recipes</h2>
      <div id="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default RecipeList;
