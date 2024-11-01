// src/components/SignupForm.js
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // For navigation

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Use history for navigation

  const handleSignup = async () => {
    try {
      await axios.post("https://mma301.onrender.com/users/signup", {
        username,
        email,
        password,
      });
      alert("Account created successfully");
      history.push("/verify-account", { email }); // Navigate to verification page
    } catch (error) {
      alert("Signup Failed: " + error.response.data.message);
    }
  };

  // Styles
  const styles = {
    formContainer: {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.formContainer}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={styles.input}
      />
      <button onClick={handleSignup} style={styles.button}>
        Sign Up
      </button>
    </div>
  );
};

export default SignupForm;
