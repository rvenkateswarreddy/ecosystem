import React, { useState, useEffect } from "react";

const SustainabilityTips = () => {
  const tips = [
    {
      tip: "Switch off lights when not in use.",
      description:
        "Turning off lights when they're not needed is an easy way to save energy and reduce electricity bills. Over time, this can significantly lower your carbon footprint, helping the environment.",
    },
    {
      tip: "Walk or cycle short distances instead of driving.",
      description:
        "By walking or cycling, you not only reduce your carbon emissions but also improve your physical health. These small lifestyle changes contribute towards a greener and healthier planet.",
    },
    {
      tip: "Unplug electronics when not in use to save energy.",
      description:
        "Many devices still consume electricity even when turned off. Unplugging them when not in use helps prevent unnecessary energy consumption, reducing your environmental impact.",
    },
    {
      tip: "Use reusable bags instead of plastic ones.",
      description:
        "Switching to reusable bags can drastically cut down on plastic waste. This simple habit protects marine life and reduces pollution caused by single-use plastic bags.",
    },
    {
      tip: "Eat more plant-based meals to reduce carbon emissions.",
      description:
        "The production of plant-based foods generally requires fewer resources than meat. By incorporating more plant-based meals into your diet, you can help reduce the environmental strain caused by livestock farming.",
    },
  ];

  const [currentTip, setCurrentTip] = useState({ tip: "", description: "" });

  useEffect(() => {
    // Set a random sustainability tip each week
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setCurrentTip(randomTip);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
        <h3 className="text-3xl font-bold text-green-600 mb-4">
          Sustainability Tip of the Week
        </h3>
        <p className="text-xl font-medium text-gray-800 mb-2">
          {currentTip.tip}
        </p>
        <p className="text-lg text-gray-600">{currentTip.description}</p>
        <div className="mt-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
            onClick={() => {
              const randomTip = tips[Math.floor(Math.random() * tips.length)];
              setCurrentTip(randomTip);
            }}
          >
            Get Another Tip
          </button>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityTips;
