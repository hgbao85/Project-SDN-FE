import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const LoginScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/main");
    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>WELCOME BACK</h2>
        <p style={styles.subtitle}>Welcome back! Please enter your details.</p>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <div style={styles.options}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} /> Remember me
            </label>
            <button
              type="button"
              style={styles.forgotPassword}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password
            </button>
          </div>
          <button type="submit" style={styles.signInButton}>
            Sign in
          </button>
          <button type="button" style={styles.googleButton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              style={styles.googleIcon}
            />
            Sign in with Google
          </button>
        </form>
        <p style={styles.footerText}>
          Don't have an account?{" "}
          <span style={styles.signUpLink} onClick={() => navigate("/signup")}>
            Sign up for free!
          </span>
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    padding: "0 10%",
    backgroundColor: "#ffffff",
  },
  loginBox: {
    maxWidth: "400px",
    marginLeft: "10vw",
    width: "100%",
    textAlign: "left",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#777777",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#555",
  },
  checkbox: {
    marginRight: "5px",
  },
  forgotPassword: {
    color: "#777777",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
  },
  signInButton: {
    padding: "12px",
    backgroundColor: "#FF4A57",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    backgroundColor: "#ffffff",
    color: "#555555",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  googleIcon: {
    width: "20px",
    height: "20px",
    marginRight: "8px",
  },
  footerText: {
    fontSize: "14px",
    color: "#777777",
    textAlign: "center",
  },
  signUpLink: {
    color: "#FF4A57",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  },
  imageContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  logoImage: {
    width: "100%",
    maxWidth: "400px",
  },
};

export default LoginScreen;
