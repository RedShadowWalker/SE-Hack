import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">LMS Platform</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/courses" className="nav-link">
          Courses
        </Link>
        <Link to="/quizzes" className="nav-link">
          Quizzes
        </Link>
        <Link to="/account" className="nav-link">
          Account
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
