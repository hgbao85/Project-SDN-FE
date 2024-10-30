import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/header";

const App = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Header />} />

      <Route path="/Login" element={<Header />} />
      <Route path="/Signup" element={<Header />} />
      <Route path="/support" element={<Header />} />
      <Route path="/home" element={<Header />} />
    </Routes>
  );
};

// Wrap the App component with BrowserRouter
const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
