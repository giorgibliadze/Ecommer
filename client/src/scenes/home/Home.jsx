import React from "react";
import MainCarousel from "./MainCarousel";
import SoppingList from "./SoppingList";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <SoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
