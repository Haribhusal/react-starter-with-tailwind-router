import React from "react";
import CategorySlider from "../components/CategorySlider";
import Featured from "../components/Featured";
import ImageSlider from "../components/ImageSlider";
import SearchBar from "../components/SearchBar";

import NewsPreview from "../components/NewsPreview";
const Home = () => {
  return (
    <main>
      <section className="hero flex">
        <div className="w-[70%]">
          <ImageSlider />
        </div>
        <div className="w-[30%]">
          <NewsPreview className="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
