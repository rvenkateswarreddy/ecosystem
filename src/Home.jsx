import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "./Home.css";

const Home = () => {
  const notify = () => {
    alert("Please login to access.");
    toast.success("Stay booked successfully!");
  };

  return (
    <>
      <ToastContainer />
      <div className="hero-section">
        <h1>
          <span>Grow</span> <span> your tree collection</span>{" "}
          <span>with a monthly forest</span> <span></span>
        </h1>
        <p className="homingwelcome">
          Welcome to ECOSYSTEM, keep investing here.
        </p>
        <Link to="/login">
          <button className="book-button" onClick={notify}>
            plant here
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
