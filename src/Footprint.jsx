import React, { useState } from "react";

const Footprint = () => {
  // State variables to store user inputs and calculated carbon footprint
  const [energyConsumption, setEnergyConsumption] = useState("");
  const [transportation, setTransportation] = useState("");
  const [diet, setDiet] = useState("");
  const [wasteManagement, setWasteManagement] = useState("");
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  // Function to calculate carbon footprint based on user inputs
  const calculateFootprint = () => {
    // Perform calculations based on user inputs (This is a simplified version, actual calculations may vary)
    let footprint = 0;
    if (energyConsumption) {
      footprint += parseFloat(energyConsumption);
    }
    if (transportation) {
      footprint += parseFloat(transportation);
    }
    if (diet) {
      footprint += parseFloat(diet);
    }
    if (wasteManagement) {
      footprint += parseFloat(wasteManagement);
    }

    // Update state with the calculated carbon footprint
    setCarbonFootprint(footprint);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Carbon emission Calculator</h2>
      <div className="mb-4">
        <label htmlFor="energy" className="block mb-2">
          Energy Consumption (kg CO2/year):
        </label>
        <input
          type="number"
          id="energy"
          value={energyConsumption}
          onChange={(e) => setEnergyConsumption(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="transportation" className="block mb-2">
          Transportation (kg CO2/year):
        </label>
        <input
          type="number"
          id="transportation"
          value={transportation}
          onChange={(e) => setTransportation(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="diet" className="block mb-2">
          Diet (kg CO2/year):
        </label>
        <input
          type="number"
          id="diet"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="waste" className="block mb-2">
          Waste Management (kg CO2/year):
        </label>
        <input
          type="number"
          id="waste"
          value={wasteManagement}
          onChange={(e) => setWasteManagement(e.target.value)}
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
            Your Carbon Footprint: {carbonFootprint} kg CO2/year
          </h3>
        </div>
      )}
    </div>
  );
};

export default Footprint;
