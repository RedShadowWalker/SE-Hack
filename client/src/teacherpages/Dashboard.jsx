import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaGraduationCap,
  FaBook,
  FaClipboardList,
  FaChartLine,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "../teacherstyles/Dashboard.css";

const TeacherDashboard = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const dateString = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const upcomingClasses = [
    { time: "10:00 AM", subject: "Web Development", students: 25 },
    { time: "11:30 AM", subject: "Database Design", students: 22 },
    { time: "2:00 PM", subject: "React Basics", students: 28 },
  ];

  const recentSubmissions = [
    {
      student: "John Doe",
      assignment: "React Project",
      time: "2 hours ago",
      status: "pending",
    },
    {
      student: "Jane Smith",
      assignment: "Database Quiz",
      time: "3 hours ago",
      status: "graded",
    },
    {
      student: "Mike Johnson",
      assignment: "CSS Layout",
      time: "5 hours ago",
      status: "pending",
    },
  ];

  const announcements = [
    {
      title: "Project Deadline Extended",
      date: "Today",
      content:
        "The deadline for React project submission has been extended to next Friday.",
    },
    {
      title: "New Course Material",
      date: "Yesterday",
      content: "New materials for Database Design course have been uploaded.",
    },
    {
      title: "Workshop Schedule",
      date: "2 days ago",
      content: "Web Development workshop scheduled for next week.",
    },
  ];

  return (
    <div className={`dashboard-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome Back, Dr. Sarah!</h1>
          <p>Here's what's happening with your courses today</p>
        </div>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? (
              <FaSun className="theme-icon" />
            ) : (
              <FaMoon className="theme-icon" />
            )}
          </button>
          <div className="date-time">
            <p>{dateString}</p>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={<FaGraduationCap />}
          title="Total Students"
          number="156"
          trend="+12% from last month"
          trendClass="positive"
        />
        <StatCard
          icon={<FaBook />}
          title="Active Courses"
          number="8"
          trend="+2 new courses"
          trendClass="positive"
        />
        <StatCard
          icon={<FaClipboardList />}
          title="Assignments"
          number="24"
          trend="5 pending review"
          trendClass="neutral"
        />
        <StatCard
          icon={<FaChartLine />}
          title="Average Score"
          number="85%"
          trend="+5% improvement"
          trendClass="positive"
        />
      </div>

      <div className="dashboard-grid">
        <DashboardCard title="Upcoming Classes">
          <div className="class-list">
            {upcomingClasses.map((cls, idx) => (
              <div key={idx} className="class-item">
                <div className="class-time">{cls.time}</div>
                <div className="class-details">
                  <h4>{cls.subject}</h4>
                  <p>{cls.students} students enrolled</p>
                </div>
                <button className="start-class-btn">Start</button>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Submissions">
          <div className="submission-list">
            {recentSubmissions.map((sub, idx) => (
              <div key={idx} className="submission-item">
                <div className="submission-info">
                  <h4>{sub.student}</h4>
                  <p>{sub.assignment}</p>
                  <span className="submission-time">{sub.time}</span>
                </div>
                <span className={`submission-status ${sub.status}`}>
                  {sub.status}
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Announcements">
          <div className="announcement-list">
            {announcements.map((ann, idx) => (
              <div key={idx} className="announcement-item">
                <div className="announcement-header">
                  <h4>{ann.title}</h4>
                  <span className="announcement-date">{ann.date}</span>
                </div>
                <p>{ann.content}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, number, trend, trendClass }) => (
  <div className="stat-card">
    <div className="stat-icon">{icon}</div>
    <div className="stat-info">
      <h3>{title}</h3>
      <p className="stat-number">{number}</p>
      <span className={`stat-trend ${trendClass}`}>{trend}</span>
    </div>
  </div>
);

const DashboardCard = ({ title, children }) => (
  <div className="dashboard-card">
    <h2>{title}</h2>
    {children}
  </div>
);

export default TeacherDashboard;
