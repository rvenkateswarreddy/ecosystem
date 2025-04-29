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
        const pieResponse = await fetch(
          "http://localhost:4000/orders/pie-chart"
        );
        const pieResult = await pieResponse.json();
        const lineResponse = await fetch(
          "http://localhost:4000/orders/line-chart"
        );
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
    return <p>Loading charts...</p>;
  }

  return (
    <div className="charts-container">
      <h2>Order Analytics</h2>

      {/* Pie Chart */}
      <div>
        <h3>Payment Status Distribution</h3>
        <Pie data={pieData} />
      </div>

      {/* Line Chart */}
      <div>
        <h3>Total Amount Over Time</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default OrderCharts;
