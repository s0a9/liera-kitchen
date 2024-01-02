import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault;
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassWord = (e) => {
    e.preventDefault;
    setPassword(e.target.value);
  };

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const handleValidation = () => {
    if (userDetails === "") {
      Swal.fire({
        icon: "error",
        title: "No User Found",
        showConfirmButton: false,
      });
      return;
    }
    if (userDetails.email !== email && userDetails.password !== password) {
      Swal.fire({
        icon: "error",
        title: "Invalid Username/Passowrd",
        showConfirmButton: false,
      });
      return;
    }
    setTimeout(() => {
      setAuth(true);
      Swal.fire({
        icon: "Loging in",
        title: "Verified User",
        showConfirmButton: false,
        timer: 500,
      });
      navigate("/");
    }, 600);
  };

  return (
    <div className="bg-[url('./Assets/meal-1339061_1280.jpg')] bg-no-repeat bg-cover bg-center h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0 bg-black bg-opacity-70 rounded text-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <h1 className="text-center text-4xl font-medium mb-5">
                Welcome Back
              </h1>

              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmail(e)}
                  id="email"
                  placeholder="Example@123.com"
                  className="bg-zinc-700 px-2 py-1.5 focus:ring focus:ring-zinc-400 focus:rounded outline-none"
                />
              </div>

              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  value={password}
                  onChange={(e) => handlePassWord(e)}
                  id="Password"
                  placeholder="Password"
                  className="bg-zinc-700 px-2 py-1.5 focus:ring focus:ring-zinc-400 focus:rounded outline-none"
                />
              </div>

              <div className="flex align-middle space-x-2">
                <input
                  type="checkbox"
                  id="Remember"
                  className="bg-zinc-700 px-2 py-1.5  focus:ring-offset-neutral-500"
                />
                <label htmlFor="Remember">Remember me</label>
              </div>

              <button
                className="w-full mt-6 px-4 py-2 text-white font-bold bg-red-400 rounded"
                onClick={handleValidation}
              >
                Login
              </button>
            </div>
            <div className="flex justify-center space-x-3">
              <p>Create one now ?</p>
              <Link className="rounded underline text-blue-400" to="/signup">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
