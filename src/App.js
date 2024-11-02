import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import LoginScreen from "./pages/loginScreen";
import { AuthProvider } from "./context/AuthContext";
import SignupScreen from "./pages/signupScreen";
import HomeScreen from "./pages/homeScreen";
const App = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/Login" element={<LoginScreen />} />
      <Route path="/Signup" element={<SignupScreen />} />
      <Route path="/support" element={<SignupScreen />} />
      <Route path="/home" element={<HomeScreen />} />
    </Routes>
  );
};

// Wrap the App component with BrowserRouter
const AppWithRouter = () => (
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

export default AppWithRouter;
