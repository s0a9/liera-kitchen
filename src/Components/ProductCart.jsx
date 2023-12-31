import React from "react";
import Salmon from "../Assets/Foods/1.jpg";
import { TopSales } from "./TopSales";

export const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="ml-2 transition-all group-hover:translate-x-2"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );
};

const ProductCart = () => {
  return TopSales.map(({ name, image, price, _id }) => {
    return (
      <div className="w-full" key={_id.$oid}>
        <div className="p-4 text-center bg-gray-100 rounded shadow">
          <div className="block mb-2" href="#">
            <div className="relative overflow-hidden">
              <div className="mb-5 overflow-hidden">
                <img
                  className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
                  src={image}
                  alt={`${name}`}
                />
              </div>
            </div>
            <a href="#">
              <h3 className="mb-2 text-xl font-bold ">{name}</h3>
            </a>
            <p className="text-lg font-bold text-black ">
              <span>${price}</span>
            </p>

            <button className="flex items-center justify-center mx-auto mt-4 font-bold text-center text-red-500 group">
              Add to Cart
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default ProductCart;

//  <div className="w-full">
//   <div className="p-4 text-center bg-gray-100 rounded shadow">
//     <div className="block mb-2" href="#">
//       <div className="relative overflow-hidden">
//         <div className="mb-5 overflow-hidden">
//           <img
//             className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
//             src={Salmon}
//             alt="Salmon"
//           />
//         </div>
//       </div>
//       <a href="#">
//         <h3 className="mb-2 text-xl font-bold ">Salmon</h3>
//       </a>
//       <p className="text-lg font-bold text-black ">
//         <span>$9.89</span>
//       </p>

//       <button className="flex items-center justify-center mx-auto mt-4 font-bold text-center text-blue-500 group">
//         Add to Cart
//         <Arrow />
//       </button>
//     </div>
//   </div>
// </div>
