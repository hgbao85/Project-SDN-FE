import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/header";
import LoginScreen from "./pages/loginScreen";
import { AuthProvider } from "./context/AuthContext";
import SignupScreen from "./pages/signupScreen";
const App = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Login" element={<LoginScreen />} />
      <Route path="/Signup" element={<SignupScreen />} />
      <Route path="/support" element={<Header />} />
      <Route path="/home" element={<Header />} />
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
