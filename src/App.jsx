import React from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import "./index.css";
import Menubar from "./Menubar.jsx";
import Home from "./Home.jsx";
import Footprint from "./Footprint.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Signup from "./Signup.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Protect from "./Protect.jsx";
import Sharecomp from "./Sharecomp.jsx";
import MeetOurTeam from "./MeetOurTeam.jsx";
import Question from "./Question.jsx";
import FarmerDashboard from "./FarmerDashboard.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sharecomp />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="meet" element={<MeetOurTeam />} />
          <Route path="qa" element={<Question />} />
        </Route>

        <Route
          path="/dashboard/*"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />
        <Route path="/admindashboard/*" element={<AdminDashboard />} />
        <Route path="/farmerdashboard/*" element={<FarmerDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
