import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
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
import { FaTrophy, FaUserGraduate, FaBell, FaPlay } from "react-icons/fa";
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
  const { isDarkMode } = useTheme();
  const [expandedCard, setExpandedCard] = useState(null);

  const profileData = {
    name: "Madhura Lolayekar",
    role: "Student",
    achievements: 23,
    courses: 38,
    profileImage: "/Madhu.jpg",
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

  const videoData = [
    {
      id: 1,
      title: "Introduction to React",
      duration: "00:31",
      url: "https://www.youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      duration: "00:32",
      url: "https://www.youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "CSS Fundamentals",
      duration: "00:33",
      url: "https://www.youtube.com/watch?v=example3",
    },
    {
      id: 4,
      title: "Web Development",
      duration: "00:34",
      url: "https://www.youtube.com/watch?v=example4",
    },
  ];

  const handleCardClick = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  const handleVideoClick = (url) => {
    window.open(url, "_blank");
  };

  const cardVariants = {
    normal: { scale: 1, zIndex: 1 },
    expanded: { scale: 1.02, zIndex: 2 },
  };

  return (
    <motion.div
      className={`dashboard-container ${isDarkMode ? "dark-mode" : ""}`}
    >
      {/* Header */}
      <div className="dashboard-header">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Dashboard
        </motion.h1>
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h2>{profileData.name}</h2>
            <p>{profileData.role}</p>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-card achievements">
          <FaTrophy className="stat-icon" />
          <div className="stat-content">
            <h3 className="stat-number">{profileData.achievements}</h3>
            <p className="stat-label">Achievements</p>
          </div>
        </div>

        <div className="stat-card courses">
          <FaUserGraduate className="stat-icon" />
          <div className="stat-content">
            <h3 className="stat-number">{profileData.courses}</h3>
            <p className="stat-label">Courses</p>
          </div>
        </div>
      </div>

      {/* Chart Grid */}
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
          <Bar data={attendanceData} />
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
            <Pie data={assignmentData} />
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
          <Line data={improvementData} />
        </motion.div>

        <motion.div className="chart-card notifications small-card">
          <h2>Notifications</h2>
          <div className="notification-list">
            {profileData.notifications.map((n, i) => (
              <motion.div
                key={i}
                className={`notification-item ${n.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <FaBell className="notification-icon" />
                <p>{n.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="chart-card course-progress wide-card">
          <h2>My Courses</h2>
          <div className="course-list">
            {courseProgress.map((course, i) => (
              <motion.div
                key={i}
                className="course-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
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
            {leaderboardData.map((student, i) => (
              <motion.div
                key={i}
                className="leaderboard-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
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

      {/* Video Section: Continuous Horizontal Scroll */}
      <div className="video-scroll-container">
        <div className="video-scroll-track">
          {[...videoData, ...videoData].map((video, index) => (
            <div
              key={index}
              className="video-card"
              onClick={() => handleVideoClick(video.url)}
            >
              <div className="video-thumbnail">
                <div className="play-button">
                  <FaPlay />
                </div>
                <div className="video-duration">{video.duration}</div>
              </div>
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
