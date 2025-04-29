import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    role: "user", // default role is "user"
    adminSecretKey: "", // For admin registration
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const {
    fullname,
    email,
    mobile,
    password,
    confirmpassword,
    role,
    adminSecretKey,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true); // Set loading to true when form submission starts

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        formData
      );
      setSuccess(`${role} is registered successfully`);
      setError(""); // Clear previous errors
      setLoading(false);
      setFormData({
        fullname: "",
        email: "",
        mobile: "",
        password: "",
        confirmpassword: "",
        role: "user", // default role is "user"
        adminSecretKey: "", // For admin registration
      }); // Set loading to false after response
    } catch (err) {
      setError(err.response ? err.response.data : "Server error");
      setSuccess(""); // Clear success message if any
      setLoading(false); // Set loading to false if error occurs
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign Up
        </h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && (
          <div className="text-green-500 text-center mb-4">{success}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={confirmpassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
            </select>
          </div>

          {role === "admin" && (
            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="adminSecretKey">
                Admin Secret Key
              </label>
              <input
                type="password"
                id="adminSecretKey"
                name="adminSecretKey"
                value={adminSecretKey}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className={`w-full p-3 rounded-lg ${
              loading ? "bg-gray-500" : "bg-blue-600"
            } text-white`}
            disabled={loading} // Disable the button when loading
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="w-5 h-5 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
              </div>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
