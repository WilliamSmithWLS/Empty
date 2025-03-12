import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Register from "./Register";
import BeachInfo from "./BeachInfo"; // Import new page

function App() {
  const [authenticated, setAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("authenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={authenticated ? <Navigate to="/beach-info" replace /> : <Login setAuthenticated={setAuthenticated} />} />
        <Route path="/register" element={authenticated ? <Navigate to="/beach-info" replace /> : <Register />} />
        <Route path="/beach-info" element={authenticated ? <BeachInfo /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
