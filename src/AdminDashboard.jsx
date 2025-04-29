import React from "react";

import { Routes, Route } from "react-router-dom";

import SuccessPage from "./SuccessPage";
import AdminSales from "./AdminSales";
import AdminNavbar from "./AdminNavbar";
import OrderedPayments from "./OrderedPayments";
import RecentPayments from "./RecentPayments";
import OrderCharts from "./Dashboardindex";
import AdminUsersPlant from "./AdminUsersPlant";

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route index element={<OrderCharts />} />
        <Route path="/plantsales" element={<AdminSales />} />
        <Route path="/successpage" element={<SuccessPage />} />
        <Route path="/orderedpayments" element={<OrderedPayments />} />
        <Route path="/usersplantlist" element={<AdminUsersPlant />} />
        <Route path="/recentpayments" element={<RecentPayments />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
