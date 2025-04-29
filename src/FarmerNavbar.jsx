import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FarmerNavbar = () => {
  const data = useSelector((state) => state.cart);
  const No = data.cart;
  const total = data.totalprice;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFootprintDropdown, setShowFootprintDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false); // State for More dropdown
  const dropdownRef = useRef(null);
  const footprintDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null); // Ref for More dropdown
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFootprintDropdownToggle = () => {
    setShowFootprintDropdown(!showFootprintDropdown);
  };

  const handleMoreDropdownToggle = () => {
    setShowMoreDropdown(!showMoreDropdown); // Toggle More dropdown
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      footprintDropdownRef.current &&
      !footprintDropdownRef.current.contains(event.target) &&
      moreDropdownRef.current &&
      !moreDropdownRef.current.contains(event.target) // Check for More dropdown as well
    ) {
      setShowDropdown(false);
      setShowFootprintDropdown(false);
      setShowMoreDropdown(false); // Close More dropdown
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMoreLinkClick = (event) => {
    event.stopPropagation(); // Prevent event propagation for More dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/");
  };

  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white">
          <svg
            className="fill-current h-8 w-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9c-1.63 0-3-1.37-3-3s1.37-3 3-3 3 1.37 3 3-1.37 3-3 3z" />
          </svg>
          <Link
            to="/farmerdashboard"
            className="font-semibold text-3xl tracking-tight"
          >
            Farmers
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-grow flex justify-center">
          <div className="flex gap-4 items-center">
            <Link
              to="/farmerdashboard/plantorder"
              className="text-white hover:text-gray-300 text-lg font-medium px-2"
            >
              PLANT ORDER
            </Link>
            <Link
              to="/farmerdashboard/saleslist"
              className="text-white hover:text-gray-300 text-lg font-medium px-2"
            >
              SALES LIST
            </Link>
            <Link
              to="/farmerdashboard/successorders"
              className="text-white hover:text-gray-300 text-lg font-medium px-2"
            >
              ACCEPTED ORDERS
            </Link>

            {/* Footprint Dropdown */}

            {/* Carbon Emission Dropdown */}

            {/* More Dropdown */}
          </div>
        </div>

        {/* Cart, Total, and Logout Section */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="bg-red-500 text-white hover:bg-red-600 rounded-lg px-4 py-2 text-lg font-medium"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default FarmerNavbar;
