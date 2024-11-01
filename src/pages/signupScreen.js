import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignupScreen = ({ navigation }) => {
  const { signup } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      console.log("Signup Data:", { username, email, password });
      await signup(username, email, password);
      alert(
        "Đăng ký thành công! Hãy kiểm tra email của bạn để nhận mã xác thực tài khoản."
      );
      navigation.navigate("Xác thực tài khoản", { email, mode: "register" });
    } catch (error) {
      alert("Lỗi đăng ký! " + error.message);
    }
  };

  // Styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f8f8",
    },
    formContainer: {
      padding: "40px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      maxWidth: "400px",
      marginRight: "50px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#333",
    },
    subtitle: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    checkbox: {
      marginRight: "8px",
    },
    checkboxLabel: {
      fontSize: "12px",
      color: "#666",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#ff4d4f",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    googleButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#ffffff",
      color: "#333",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    googleIcon: {
      marginRight: "10px",
    },
    footerText: {
      fontSize: "12px",
      textAlign: "center",
      color: "#666",
      marginTop: "10px",
    },
    signInLink: {
      color: "#ff4d4f",
      fontWeight: "bold",
      cursor: "pointer",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    sideImage: {
      maxWidth: "400px",
      height: "auto",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>SIGN UP</h2>
        <p style={styles.subtitle}>Sign up! Please enter your details.</p>

        <input
          type="text"
          placeholder="HỌ VÀ TÊN"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <div style={styles.checkboxContainer}>
          <input type="checkbox" style={styles.checkbox} />
          <label style={styles.checkboxLabel}>
            By clicking "Create account" or "Continue with Google", you agree to
            the Privacy Policy.
          </label>
        </div>

        <button onClick={handleSignup} style={styles.button}>
          Create account
        </button>

        <button style={styles.googleButton}>
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google Icon"
            style={styles.googleIcon}
          />
          Continue with Google
        </button>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <span style={styles.signInLink} onClick={() => navigate("/Login")}>
            Sign in here!
          </span>
        </p>
      </div>

      <div style={styles.imageContainer}>
        <img src={logo} alt="Side Illustration" style={styles.sideImage} />
      </div>
    </div>
  );
};

export default SignupScreen;
