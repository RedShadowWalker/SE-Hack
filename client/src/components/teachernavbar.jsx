import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './teachernavbar.css';

const TeacherNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="teacher-navbar">
      <div className="nav-brand">
        <h1>Teacher Dashboard</h1>
      </div>

      <div className="nav-links">
        <NavLink to="/teacher/dashboard" className="nav-link">
          <i className="fas fa-home"></i>
          Dashboard
        </NavLink>

        <NavLink to="/teacher/courses" className="nav-link">
          <i className="fas fa-book"></i>
          My Courses
        </NavLink>

        <NavLink to="/teacher/materials" className="nav-link">
          <i className="fas fa-file-alt"></i>
          Study Material
        </NavLink>

        <NavLink to="/teacher/assignments" className="nav-link">
          <i className="fas fa-tasks"></i>
          Assignments
        </NavLink>

        <NavLink to="/teacher/grading" className="nav-link">
          <i className="fas fa-check-circle"></i>
          Grading
        </NavLink>

        <NavLink to="/teacher/analytics" className="nav-link">
          <i className="fas fa-chart-line"></i>
          Analytics
        </NavLink>
      </div>

      <div className="nav-profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <img src="/default-avatar.png" alt="Profile" className="profile-image" />
        <span className="profile-name">Dr. Smith</span>
        
        {isDropdownOpen && (
          <div className="profile-dropdown">
            <NavLink to="/teacher/profile">
              <i className="fas fa-user"></i>
              Profile Settings
            </NavLink>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-sign-out-alt"></i>
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TeacherNavbar;