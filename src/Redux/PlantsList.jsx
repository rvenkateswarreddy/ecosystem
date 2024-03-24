import React from "react";
import { plantsData } from "./plantdata";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./plantSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlantsList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = (plant) => {
    dispatch(
      addToCart({
        id: plant.id,
        name: plant.name,
        image: plant.image,
        details: plant.details,
        price: plant.price,
      })
    );
    toast.success(`${plant.name} added to cart`);
  };

  const handleRemoveFromCart = (plant) => {
    dispatch(removeFromCart({ id: plant.id }));
    toast.error(`${plant.name} removed from cart`);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1 className="text-5xl m-5">TREE SHOP</h1>
      <div className="grid mx-auto mt-10 grid-cols-3">
        {plantsData.map((each, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-4"
          >
            <img className="w-full" src={each.image} alt={each.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{each.name}</div>
              <p className="text-gray-700 text-base">{each.details}</p>
              <p className="text-gray-700 text-base">Price: ${each.price}</p>
              <div className="first-letter:mt-4">
                <button
                  onClick={() => handleAddToCart(each)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Add +
                </button>
                <button
                  onClick={() => handleRemoveFromCart(each)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xl">Total Price: ${calculateTotalPrice()}</div>
      <ToastContainer />
    </div>
  );
};

export default PlantsList;
