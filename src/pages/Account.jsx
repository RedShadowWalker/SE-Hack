import React from "react";
import "../styles/Account.css";

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-header">
        <h1>My Account</h1>
      </div>

      <div className="account-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/default-avatar.png" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2>John Doe</h2>
            <p>student@example.com</p>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>My Progress</h3>
          <div className="progress-cards">
            <div className="progress-card">
              <h4>Courses Enrolled</h4>
              <p>5</p>
            </div>
            <div className="progress-card">
              <h4>Completed Courses</h4>
              <p>3</p>
            </div>
            <div className="progress-card">
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
