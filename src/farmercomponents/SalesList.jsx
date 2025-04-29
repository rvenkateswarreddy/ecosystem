import React, { useEffect, useState } from "react";
import axios from "axios";

const SalesList = () => {
  const [sales, setSales] = useState([]);
  const [message, setMessage] = useState("");
  const farmerId = localStorage.getItem("id");

  useEffect(() => {
    const fetchSales = async () => {
      setMessage("Fetching sales data...");
      try {
        const response = await axios.get(
          `https://ecobackend-kas3.onrender.com/getsales/${farmerId}`
        );
        setSales(response.data.sales);
        setMessage("");
      } catch (error) {
        console.error("Error fetching sales:", error.message);
        setMessage("Error fetching sales data.");
      }
    };

    fetchSales();
  }, []);
  console.log(sales);
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Plant Sales</h1>
      {message && (
        <p className="text-center text-yellow-400 font-semibold">{message}</p>
      )}
      {sales.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sales.map((sale) => (
            <div
              key={sale._id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <h2 className="text-xl font-bold mb-2">
                {sale.farmerId?.fullname || "Unknown"} (
                {sale.farmerId?.email || "N/A"})
              </h2>
              <div className="mb-4">
                {sale.plants.map((plant, index) => (
                  <div key={index} className="mb-2">
                    {plant.imageUrl && (
                      <img
                        src={plant.imageUrl}
                        alt={plant.name}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                    )}
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">
                        {plant.name}
                      </span>{" "}
                      - {plant.quantity} x ₹{plant.price}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-semibold text-green-400 text-lg">
                Total: ₹{sale.totalAmount}
              </p>
              <p className="text-sm mt-2">
                Status:{" "}
                <span
                  className={`px-2 py-1 rounded-lg text-xs font-bold ${
                    sale.status === "Pending"
                      ? "bg-yellow-500 text-gray-900"
                      : "bg-green-500 text-gray-900"
                  }`}
                >
                  {sale.status}
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Date: {new Date(sale.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No sales recorded yet.</p>
      )}
    </div>
  );
};

export default SalesList;
