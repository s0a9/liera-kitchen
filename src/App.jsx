import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Success from "./Pages/Success/Success";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Landing />
    </div>
  );
}

export default App;

/* 
<>



</>
*/
