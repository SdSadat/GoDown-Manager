import React, { useState } from "react";
import { login } from "../api";
import "./Auth.css";

const Auth = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      if (response.auth) {
        setAuthenticated(true);
      } else {
        alert("Login failed.");
      }
    } catch (error) {
      alert("Login failed.");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">Godown Manager </div>
      </nav>
      <div className="auth-container">
        <div className="auth-box">
          <h2 className="auth-title">Login </h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Auth;
