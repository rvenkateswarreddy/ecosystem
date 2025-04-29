import React, { useEffect, useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const OrderCharts = () => {
  const [pieData, setPieData] = useState({});
  const [lineData, setLineData] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch data for charts from the backend
  useEffect(() => {
    const fetchChartsData = async () => {
      try {
        const pieResponse = await fetch("http://localhost:4000/pie-chart");
        const pieResult = await pieResponse.json();
        const lineResponse = await fetch("http://localhost:4000/line-chart");
        const lineResult = await lineResponse.json();

        // Pie chart data
        setPieData({
          labels: ["Completed", "Pending"],
          datasets: [
            {
              data: [pieResult.data.completed, pieResult.data.pending],
              backgroundColor: ["#4CAF50", "#FF5733"],
            },
          ],
        });

        // Line chart data
        setLineData({
          labels: lineResult.data.labels,
          datasets: [
            {
              label: "Total Amount",
              data: lineResult.data.data,
              fill: false,
              borderColor: "#FF5733",
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChartsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-white font-medium text-lg">
        Loading charts...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-semibold text-center text-gray-100 mb-10">
        Order Analytics
      </h2>

      {/* Pie Chart */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
          Payment Status Distribution
        </h3>
        <div className="flex justify-center">
          <Pie
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: "Payment Status",
                  font: { size: 20 },
                  color: "#FFFFFF",
                },
              },
            }}
            height={500}
            width={500}
          />
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
          Total Amount Over Time
        </h3>
        <div className="flex justify-center">
          <Line
            data={lineData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Date",
                    color: "#FFFFFF",
                    font: { size: 14 },
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Total Amount (₹)",
                    color: "#FFFFFF",
                    font: { size: 14 },
                  },
                  beginAtZero: true,
                  ticks: {
                    color: "#FFFFFF",
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Total Amount Over Time",
                  font: { size: 20 },
                  color: "#FFFFFF",
                },
              },
            }}
            height={400}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCharts;
