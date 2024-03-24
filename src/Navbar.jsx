import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.cart);
  const No = data.cart;
  const total = data.totalprice;
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownLinkClick = (event) => {
    event.stopPropagation();
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
          <Link className="font-semibold text-xl tracking-tight">
            Greenvestements
          </Link>
        </div>
        <div className="flex items-center justify-start flex-grow">
          <div className="ml-12 flex gap-9 items-center space-x-4">
            <Link
              to="/dashboard/list"
              className="text-white hover:text-gray-300 text-lg font-medium"
            >
              Tree Shop
            </Link>
            <Link
              to="/dashboard/chart"
              className="text-white hover:text-gray-300 text-lg font-medium"
            >
              piechart
            </Link>
            <Link
              to="/dashboard/about"
              className="text-white hover:text-gray-300 text-lg font-medium"
            >
              About
            </Link>
            <Link
              to="/dashboard/footprint"
              className="text-white hover:text-gray-300 text-lg font-medium"
            >
              Footprint
            </Link>
            <div className="relative" ref={dropdownRef}>
              <span
                className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Carbon Emission
              </span>
              {showDropdown && (
                <div className="absolute z-10 mt-2 bg-white rounded-lg shadow-md">
                  <Link
                    to="/dashboard/trees"
                    onClick={handleDropdownLinkClick}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Trees
                  </Link>
                  <Link
                    to="/dashboard/fuels"
                    onClick={handleDropdownLinkClick}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Fuels
                  </Link>
                  <Link
                    to="/dashboard/percapita"
                    onClick={handleDropdownLinkClick}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Per Capita
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/dashboard/logout"
              className=" pl-20 text-white hover:text-gray-300 text-lg font-medium"
              onClick={handleLogout}
            >
              Logout
            </Link>
            <Link
              to="/dashboard/cart"
              className="text-white hover:text-gray-300 text-lg font-medium"
            >
              cart <span>{No.length}</span>
            </Link>
            <Link className="text-white hover:text-gray-300 text-lg font-medium">
              Totalvalue:{total}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
