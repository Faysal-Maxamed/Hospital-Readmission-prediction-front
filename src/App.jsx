import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; // Admin Dashboard page
import Predict from "./pages/Predict";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PredictorForm from "./pages/Predict";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("patient"); // Default role is "patient"
  const location = useLocation();

  useEffect(() => {
    // Check authentication status and role from localStorage
    const authStatus = localStorage.getItem("isAuthenticated");
    const role = localStorage.getItem("role");

    setIsAuthenticated(authStatus === "true");
    setUserRole(role || "patient");
  }, []);

  return (
    <div className="App">
      {/* Hide Navbar on Login and Register Pages */}
      {location.pathname !== "/login" && location.pathname !== "/register" && <Navbar />}

      <Routes>
        {/* Redirect unauthenticated users to login */}
        <Route
          path="/"
          element={isAuthenticated ? (userRole === "admin" ? <Dashboard /> : <Home />) : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
        <Route path="/predict" element={isAuthenticated ? <PredictorForm /> : <Navigate to="/login" />} />
        <Route path="/history" element={isAuthenticated ? <History /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
        {/* Admin Dashboard route */}
        <Route path="/dashboard" element={isAuthenticated && userRole === "admin" ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
