import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Footprint from "./Footprint";
import Trees from "./Trees";
import Fuels from "./Fuels";
import Percapita from "./Percapita";
import ChartAnalysis from "./ChartAnalysis";
import PlantsList from "./Redux/PlantsList";
import Plantcard from "./Redux/Plantcard";
import Dashboardindex from "./Dashboardindex";
import About from "./About";
import FootPrint2 from "../FootPrint2";
import SustainabilityTips from "../SustainabilityTips";
import ProgressTracker from "../ProgressTracker";
import PurchasedPlants from "./PurchasedPlants";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Dashboardindex />} />
        <Route path="/list" element={<PlantsList />} />
        <Route path="/purchasedplants" element={<PurchasedPlants />} />
        <Route path="/cart" element={<Plantcard />} />
        <Route path="/about" element={<About />} />
        <Route path="/trees" element={<Trees />} />
        <Route path="/fuels" element={<Fuels />} />
        <Route path="/percapita" element={<Percapita />} />
        <Route path="/footprint" element={<Footprint />} />
        <Route path="/footprint2" element={<FootPrint2 />} />
        <Route path="/tips" element={<SustainabilityTips />} />
        <Route path="/progress" element={<ProgressTracker />} />

        {/* Fixed the closing angle bracket */}
        <Route path="/chart" element={<ChartAnalysis />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
