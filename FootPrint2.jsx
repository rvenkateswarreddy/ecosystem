import React, { useState } from "react";

const FootPrint2 = () => {
  const [electricityUsage, setElectricityUsage] = useState("");
  const [carMiles, setCarMiles] = useState("");
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const calculateFootprint = () => {
    const footprint = electricityUsage * 0.5 + carMiles * 0.3; // Sample calculation
    setCarbonFootprint(footprint);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Carbon emission Calculator</h2>
      <div className="mb-4">
        <label htmlFor="electricity" className="block mb-2">
          Electricity Usage (kWh):
        </label>
        <input
          type="number"
          id="electricity"
          value={electricityUsage}
          onChange={(e) => setElectricityUsage(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="carMiles" className="block mb-2">
          Car Miles:
        </label>
        <input
          type="number"
          id="carMiles"
          value={carMiles}
          onChange={(e) => setCarMiles(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <button
        onClick={calculateFootprint}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Calculate
      </button>
      {carbonFootprint > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Your Carbon Footprint:{" "}
            <span className="font-bold">{carbonFootprint.toFixed(2)}</span> CO2e
          </h3>
        </div>
      )}
    </div>
  );
};

export default FootPrint2;
