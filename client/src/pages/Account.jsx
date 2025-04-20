import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaUser,
  FaChalkboardTeacher,
  FaEdit,
  FaSignOutAlt,
  FaStar,
  FaBook,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import "../styles/Account.css";

const Account = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("account");
  const [isEditing, setIsEditing] = useState(false);
  const [accountData, setAccountData] = useState({
    name: "Madhura Lolayekar",
    email: "madhura@example.com",
    role: "Faculty",
    department: "Computer Science",
    joinDate: "2023-01-01",
    profileImage: "/Madhu.jpg",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra",
    expertise: ["Web Development", "Database Management", "React.js"],
    education: "Master of Computer Applications",
  });

  const facultyStats = {
    courses: [
      { id: 1, name: "Web Development", students: 25, progress: 75 },
      { id: 2, name: "Database Management", students: 20, progress: 85 },
      { id: 3, name: "React Fundamentals", students: 30, progress: 60 },
    ],
    totalStudents: 75,
    totalAssignments: 24,
    rating: 4.8,
    completionRate: 85,
    activeProjects: 5,
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Add API call to save profile data
  };

  const handleLogout = () => {
    // Add logout logic
  };

  return (
    <div className={`account-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="account-header">
        <h1>My Account</h1>
      </div>

      <div className="tabs-header">
        <button
          className={`tab-btn ${activeTab === "account" ? "active" : ""}`}
          onClick={() => setActiveTab("account")}
        >
          <FaUser /> Account Details
        </button>
        <button
          className={`tab-btn ${activeTab === "faculty" ? "active" : ""}`}
          onClick={() => setActiveTab("faculty")}
        >
          <FaChalkboardTeacher /> Faculty Dashboard
        </button>
      </div>

      {activeTab === "account" && (
        <div className="profile-card">
          <div className="profile-content">
            <div className="profile-left">
              <div className="profile-pic-container">
                <img
                  src={accountData.profileImage}
                  alt="Profile"
                  className="profile-pic"
                />
                <div className="edit-overlay" onClick={handleEditProfile}>
                  <FaEdit />
                </div>
              </div>
              <h2>{accountData.name}</h2>
              <p className="role-badge">{accountData.role}</p>
            </div>

            <div className="profile-right">
              <div className="info-section">
                <h3>Personal Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span>Email</span>
                    <span>{accountData.email}</span>
                  </div>
                  <div className="info-item">
                    <span>Phone</span>
                    <span>{accountData.phone}</span>
                  </div>
                  <div className="info-item">
                    <span>Department</span>
                    <span>{accountData.department}</span>
                  </div>
                  <div className="info-item">
                    <span>Join Date</span>
                    <span>{accountData.joinDate}</span>
                  </div>
                  <div className="info-item">
                    <span>Address</span>
                    <span>{accountData.address}</span>
                  </div>
                  <div className="info-item">
                    <span>Education</span>
                    <span>{accountData.education}</span>
                  </div>
                </div>
              </div>

              <div className="expertise-section">
                <h3>Areas of Expertise</h3>
                <div className="expertise-tags">
                  {accountData.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="edit-profile-btn" onClick={handleEditProfile}>
                <FaEdit /> Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "faculty" && (
        <div className="faculty-dashboard">
          <div className="stats-grid">
            <div className="stat-card">
              <FaBook className="stat-icon" />
              <div className="stat-info">
                <h3>Courses</h3>
                <p>{facultyStats.courses.length}</p>
              </div>
            </div>
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div className="stat-info">
                <h3>Students</h3>
                <p>{facultyStats.totalStudents}</p>
              </div>
            </div>
            <div className="stat-card">
              <FaClipboardList className="stat-icon" />
              <div className="stat-info">
                <h3>Assignments</h3>
                <p>{facultyStats.totalAssignments}</p>
              </div>
            </div>
            <div className="stat-card">
              <FaStar className="stat-icon" />
              <div className="stat-info">
                <h3>Rating</h3>
                <p>{facultyStats.rating}/5.0</p>
              </div>
            </div>
          </div>

          <div className="courses-section">
            <h3>Active Courses</h3>
            <div className="courses-grid">
              {facultyStats.courses.map((course) => (
                <div key={course.id} className="course-card">
                  <h4>{course.name}</h4>
                  <p>{course.students} Students</p>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span>{course.progress}% Complete</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Account;
