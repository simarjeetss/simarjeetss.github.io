import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bg z-50">
      <div className="max-w-4xl mx-auto px-8 flex justify-between items-center h-15">
        <Link to="/" className="font-bold text-xl text-text">home</Link>
        <div className="flex items-center gap-8">
          
          <Link to="/projects" className="text-text-secondary font-medium transition-colors duration-200 hover:text-accent">projects →</Link>
          <Link to="/photos" className="text-text-secondary font-medium transition-colors duration-200 hover:text-accent">photos →</Link>
          <a href="https://github.com/simarjeetss" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium transition-colors duration-200 hover:text-accent flex items-center" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 hover:scale-110">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/simarjeetss529/" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium transition-colors duration-200 hover:text-accent flex items-center" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 hover:scale-110">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://devpost.com/simarjeetss529" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium transition-colors duration-200 hover:text-accent flex items-center" title="Devpost">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 hover:scale-110">
              <path d="M6.002 15.432l4.278-4.278h-4.278v4.278zm0-5.708h4.278l-4.278-4.278v4.278zm5.708 5.708l4.278-4.278h-4.278v4.278zm0-5.708h4.278l-4.278-4.278v4.278zm5.708 5.708l4.278-4.278h-4.278v4.278zm0-5.708h4.278l-4.278-4.278v4.278z"/>
            </svg>
          </a>
          <div className="flex gap-2">
            <button 
              onClick={toggleTheme}
              className={`h-8 w-8 rounded-full cursor-pointer transition-all duration-200 border-2 border-border bg-transparent flex items-center justify-center text-base hover:scale-110 hover:border-accent ${theme === 'light' ? 'bg-accent text-white' : ''}`}
              title={theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 