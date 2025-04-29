import React, { useEffect, useState } from "react";
import axios from "axios";

const PurchasedPlants = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userId = localStorage.getItem("id"); // Fetch user ID from local storage

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `https://ecobackend-kas3.onrender.com/order-details/${userId}`
        );
        setOrderDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch order details.");
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [userId]);

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Order Details</h1>

      {orderDetails.length > 0 ? (
        orderDetails.map((order) => (
          <div
            key={order._id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
          >
            <h3 className="text-xl font-semibold mb-2">
              Order ID: {order._id}
            </h3>
            <p className="text-gray-300 mb-2">Status: {order.status}</p>
            <p className="text-gray-300 mb-2">
              Total Amount: ₹{order.totalAmount}
            </p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Plants Purchased</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {order.plants.map((plant) => (
                  <div
                    key={plant._id}
                    className="bg-gray-700 p-4 rounded-lg shadow-lg"
                  >
                    <img
                      src={plant.imageUrl}
                      alt={plant.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h5 className="text-xl font-semibold mb-2">{plant.name}</h5>
                    <p className="text-gray-300">Price: ₹{plant.price}</p>
                    <p className="text-gray-300">Quantity: {plant.quantity}</p>
                    <p className="text-gray-300">
                      Total Price: ₹{plant.totalPrice}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Payment Details</h4>
              <p className="text-gray-300 mb-2">
                Payment Status: {order.paymentDetails.payment_status}
              </p>
              <p className="text-gray-300 mb-2">
                Payment ID: {order.paymentDetails.razorpay_payment_id}
              </p>
              <p className="text-gray-300 mb-2">
                Order ID: {order.paymentDetails.razorpay_order_id}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-gray-300">
                Payment Amount: ₹{order.paymentDetails.amount}
              </p>
              <p className="text-gray-300">
                Created At: {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-4">No orders found.</p>
      )}
    </div>
  );
};

export default PurchasedPlants;
