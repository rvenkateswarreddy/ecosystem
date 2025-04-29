import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          Payment Successful!
        </h2>
        <p className="mb-4">Thank you for your order.</p>
        <Link to="/admindashboard/plantsales">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Place Another Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
