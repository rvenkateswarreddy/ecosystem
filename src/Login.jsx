import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to check if email and password are being sent
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        formData
      );
      setMessage("Login successful!");
      setRole(response.data.role);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("id", response.data.id);

      // Navigate based on the user's role
      if (response.data.role === "admin") {
        navigate("/admindashboard"); // Navigate to the admin dashboard
      } else if (response.data.role === "farmer") {
        navigate("/farmerdashboard"); // Navigate to the farmer dashboard
      } else {
        navigate("/dashboard"); // Default dashboard if the role is undefined
      }
    } catch (error) {
      setMessage(error.response?.data || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h2>
        {message && (
          <p
            className={`mb-4 text-center text-lg ${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <div className="mb-6">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            required
            disabled={loading} // Disable input during loading
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            required
            disabled={loading} // Disable input during loading
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-700"
          disabled={loading} // Disable the submit button during loading
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-4 h-4 border-2 border-t-2 border-blue-500 rounded-full animate-spin" />
            </div>
          ) : (
            "Login"
          )}
        </button>
        {role && (
          <p className="mt-4 text-center text-gray-400">Logged in as: {role}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
