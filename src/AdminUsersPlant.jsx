import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsersPlant = () => {
  const [completedOrders, setCompletedOrders] = useState([]);
  const [message, setMessage] = useState("");
  const [releasedPlants, setReleasedPlants] = useState([]); // Track released plants

  useEffect(() => {
    const fetchCompletedOrders = async () => {
      setMessage("Fetching completed orders...");
      try {
        const response = await axios.get(
          "https://ecobackend-kas3.onrender.com/completed-orders"
        );
        setCompletedOrders(response.data);
        setMessage("");
      } catch (error) {
        console.error("Error fetching completed orders:", error.message);
        setMessage("Error fetching completed orders.");
      }
    };

    fetchCompletedOrders();
  }, []);

  const handleReleaseToUserStore = async (plant) => {
    try {
      const response = await axios.post(
        "https://ecobackend-kas3.onrender.com/release-to-userstore",
        plant
      );
      setReleasedPlants([...releasedPlants, plant._id]); // Mark plant as released
      alert(`Successfully released ${plant.name} to UserStore!`);
    } catch (error) {
      console.error("Error releasing to UserStore:", error.message);
      alert("Already release to userstore");
    }
  };

  const handlePriceChange = (index, newPrice) => {
    const updatedOrders = [...completedOrders];
    updatedOrders[index].price = parseFloat(newPrice);
    setCompletedOrders(updatedOrders);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Completed Orders</h1>
      {message && (
        <p className="text-center text-yellow-400 font-semibold">{message}</p>
      )}
      {completedOrders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedOrders.map((plant, index) => (
            <div
              key={plant._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={plant.imageUrl}
                alt={plant.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
              <p className="text-gray-300 mb-2">Quantity: {plant.quantity}</p>
              <p className="text-gray-300 mb-2">
                Total Price: ₹{plant.totalPrice}
              </p>
              <div className="mb-4">
                <label
                  htmlFor={`price-${plant._id}`}
                  className="block text-sm font-semibold mb-1"
                >
                  Price (₹):
                </label>
                <input
                  type="number"
                  id={`price-${plant._id}`}
                  value={plant.price}
                  onChange={(e) => handlePriceChange(index, e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg p-2"
                />
              </div>
              {releasedPlants.includes(plant._id) ? (
                <button
                  disabled
                  className="bg-gray-500 text-gray-300 font-bold py-2 px-4 rounded-lg w-full cursor-not-allowed"
                >
                  Already Sent to UserStore
                </button>
              ) : (
                <button
                  onClick={() => handleReleaseToUserStore(plant)}
                  className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded-lg w-full"
                >
                  Release to UserStore
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No completed orders available.</p>
      )}
    </div>
  );
};

export default AdminUsersPlant;
