// src/components/LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://mma301.onrender.com/users/login",
        { email, password }
      );
      // Save token and user ID in localStorage for web
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigate("/home"); // Navigate to the home page
    } catch (error) {
      alert("Login Failed: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    maxWidth: "300px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    maxWidth: "300px",
  },
};

export default LoginForm;
