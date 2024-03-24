// Import necessary dependencies
import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [textAdmin, settextAdmin] = useState(false);
  const [formData, setFormData] = useState({
    usertype: "user", // Default to "user"
    secretkey: "",
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    settextAdmin(true);
    try {
      // Implement signup logic using axios
      await axios.post(
        "https://ecobackend-kas3.onrender.com/register",
        formData
      );

      // Display success message
      alert("Registration successful");
      navigate("/login");
      // Redirect to login form using useHistory
    } catch (error) {
      console.error("Signup failed:", error);
      // You can handle errors and display an error message here
      alert("Registration failed");
      settextAdmin(false);
    }
  };

  return (
    <Container className="signup-container">
      <div className="signup-form">
        <h2 className="text-center">Signup</h2>
        <Form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSignup}
        >
          <Form.Group controlId="usertype">
            <Form.Label className="label">User Type:</Form.Label>
            <Form.Control
              as="select"
              name="usertype"
              value={formData.usertype}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>

          {formData.usertype === "admin" && (
            <>
              <Form.Group controlId="secretkey" className="form-group">
                <Form.Label className="label">Secret Key:</Form.Label>
                <Form.Control
                  type="password"
                  name="secretkey"
                  value={formData.secretkey}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </Form.Group>
            </>
          )}
          <Form.Group controlId="fullname" className="form-group">
            <Form.Label className="label">Full Name:</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="input"
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="form-group">
            <Form.Label className="label">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </Form.Group>

          <Form.Group controlId="mobile" className="form-group">
            <Form.Label className="label">Mobile:</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="input"
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="form-group">
            <Form.Label className="label">Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              required
            />
          </Form.Group>

          <Form.Group controlId="confirmpassword" className="form-group">
            <Form.Label className="label">Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              className="input"
              required
            />
          </Form.Group>

          {formData.usertype === "user" && <></>}

          <Button
            type="submit"
            className="submit-button neumorphic-button mt-2"
          >
            {textAdmin ? "processing..." : "SIGNUP"}
          </Button>
        </Form>
        <p className="text-center ">
          Already have an account?{" "}
          <Link to="/login" className="loginbtn">
            Login here
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Signup;
