import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaBook,
  FaFileAlt,
  FaTasks,
  FaCheckCircle,
  FaChartLine,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import "./teachernavbar.css";

const TeacherNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`teacher-navbar ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="nav-brand">
        <h1>Teacher Dashboard</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? (
            <FaSun className="theme-icon" />
          ) : (
            <FaMoon className="theme-icon" />
          )}
        </button>
      </div>

      <div className="nav-links">
        <NavLink to="/teacher/dashboard" className="nav-link">
          <FaHome />
          Dashboard
        </NavLink>

       

        <NavLink to="/teacher/materials" className="nav-link">
          <FaFileAlt />
          Study Material
        </NavLink>

        <NavLink to="/teacher/assignments" className="nav-link">
          <FaTasks />
          Assignments
        </NavLink>

        <NavLink to="/teacher/grading" className="nav-link">
          <FaCheckCircle />
          Grading
        </NavLink>

        <NavLink to="/teacher/manage-courses" className="nav-link">
          <FaChartLine />
          ManageCourses
        </NavLink>
      </div>

      <div
        className="nav-profile"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          src="/default-avatar.png"
          alt="Profile"
          className="profile-image"
        />
        <span className="profile-name">Dr. Smith</span>

        {isDropdownOpen && (
          <div className="profile-dropdown">
            <NavLink to="/teacher/profile">
              <FaUser />
              Profile Settings
            </NavLink>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <FaSignOutAlt />
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TeacherNavbar;
