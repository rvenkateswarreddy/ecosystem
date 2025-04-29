import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Home */}
          <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>

          {/* Navbar Links */}
          <ul className="flex space-x-4 text-white font-semibold">
            <li>
              <Link to="/admin" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin/manage-products" className="hover:text-blue-200">
                Manage Products
              </Link>
            </li>
            <li>
              <Link to="/admin/manage-users" className="hover:text-blue-200">
                Manage Users
              </Link>
            </li>
            <li>
              <Link to="/admin/reports" className="hover:text-blue-200">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="hover:text-blue-200">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-blue-200">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome, Admin!
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          This is your admin dashboard where you can manage various aspects of
          the system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Section 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Manage Products</h3>
            <p className="text-gray-700">
              Add, update, or delete products in the store. Monitor inventory
              levels and stock status.
            </p>
            <Link
              to="/admin/manage-products"
              className="block mt-4 text-blue-600 hover:underline"
            >
              Go to Products
            </Link>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Manage Users</h3>
            <p className="text-gray-700">
              View and manage users, including adding new admins or blocking
              accounts.
            </p>
            <Link
              to="/admin/manage-users"
              className="block mt-4 text-blue-600 hover:underline"
            >
              Go to Users
            </Link>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">View Reports</h3>
            <p className="text-gray-700">
              Generate and view various system reports, including sales, user
              activity, and more.
            </p>
            <Link
              to="/admin/reports"
              className="block mt-4 text-blue-600 hover:underline"
            >
              Go to Reports
            </Link>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Settings</h3>
            <p className="text-gray-700">
              Update system settings, change password, or manage system
              configurations.
            </p>
            <Link
              to="/admin/settings"
              className="block mt-4 text-blue-600 hover:underline"
            >
              Go to Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
