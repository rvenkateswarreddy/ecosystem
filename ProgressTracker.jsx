import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ProgressTracker = () => {
  const [footprintHistory, setFootprintHistory] = useState([
    50, 45, 40, 38, 35,
  ]);

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Carbon Footprint (kg CO2e)",
        data: footprintHistory,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.3, // Adds smoothness to the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures custom height works
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-4 max-w-lg mx-auto">
      {/* Centering the heading with better styles */}
      <h3 className="text-2xl font-bold mb-6 text-center  text-green-600">
        Your Carbon Footprint Progress
      </h3>

      {/* Decreasing the size of the chart */}
      <div className="relative" style={{ height: "500px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressTracker;
