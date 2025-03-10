import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import LandingPage from './LandingPage'; // Import the landing page

function App() {
  const [authenticated, setAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('authenticated')) || false
  );

  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <Router>
      <Routes>
        {/* Landing Page - Accessible to Everyone */}
        <Route path="/" element={<LandingPage />} />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            authenticated ? <Navigate to="/" replace /> : <Login setAuthenticated={setAuthenticated} />
          }
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={
            authenticated ? <Navigate to="/" replace /> : <Register />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
