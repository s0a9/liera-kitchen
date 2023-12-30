import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Order from "./Order/Order";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div className="p-3 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Landing;
