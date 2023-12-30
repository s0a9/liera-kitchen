import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkmark } from "react-checkmark";

const Success = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  return (
    <div className="bg-[url('./Assets/meal-1339061_1280.jpg')] bg-no-repeat bg-cover bg-center h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0 bg-black bg-opacity-90 rounded text-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <Checkmark size="xxLarge" />

              <h1 className="text-center mt-3 text-xl font-medium mb-5">
                Success
              </h1>

              <p className="text-center mt-3 mb-1 text-3xl  font-bold">
                Thanks for Signing up.
              </p>

              <button
                className="w-full mt-6 px-4 py-2 text-white font-bold bg-red-400 rounded"
                onClick={() => navigateToLogin()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
