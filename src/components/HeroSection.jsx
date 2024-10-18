import React from 'react';
import heroImage from '../assets/heromain.jpg'; 

function HeroSection() {
  return (
    <section className="hero">
      <div className="image-container">
        <img src={heroImage} alt="Hero Image" />
        <div className="overlay">
          <h1>Flavour Heaven</h1>
          <ul>
            <li>Search through a wide range of Recipes you like.</li>
            <li>Feel free to add any recipes you want.</li>
            <li>Feel free to Explore and Experiment.</li>
            <li>Happy Cooking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
