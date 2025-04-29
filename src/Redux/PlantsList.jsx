import React, { useEffect, useState } from "react";
import axios from "axios";

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [purchasedPlants, setPurchasedPlants] = useState([]); // Track purchased plants

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get(
          "https://ecobackend-kas3.onrender.com/userplants"
        );
        setPlants(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch plants.");
        setLoading(false);
      }
    };

    const fetchPurchasedPlants = async () => {
      try {
        const userId = localStorage.getItem("id");
        const response = await axios.get(
          `https://ecobackend-kas3.onrender.com/purchased-plants/${userId}`
        );
        setPurchasedPlants(response.data);
      } catch (error) {
        console.error("Error fetching purchased plants:", error);
      }
    };

    fetchPlants();
    fetchPurchasedPlants();
  }, []);

  const handleBuy = async (plant) => {
    try {
      const userId = localStorage.getItem("id");
      const orderPayload = {
        id: userId,
        plants: [
          {
            name: plant.name,
            price: plant.price,
            imageUrl: plant.imageUrl,
            quantity: 1, // Default to buying 1 quantity
          },
        ],
      };

      const response = await axios.post(
        "https://ecobackend-kas3.onrender.com/create-order2",
        orderPayload
      );

      const { orderId, amount } = response.data;

      const options = {
        key: "rzp_test_KStLt14203VFVn", // Replace with your Razorpay Key ID
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "Plant Purchase",
        description: `Order ID: ${orderId}`,
        order_id: orderId,
        handler: async function (response) {
          // Handle payment success
          const paymentSuccessPayload = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            id: userId,
          };
          await axios.post(
            "https://ecobackend-kas3.onrender.com/payment-success2",
            paymentSuccessPayload
          );
          alert("Payment successful!");
        },
        prefill: {
          name: "GREEN INVESTMENT",
          email: "greeninvestment@gmail.com", // Replace with the user's email
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error during purchase:", error);
      alert("Failed to initiate purchase.");
    }
  };

  const isPlantPurchased = (plantId) => {
    // Check if the plant has already been purchased by the user
    return purchasedPlants.some((p) => p.plantId === plantId);
  };

  if (loading) {
    return <div>Loading plants...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Plant List</h1>
      {plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
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
              <p className="text-gray-300 mb-2">Price: ₹{plant.price}</p>
              <p className="text-gray-300 mb-2">
                Total Price: ₹{plant.price * plant.quantity}
              </p>
              <button
                onClick={() => handleBuy(plant)}
                disabled={isPlantPurchased(plant._id)} // Disable if already purchased
                className={`mt-4 py-2 px-4 rounded transition duration-300 ${
                  isPlantPurchased(plant._id)
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {isPlantPurchased(plant._id) ? "Already Bought" : "Buy"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No plants available.</p>
      )}
    </div>
  );
};

export default PlantList;
