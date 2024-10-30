import React, { useState } from "react";
//import { useAuth } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  //const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      //await login(email, password);
      navigation.navigate("Main");
    } catch (error) {
      alert.alert("Lỗi đăng nhập", error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* <img source={require("../assets/logo.png")} style={styles.logo} /> */}
        <div style={styles.card}>
          <input
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            // onSubmitEditing={() => {
            //   passwordInput.focus();
            // }}
          />
          <input
            // ref={(input) => {
            //   passwordInput = input;
            // }}
            label="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={styles.input}
            onSubmitEditing={handleLogin}
          />
          <text
            style={styles.forgetPasswordText}
            onPress={() => navigation.navigate("Quên mật khẩu")}
          >
            Forget password
          </text>
          <button mode="contained" onPress={handleLogin} style={styles.button}>
            Đăng nhập
          </button>
        </div>
        <text
          style={styles.footerText}
          onPress={() => navigation.navigate("Đăng ký")}
        >
          Bạn chưa có tài khoản? Đăng ký
        </text>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    borderRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  forgetPasswordText: {
    color: "#007BFF",
    alignSelf: "flex-end",
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    marginTop: 10,
  },
  footerText: {
    marginTop: 15,
    textAlign: "center",
    color: "#007BFF",
  },
};

export default LoginScreen;
