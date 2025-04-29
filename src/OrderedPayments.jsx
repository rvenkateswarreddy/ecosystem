import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderedPayments = () => {
  const [orderedPayments, setOrderedPayments] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOrderedPayments = async () => {
      setMessage("Fetching ordered payments...");
      try {
        const response = await axios.get(
          "https://ecobackend-kas3.onrender.com/ordered-payments"
        );
        setOrderedPayments(response.data.data);
        setMessage("");
      } catch (error) {
        console.error("Error fetching ordered payments:", error.message);
        setMessage("Error fetching ordered payments.");
      }
    };

    fetchOrderedPayments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Ordered Payments</h1>
      {message && (
        <p className="text-center text-yellow-400 font-semibold">{message}</p>
      )}
      {orderedPayments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderedPayments.map((order) => (
            <div
              key={order._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {order.user?.fullname || "Unknown"}{" "}
                <span className="text-gray-400 text-sm">
                  ({order.user?.email || "N/A"})
                </span>
              </h3>
              <div className="mb-4">
                {order.plants.map((plant, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <img
                      src={plant.imageUrl}
                      alt={plant.name}
                      className="w-24 h-24 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <p className="text-gray-300">
                        {plant.name} - {plant.quantity} x ₹{plant.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-4 font-semibold text-green-400">
                Total Amount: ₹{order.totalAmount}
              </div>
              <div className="py-1 px-2 rounded-lg text-xs font-bold mb-4 bg-green-500 text-gray-900">
                Payment Status: {order.paymentDetails.payment_status}
              </div>
              <div className="text-gray-500 text-sm">
                Date: {new Date(order.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No ordered payments recorded yet.</p>
      )}
    </div>
  );
};

export default OrderedPayments;
