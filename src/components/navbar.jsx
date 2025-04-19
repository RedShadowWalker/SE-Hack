import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="nav-brand">
        <Link to="/" className={isDarkMode ? "dark-mode" : ""}>
          LMS Platform
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}>
          Home
        </Link>
        <Link
          to="/courses"
          className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
        >
          Courses
        </Link>
        <Link
          to="/quiz"
          className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
        >
          Quiz
        </Link>
        <Link
          to="/account"
          className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
        >
          Account
        </Link>
        <button
          onClick={toggleTheme}
          className={`theme-toggle ${isDarkMode ? "dark-mode" : ""}`}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
