import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import { FaTrophy, FaUserGraduate, FaBell } from "react-icons/fa";
import "../styles/Home.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const profileData = {
    name: "Madhura Lolayekar",
    role: "Student",
    achievements: 23,
    courses: 38,
    profileImage: "/path/to/your/profile-image.jpg",
    notifications: [
      { id: 1, text: "Assignment due tomorrow", type: "urgent" },
      { id: 2, text: "New course material available", type: "info" },
      { id: 3, text: "Quiz scheduled for next week", type: "reminder" },
    ],
  };

  const attendanceData = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
    ],
    datasets: [
      {
        label: "Present",
        data: [85, 82, 90, 78, 85, 75, 80],
        backgroundColor: "rgba(52, 152, 219, 0.8)",
        borderRadius: 6,
      },
      {
        label: "Total Classes",
        data: [90, 90, 90, 90, 90, 90, 90],
        backgroundColor: "rgba(243, 156, 18, 0.8)",
        borderRadius: 6,
      },
    ],
  };

  const assignmentData = {
    labels: ["Submitted", "Delayed", "Remaining"],
    datasets: [
      {
        data: [54, 28, 18],
        backgroundColor: [
          "rgba(46, 204, 113, 0.8)",
          "rgba(243, 156, 18, 0.8)",
          "rgba(231, 76, 60, 0.8)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const improvementData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Performance Score",
        data: [65, 75, 70, 80, 85, 90],
        borderColor: "rgba(52, 152, 219, 0.8)",
        backgroundColor: "rgba(52, 152, 219, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#fff",
        pointBorderColor: "rgba(52, 152, 219, 0.8)",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const courseProgress = [
    { name: "Adobe XD - Prototyping", progress: 85, icon: "🎨" },
    { name: "How to design Proto", progress: 75, icon: "✏️" },
    { name: "Video Editing - Animation", progress: 65, icon: "🎬" },
    { name: "Chemistry - Expert", progress: 90, icon: "🧪" },
    { name: "Physics - Base", progress: 70, icon: "⚡" },
  ];

  const leaderboardData = [
    { name: "John Doe", score: 95, rank: 1, avatar: "👑" },
    { name: "Alice Smith", score: 92, rank: 2, avatar: "🥈" },
    { name: "Bob Johnson", score: 88, rank: 3, avatar: "🥉" },
    { name: "Emma Davis", score: 85, rank: 4, avatar: "⭐" },
    { name: "Mike Wilson", score: 82, rank: 5, avatar: "⭐" },
  ];

  const handleCardClick = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  const cardVariants = {
    normal: { scale: 1, zIndex: 1 },
    expanded: { scale: 1.02, zIndex: 2 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-container"
    >
      <div className="dashboard-header">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="dashboard-title"
        >
          Dashboard
        </motion.h1>

        <motion.div
          className="profile-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="profile-info">
            <div className="profile-image-container">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="profile-image"
              />
              <div className="profile-details">
                <h3>{profileData.name}</h3>
                <p>{profileData.role}</p>
              </div>
            </div>

            <div className="profile-stats-horizontal">
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <div>
                  <h3>{profileData.achievements}</h3>
                  <p>Achievements</p>
                </div>
              </div>
              <div className="stat-item">
                <FaUserGraduate className="stat-icon" />
                <div>
                  <h3>{profileData.courses}</h3>
                  <p>Courses</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="dashboard-grid">
        <motion.div
          className={`chart-card small-card ${
            expandedCard === "attendance" ? "expanded" : ""
          }`}
          onClick={() => handleCardClick("attendance")}
          variants={cardVariants}
          animate={expandedCard === "attendance" ? "expanded" : "normal"}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Attendance Overview</h2>
          <Bar
            data={attendanceData}
            options={{
              responsive: true,
              plugins: {
                legend: { labels: { usePointStyle: true, padding: 20 } },
              },
              scales: { y: { beginAtZero: true, max: 100 } },
            }}
          />
        </motion.div>

        <motion.div
          className={`chart-card pie-card ${
            expandedCard === "assignments" ? "expanded" : ""
          }`}
          onClick={() => handleCardClick("assignments")}
          variants={cardVariants}
          animate={expandedCard === "assignments" ? "expanded" : "normal"}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Assignment Status</h2>
          <div className="pie-wrapper">
            <Pie
              data={assignmentData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "bottom", labels: { padding: 10 } },
                },
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className={`chart-card medium-card ${
            expandedCard === "performance" ? "expanded" : ""
          }`}
          onClick={() => handleCardClick("performance")}
          variants={cardVariants}
          animate={expandedCard === "performance" ? "expanded" : "normal"}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Performance Trends</h2>
          <Line
            data={improvementData}
            options={{
              responsive: true,
              plugins: {
                legend: { labels: { usePointStyle: true, padding: 20 } },
              },
              scales: { y: { beginAtZero: true, max: 100 } },
            }}
          />
        </motion.div>

        <motion.div
          className="chart-card course-progress wide-card"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2>My Courses</h2>
          <div className="course-list">
            {courseProgress.map((course, index) => (
              <motion.div
                key={index}
                className="course-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="course-icon">{course.icon}</span>
                <div className="course-info">
                  <h4>{course.name}</h4>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <span className="course-progress-text">{course.progress}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="chart-card notifications small-card"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Notifications</h2>
          <div className="notification-list">
            {profileData.notifications.map((notification, index) => (
              <motion.div
                key={index}
                className={`notification-item ${notification.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FaBell className="notification-icon" />
                <p>{notification.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={`chart-card leaderboard tall-card ${
            expandedCard === "leaderboard" ? "expanded" : ""
          }`}
          onClick={() => handleCardClick("leaderboard")}
          variants={cardVariants}
          animate={expandedCard === "leaderboard" ? "expanded" : "normal"}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Top Performers</h2>
          <div className="leaderboard-list">
            {leaderboardData.map((student, index) => (
              <motion.div
                key={index}
                className="leaderboard-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="avatar">{student.avatar}</span>
                <span className="rank">#{student.rank}</span>
                <span className="name">{student.name}</span>
                <span className="score">{student.score}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
