import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault;
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassWord = (e) => {
    e.preventDefault;
    setPassword(e.target.value);
  };

  const handlePhone = (e) => {
    e.preventDefault;
    setPhone(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("userDetails", [email, phone, password]);
  }, [email, password, phone]);

  const handleSignup = () => {
    if (email !== "" && phone !== "" && password !== "") {
      setTimeout(() => {
        navigate("/success");
      }, 500);
    }
  };

  return (
    <div className="bg-[url('./Assets/meal-1339061_1280.jpg')] bg-no-repeat bg-cover bg-center h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0 bg-black bg-opacity-70 rounded text-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <h1 className="text-center text-4xl font-medium mb-5">Signup</h1>

              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  id="email"
                  placeholder="Example@123.com"
                  className="bg-zinc-700 px-2 py-1.5 focus:ring focus:ring-zinc-400 focus:rounded outline-none"
                  onChange={(e) => handleEmail(e)}
                />
              </div>

              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="Phone">Phone (recommended)</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => handlePhone(e)}
                  id="Phone"
                  placeholder="+123 345 456"
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
                  required
                  id="Remember"
                  className="bg-zinc-700 px-2 py-1.5  focus:ring-offset-neutral-500"
                />
                <label htmlFor="Remember">Remember me</label>
              </div>

              <button
                onClick={handleSignup}
                className="w-full mt-6 px-4 py-2 text-white font-bold bg-red-400 rounded"
              >
                Signup
              </button>
            </div>
            <div className="flex justify-center space-x-1">
              <p>Have One ?</p>
              <Link className="rounded underline text-blue-400" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
