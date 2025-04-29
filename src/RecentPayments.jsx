import React, { useState, useEffect } from "react";
import axios from "axios";

const RecentPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecentPayments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/recent-payments"
        );
        setPayments(response.data.data);
      } catch (err) {
        console.error("Error fetching recent payments:", err.message);
        setError("Unable to fetch recent payments.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPayments();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (payments.length === 0) {
    return (
      <p className="text-center text-yellow-500">No recent payments found.</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recent Payments</h1>
      <div className="max-w-4xl mx-auto">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-gray-800 p-4 mb-4 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-bold">Payment ID: {payment.id}</h3>
            <p className="text-gray-300">Amount: ₹{payment.amount / 100}</p>
            <p
              className={`text-sm font-bold ${
                payment.status === "captured"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              Payment Status: {payment.status}
            </p>
            <p className="text-gray-400">
              Created At: {new Date(payment.created_at * 1000).toLocaleString()}
            </p>
            <p className="text-gray-400">Payment Mode: {payment.method}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPayments;
