import React, { useState } from "react";
import PropTypes from "prop-types";
import "./home.css";
import ReviewsSection from "../../Components/Rating";
import ProductCart from "../../Components/ProductCart";
import AboutUs from "../../Components/AboutUs";

const Card = ({
  type,
  title,
  description,
  discount,
  itemName,
  averageRating,
  totalReviews,
}) => {
  return (
    <div className="max-w-lg overflow-hidden bg-red-200 mx-auto bg-opacity-45">
      {type === "promotion" && (
        <div className="px-6 py-4 w-80 flex flex-col ">
          <h3 className="font-bold text-xl mb-3">{title}</h3>
          <p className="text-gray-700 mb-2 text-base">{description}</p>
          <p className="text-gray-700 mb-1 text-base">
            Discount: {discount}% off
          </p>
          <button className="bg-red-400 text-white font-bold py-2 px-4 rounded-full mt-3">
            Claim Now
          </button>
        </div>
      )}
      {type === "rating" && (
        <div className="px-6 py-4 w-80 flex flex-col">
          <h3 className="font-bold text-xl mb-3">{itemName}</h3>
          <p className="text-gray-700 mb-2 text-base">
            Average Rating: {averageRating}
          </p>
          <p className="text-gray-700 mb-1 text-base">
            Total Reviews: {totalReviews}
          </p>
          <button className="bg-red-400 text-white font-bold py-2 px-4 rounded-full mt-4">
            Write a Review
          </button>
        </div>
      )}
    </div>
  );
};

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

      <section className="pt-20 px-6 md:px-36">
        <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            type="promotion"
            title="Special Offer"
            description="Get 20% off on all orders"
            discount={20}
          />
          <Card
            type="promotion"
            title="Flash Sale"
            description="Limited time offer! Buy one get one free"
            discount={100}
          />
          <Card
            type="rating"
            itemName="Deluxe Pizza"
            averageRating={4.5}
            totalReviews={120}
          />
          <Card
            type="rating"
            itemName="Classic Burger"
            averageRating={3.8}
            totalReviews={75}
          />
        </div>
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

Card.propTypes = {
  type: PropTypes.oneOf(["promotion", "rating"]).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  discount: PropTypes.number,
  itemName: PropTypes.string,
  averageRating: PropTypes.number,
  totalReviews: PropTypes.number,
};
