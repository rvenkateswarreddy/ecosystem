// Menubar.jsx

import React from "react";
import { Link } from "react-router-dom";
import eco from "./assets/eco.png";

const Menubar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src={eco} alt="Logo" />
              <span className="text-white font-bold ml-2">Greenvestements</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/qa"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Q/A
              </Link>
              <Link
                to="/meet"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Meet our team
              </Link>
            </div>
          </div>

          {/* Authentication Links */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
