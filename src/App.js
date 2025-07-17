import ErrorBoundary from './ErrorBoundary';
import { handleError } from './errorUtils';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Photos from './pages/Photos';
import TestErrorComponent from './TestErrorComponent';
import './App.css';

function App() {
  // Centralized error state
  const [error, setError] = useState(null);

  // Example async operation with error handling
  async function fetchData() {
    try {
      // Simulate async operation
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate random error
          if (Math.random() < 0.5) {
            resolve('Success');
          } else {
            reject(new Error('Fetching failed'));
          }
        }, 1000);
      });
      console.log(data);
    } catch (err) {
      // Catch and set error using error utils
      setError(err.message);
      handleError(err, true);
    }
  }

  // Trigger fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          {/* Display error if exists */}
          {error && <div className="error-message">Error: {error}</div>}

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
