import React from "react";

import { Routes, Route } from "react-router-dom";

import Dashboardindex from "./Dashboardindex";

import FarmerNavbar from "./FarmerNavbar";
import BulkPlantOrder from "./Redux/BulkPlantOrder";
import SalesList from "./farmercomponents/SalesList";
import FarmerOrders from "./FarmerOrders";

const FarmerDashboard = () => {
  return (
    <div>
      <FarmerNavbar />
      <Routes>
        <Route index element={<Dashboardindex />} />
        <Route path="/plantorder" element={<BulkPlantOrder />} />
        <Route path="/saleslist" element={<SalesList />} />
        <Route path="/successorders" element={<FarmerOrders />} />
      </Routes>
    </div>
  );
};

export default FarmerDashboard;
