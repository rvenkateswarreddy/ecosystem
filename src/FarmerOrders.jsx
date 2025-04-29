import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation

const FarmerOrders = () => {
  const id = localStorage.getItem("id"); // Get user ID from localStorage
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/orders/${id}`);
        setOrders(response.data.data);
      } catch (err) {
        console.error("Error fetching orders:", err.message);
        setError("Unable to fetch orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [id]);

  const generatePDF = (order) => {
    const doc = new jsPDF();

    // Add Order ID and other details to PDF
    doc.setFontSize(20);
    doc.text(`Order ID: ${order._id}`, 10, 10);

    doc.setFontSize(12);
    doc.text(`Total Amount: ₹${order.totalAmount}`, 10, 20);
    doc.text(`Payment Status: ${order.paymentDetails.payment_status}`, 10, 30);
    doc.text(
      `Order Date: ${new Date(order.createdAt).toLocaleString()}`,
      10,
      40
    );

    // Add plant details
    doc.text("Plant Details:", 10, 50);
    order.plants.forEach((plant, index) => {
      doc.text(
        `${plant.name} - ${plant.quantity} x ₹${plant.price}`,
        10,
        60 + index * 10
      );
    });

    // Save the PDF with filename as Order ID
    doc.save(`receipt_${order._id}.pdf`);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (orders.length === 0) {
    return (
      <p className="text-center text-yellow-500">
        No orders found for this user.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        you successuful Orders
      </h1>
      <div className="max-w-4xl mx-auto">
        {orders?.map((order) => (
          <div
            key={order._id}
            className="bg-gray-800 p-4 mb-4 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-bold">Order ID: {order._id}</h3>
            <p className="text-gray-300">Total Amount: ₹{order.totalAmount}</p>
            <p
              className={`text-sm font-bold ${
                order.paymentDetails.payment_status === "success"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              Payment Status: {order.paymentDetails.payment_status}
            </p>
            <p className="text-gray-400">
              Order Date: {new Date(order.createdAt).toLocaleString()}
            </p>
            <div className="mt-2">
              <h4 className="text-gray-300 font-semibold">Plant Details:</h4>
              {order.plants.map((plant, index) => (
                <p key={index} className="text-gray-400">
                  {plant.name} - {plant.quantity} x ₹{plant.price}
                </p>
              ))}
            </div>

            {/* Print Receipt Button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => generatePDF(order)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Print Receipt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerOrders;
