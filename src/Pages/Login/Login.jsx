import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/home");
  };
  return (
    <div className="bg-[url('./Assets/meal-1339061_1280.jpg')] bg-no-repeat bg-cover bg-center h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0 bg-black bg-opacity-70 rounded text-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="">
              <h1 className="text-center text-4xl font-medium mb-5">
                Welcome Back
              </h1>

              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Example@123.com"
                  className="bg-zinc-700 px-2 py-1.5 focus:ring focus:ring-zinc-400 focus:rounded outline-none"
                />
              </div>

              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
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

              <button className="w-full mt-6 px-4 py-2 text-white font-bold bg-red-400 rounded" onClick={() => navToHome()}>
                Login
              </button>
            </form>
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
