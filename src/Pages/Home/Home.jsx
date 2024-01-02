import React, { useState } from "react";
import PropTypes from "prop-types";
import "./home.css";
import ReviewsSection from "../../Components/Rating";
import ProductCart from "../../Components/ProductCart";
import AboutUs from "../../Components/AboutUs";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 4 - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < 4 - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <section className="py-10 px-6 md:px-28 relative">
        <button
          onClick={handlePrevClick}
          className="absolute flex justify-center align-middle text-white text-3xl left-[1rem] md:left-[10rem] top-[18rem] md:top-[18rem] hover:bg-red-500 rounded-full px-2 hover:bg-opacity-60"
          aria-label="Previous Image"
        >
          &lt;
        </button>
        <div
          className={`bg-img${currentImageIndex} transition-all bg-cover bg-center bg-no-repeat w-full h-[50vh] md:h-[50vh] shadow-bg-shadow`}
        ></div>
        <button
          onClick={handleNextClick}
          className="absolute flex justify-center text-white text-2xl right-[1rem] md:right-[10rem] top-[17rem] md:top-[17rem] hover:bg-red-500 rounded-full px-2 hover:bg-opacity-60"
          aria-label="Next Image"
        >
          &gt;
        </button>
      </section>

      <section className="flex flex-col items-center justify-center lg:mt-40 lg:mb-5">
        <h1 className="font-semibold text-4xl text-red-300 mb-5">
          Our Top Sales
        </h1>
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCart />
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto">
          <ReviewsSection />
        </div>
      </section>

      <AboutUs />
    </div>
  );
};

export default Home;
