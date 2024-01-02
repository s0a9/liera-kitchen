import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import Order from "./Order/Order";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "./Contact/Contact";
import Reserv from "./Reservation/Reserv";
import { Container } from "react-bootstrap";
import ShoppingCart from "../Components/ShoppingCart";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="p-3 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Reservation" element={<Reserv />} />
        <Route path="/Cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Landing;
