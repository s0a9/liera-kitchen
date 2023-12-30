import React, { useState } from "react";
import "./home.css";

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
    <div className="py-10 px-20 relative">
      <button
        onClick={handlePrevClick}
        className="absolute text-white text-3xl left-[5.5rem] top-[16rem]"
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <div
        className={`bg-img${currentImageIndex} transition-all bg-cover bg-center bg-no-repeat w-full h-[50vh] shadow-bg-shadow`}
      ></div>
      <button
        onClick={handleNextClick}
        className="absolute text-white text-2xl right-[5.5rem] top-[16rem]"
        aria-label="Next Image"
      >
        &gt;
      </button>
    </div>
  );
};

export default Home;
