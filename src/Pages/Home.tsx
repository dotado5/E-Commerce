import React from "react";
import Hero from "../Components/Hero";
import CategoriesSection from "../Components/CategoriesSection";
import PopularProductsSection from "../Components/PopularProductsSection";
import LatestProductsSection from "../Components/LatestProductsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <PopularProductsSection />
      <LatestProductsSection />
    </main>
  );
};

export default Home;
