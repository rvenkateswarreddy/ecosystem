import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminSales = () => {
  const [sales, setSales] = useState([]);
  const [message, setMessage] = useState("");
  const [loadingCards, setLoadingCards] = useState({}); // Track loading state per card

  useEffect(() => {
    const fetchSales = async () => {
      setMessage("Fetching sales data...");
      try {
        const response = await axios.get("http://localhost:4000/getadminsales");
        setSales(response.data.sales);
        setMessage("");
      } catch (error) {
        console.error("Error fetching sales:", error.message);
        setMessage("Error fetching sales data.");
      }
    };

    fetchSales();
  }, []);

  const handleBuy = async (e, sale) => {
    e.preventDefault();

    const saleId = sale._id;

    setLoadingCards((prev) => ({
      ...prev,
      [saleId]: true, // Set loading state for the specific card
    }));

    try {
      const response = await axios.post("http://localhost:4000/create-order", {
        id: sale.farmerId,
        plants: sale.plants,
      });

      const { orderId, amount } = response.data;

      const options = {
        key: "rzp_test_KStLt14203VFVn", // Replace with your Razorpay key
        amount: amount * 100,
        currency: "INR",
        name: "Bulk Plant Order",
        description: "Payment for bulk plants",
        order_id: orderId,
        handler: async (response) => {
          await axios.post("http://localhost:4000/payment-success", {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            id: sale.farmerId,
          });

          await axios.put(
            `http://localhost:4000/update-sale-status/${saleId}`,
            {
              status: "Completed",
            }
          );

          setMessage("Payment successful");
          setSales((prevSales) =>
            prevSales.map((s) =>
              s._id === saleId ? { ...s, status: "Completed" } : s
            )
          );
        },
        prefill: {
          name: sale.farmerId?.fullname,
          email: sale.farmerId?.email,
        },
        notes: {
          address: "Tirupati",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      setMessage("Error creating order: " + error.message);
    } finally {
      setLoadingCards((prev) => ({
        ...prev,
        [saleId]: false, // Reset loading state for the specific card
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Plant Sales</h1>
      {message && (
        <p className="text-center text-yellow-400 font-semibold">{message}</p>
      )}
      {sales.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sales.map((sale) => (
            <div
              key={sale._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {sale.farmerId?.fullname || "Unknown"}{" "}
                <span className="text-gray-400 text-sm">
                  ({sale.farmerId?.email || "N/A"})
                </span>
              </h3>
              <div className="mb-4">
                {sale.plants.map((plant, index) => (
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
                Total Amount: ₹{sale.totalAmount}
              </div>
              <div
                className={`py-1 px-2 rounded-lg text-xs font-bold mb-4 ${
                  sale.status === "Pending"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-green-500 text-gray-900"
                }`}
              >
                {sale.status}
              </div>
              <div className="text-gray-500 text-sm">
                Date: {new Date(sale.createdAt).toLocaleString()}
              </div>
              {sale.status === "Pending" ? (
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={(e) => handleBuy(e, sale)}
                  disabled={loadingCards[sale._id] || false}
                >
                  {loadingCards[sale._id] ? "Processing..." : "Buy"}
                </button>
              ) : (
                <button
                  className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Already Bought
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No sales recorded yet.</p>
      )}
    </div>
  );
};

export default AdminSales;
