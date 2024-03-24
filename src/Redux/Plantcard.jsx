import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pie3 from "../assets/pie3.jpg";
import { removeFromCart } from "./plantSlice";

const Plantcard = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
    toast.error("Item removed from cart", {});
  };

  return (
    <div>
      <h1 className="text-5xl m-5">CART LIST</h1>
      <div className="grid mx-auto mt-10 grid-cols-3">
        {data.map((each, index) => {
          return (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-4"
            >
              <img className="w-full" src={each.image} alt={each.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{each.name}</div>
                <p className="text-gray-700 text-base">details</p>
                <p className="text-gray-700 text-base">Price: ${each.price}</p>
                <div className="first-letter:mt-4">
                  <button
                    onClick={() => handleRemove(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Plantcard;
