// /context/AuthContext.js

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Tạo context cho xác thực
const AuthContext = createContext();

// Provider cho AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Đăng ký người dùng mới
  const signup = async (username, email, password) => {
    try {
      const response = await axios.post(
        "https://mma301.onrender.com/users/signup",
        { username, email, password }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  // Xác minh mã
  const verifyCode = async (email, code) => {
    try {
      const response = await axios.post(
        "https://mma301.onrender.com/users/verify",
        { email, code }
      );
      return { success: response.data };
    } catch (error) {
      throw error.response.data;
    }
  };

  // Đặt lại mật khẩu
  const resetPassword = async (email, newPassword) => {
    try {
      const response = await axios.post(
        "https://mma301.onrender.com/users/reset-password",
        { email, newPassword }
      );
      return { success: response.data };
    } catch (error) {
      throw error.response.data;
    }
  };

  // Đăng nhập
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://mma301.onrender.com/users/login",
        { email, password }
      );
      // Lưu trữ thông tin người dùng
      setUser({
        username: response.data.username,
        id: response.data.userId,
        token: response.data.token,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  // Đăng xuất
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout, verifyCode, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook để sử dụng AuthContext
export const useAuth = () => useContext(AuthContext);
