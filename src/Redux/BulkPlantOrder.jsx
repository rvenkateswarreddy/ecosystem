import React, { useState } from "react";
import axios from "axios";

const BulkPlantOrder = () => {
  const [plants, setPlants] = useState([
    { name: "", price: "", quantity: "", imageUrl: "" },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handlePlantChange = (index, e) => {
    const newPlants = [...plants];
    newPlants[index][e.target.name] = e.target.value;
    setPlants(newPlants);
    calculateTotalAmount(newPlants);
  };

  const addPlant = () => {
    setPlants([...plants, { name: "", price: "", quantity: "", imageUrl: "" }]);
  };

  const calculateTotalAmount = (updatedPlants) => {
    let total = 0;
    updatedPlants.forEach((plant) => {
      if (plant.price && plant.quantity) {
        total += parseFloat(plant.price) * parseInt(plant.quantity);
      }
    });
    setTotalAmount(total);
  };

  const id = localStorage.getItem("id");

  const handleSell = async () => {
    setMessage("Processing Sale...");

    const isValidObjectId = (id) => /^[a-f\d]{24}$/i.test(id);

    if (!isValidObjectId(id)) {
      setMessage("Invalid farmer ID format. Please provide a valid ID.");
      return;
    }

    try {
      const response = await axios.post(
        "https://ecobackend-kas3.onrender.com/add-sale",
        {
          plants,
          totalAmount,
          farmerId: id,
        }
      );

      if (response.status === 201) {
        setMessage("Request sent successfully to Green Investment Company!");
        console.log("Plant sale details:", response.data.plantSale);
        setPlants([{ name: "", price: "", quantity: "", imageUrl: "" }]);
        setTotalAmount(0);
      } else {
        setMessage("Failed to record sale. Please try again.");
      }
    } catch (error) {
      console.error("Error in processing sale:", error.message);
      setMessage("Error in processing sale: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white mb-6">Bulk Plant Order</h2>

        {message && (
          <p
            className={`mb-4 text-center text-lg ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}

        {plants.map((plant, index) => (
          <div key={index} className="mb-6">
            <label className="block text-gray-300 mb-2">Plant Name</label>
            <input
              type="text"
              name="name"
              value={plant.name}
              onChange={(e) => handlePlantChange(index, e)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-400"
              required
            />
            <label className="block text-gray-300 mt-4 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={plant.price}
              onChange={(e) => handlePlantChange(index, e)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-400"
              required
            />
            <label className="block text-gray-300 mt-4 mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={plant.quantity}
              onChange={(e) => handlePlantChange(index, e)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-400"
              required
            />
            <label className="block text-gray-300 mt-4 mb-2">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={plant.imageUrl}
              onChange={(e) => handlePlantChange(index, e)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addPlant}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-6 hover:bg-blue-600 transition duration-300"
        >
          Add Another Plant
        </button>

        <div className="mb-6">
          <label className="block text-xl text-gray-300">
            Total Amount: <span className="text-green-400">₹{totalAmount}</span>
          </label>
        </div>

        <button
          type="button"
          onClick={handleSell}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default BulkPlantOrder;
