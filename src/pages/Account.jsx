import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Account.css";

const Account = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`account-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className={`account-header ${isDarkMode ? "dark-mode" : ""}`}>
        <h1>My Account</h1>
      </div>

      <div className={`account-content ${isDarkMode ? "dark-mode" : ""}`}>
        <div className={`profile-section ${isDarkMode ? "dark-mode" : ""}`}>
          <div className="profile-image">
            <img src="/default-avatar.png" alt="Profile" />
          </div>
          <div className={`profile-info ${isDarkMode ? "dark-mode" : ""}`}>
            <h2>John Doe</h2>
            <p>student@example.com</p>
          </div>
        </div>

        <div className={`dashboard-section ${isDarkMode ? "dark-mode" : ""}`}>
          <h3>My Progress</h3>
          <div className="progress-cards">
            <div className={`progress-card ${isDarkMode ? "dark-mode" : ""}`}>
              <h4>Courses Enrolled</h4>
              <p>5</p>
            </div>
            <div className={`progress-card ${isDarkMode ? "dark-mode" : ""}`}>
              <h4>Completed Courses</h4>
              <p>3</p>
            </div>
            <div className={`progress-card ${isDarkMode ? "dark-mode" : ""}`}>
              <h4>Quizzes Taken</h4>
              <p>12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
