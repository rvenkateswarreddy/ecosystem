// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import default styles

const Login = () => {
  const [formDataAdmin, setFormDataAdmin] = useState({
    email: "",
    password: "",
  });
  const [formDataUser, setFormDataUser] = useState({
    email: "",
    password: "",
  });
  const [textAdmin, settextAdmin] = useState(false);
  const [textUser, settextUser] = useState(false);
  const [authAdmin, setAuthAdmin] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const navigate = useNavigate();

  const handleChangeAdmin = (e) => {
    setFormDataAdmin({ ...formDataAdmin, [e.target.name]: e.target.value });
  };

  const handleChangeUser = (e) => {
    setFormDataUser({ ...formDataUser, [e.target.name]: e.target.value });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    settextAdmin(true);
    setAuthAdmin(false);

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        formDataAdmin
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      const userType = response.data.usertype; // Assuming the server returns the user's usertype

      if (userType === "admin") {
        alert("Admin login successful");

        navigate("/dashboard");
        toast.success("Admin successfully logged in!");
      } else {
        alert("invalid admin details");
      }

      // Show success toast notification
    } catch (error) {
      toast.error("Admin login failed:", error);

      if (error.response && error.response.status === 401) {
        toast.error(
          "Admin login failed. Please check your email and password."
        );
      } else {
        toast.error("Admin failed. An error occurred.");
      }
    } finally {
      setAuthAdmin(true);
      settextAdmin(false);
    }
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    settextUser(true);
    setAuthUser(false);

    try {
      const response = await axios.post(
        "https://ecobackend-kas3.onrender.com/login",
        formDataUser
      );

      const token = response.data.token;
      const userType = response.data.usertype; // Assuming the server returns the user's usertype
      localStorage.setItem("token", token);

      if (userType === "user") {
        alert("User login successful");

        navigate("/dashboard");
        toast.success("User successfully logged in!");
      } else {
        alert("invalid user details");
      }
    } catch (error) {
      toast.error("User login failed:", error);

      if (error.response && error.response.status === 401) {
        toast.error("User login failed. Please check your email and password.");
      } else {
        toast.error("User login failed. An error occurred.");
      }
    } finally {
      setAuthUser(true);
      settextUser(false);
    }
  };

  return (
    <Container className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-xl m-10">
        <h2 className="text-center text-2xl font-bold mb-4">Admin Login</h2>
        <Form onSubmit={handleAdminLogin}>
          <Form.Group controlId="emailAdmin" className="mb-4">
            <Form.Label className="block mb-2">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formDataAdmin.email}
              onChange={handleChangeAdmin}
              className="border border-gray-300 px-3 py-2 w-full rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
              required
            />
          </Form.Group>
          <Form.Group controlId="passwordAdmin" className="mb-4">
            <Form.Label className="block mb-2">Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formDataAdmin.password}
              onChange={handleChangeAdmin}
              className="border border-gray-300 px-3 py-2 w-full rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
              required
            />
          </Form.Group>
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
          >
            {textAdmin ? "processing" : "LOGIN"}
          </Button>
        </Form>
      </div>
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-xl m-10">
        <h2 className="text-center text-2xl font-bold mb-4">User Login</h2>
        <Form onSubmit={handleUserLogin}>
          <Form.Group controlId="emailUser" className="mb-4">
            <Form.Label className="block mb-2">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formDataUser.email}
              onChange={handleChangeUser}
              className="border border-gray-300 px-3 py-2 w-full rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
              required
            />
          </Form.Group>
          <Form.Group controlId="passwordUser" className="mb-4">
            <Form.Label className="block mb-2">Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formDataUser.password}
              onChange={handleChangeUser}
              className="border border-gray-300 px-3 py-2 w-full rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
              required
            />
          </Form.Group>
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
          >
            {textUser ? "processing..." : "LOGIN"}
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Login;
