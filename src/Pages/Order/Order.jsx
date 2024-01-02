import React from "react";
import { Products } from "./products";
import StoreItem from "../../Components/StoreItem";

const Order = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Store</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {Products.map((product) => (
          <div key={product.id} className="bg-gray-100 shadow rounded-sm">
            <StoreItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
