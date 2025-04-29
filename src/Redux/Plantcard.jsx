import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cart?.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {cart?.map((item) => (
            <div
              key={item._id}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>Quantity: {item.cartQuantity}</p>
              <p>Price per Unit: ₹{item.price}</p>
              <p>Total Price: ₹{item.cartQuantity * item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
