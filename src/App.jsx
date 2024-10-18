import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <RecipeList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
