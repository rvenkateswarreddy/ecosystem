// Dashboard.jsx

import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom"; // Changed from 'useLocation' to 'Outlet'
import Footprint from "./Footprint";
import Shop from "./Shop";
import Trees from "./Trees";
import Fuels from "./Fuels";
import Percapita from "./Percapita";
import ChartAnalysis from "./ChartAnalysis";
import PlantsList from "./Redux/PlantsList";
import Plantcard from "./Redux/Plantcard";
import Dashboardindex from "./Dashboardindex";
import About from "./About";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Dashboardindex />} />
        <Route path="/list" element={<PlantsList />} />
        <Route path="/cart" element={<Plantcard />} />
        <Route path="/about" element={<About />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/fuels" element={<Fuels />} />
        <Route path="/percapita" element={<Percapita />} />
        <Route path="/footprint" element={<Footprint />} />
        <Route path="/chart" element={<ChartAnalysis />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
