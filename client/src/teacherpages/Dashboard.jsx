import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaGraduationCap,
  FaBook,
  FaClipboardList,
  FaChartLine,
  FaMoon,
  FaSun,
  FaBell,
  FaTrophy,
  FaCalendar,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import "../teacherstyles/Dashboard.css";

const Dashboard = ({ role }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const dateString = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isStudent = role === "student";

  const studentSessions = [
    { time: "10:00 AM", title: "Public Speaking Basics", duration: "45 min" },
    { time: "2:30 PM", title: "Voice Modulation", duration: "60 min" },
    { time: "4:00 PM", title: "Presentation Skills", duration: "45 min" },
  ];

  const studentProgress = [
    { course: "Public Speaking", progress: 75 },
    { course: "Business Communication", progress: 60 },
    { course: "Interview Skills", progress: 45 },
  ];

  const teacherClasses = [
    { time: "10:00 AM", subject: "Web Development", students: 25 },
    { time: "11:30 AM", subject: "Database Design", students: 22 },
    { time: "2:00 PM", subject: "React Basics", students: 28 },
  ];

  const submissions = [
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
      content: "Deadline moved to next Friday.",
    },
    {
      title: "New Course Material",
      date: "Yesterday",
      content: "New database materials uploaded.",
    },
    {
      title: "Workshop Schedule",
      date: "2 days ago",
      content: "Web workshop next week.",
    },
  ];

  return (
    <div className={`dashboard-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="dashboard-header">
        <div className="logo-section">
          <h1>Watch & Learn</h1>
          <p>
            {isStudent
              ? "Your Learning Dashboard"
              : "Here's your teaching overview"}
          </p>
        </div>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? (
              <FaSun className="theme-icon" />
            ) : (
              <FaMoon className="theme-icon" />
            )}
          </button>
          <div className="profile-section">
            {isStudent ? (
              <>
                <div className="notification-badge">
                  <FaBell />
                  <span className="badge">3</span>
                </div>
                <img
                  src="/profile-image.jpg"
                  alt="Profile"
                  className="profile-image"
                />
                <div className="profile-details">
                  <h3>Madhura Lolayekar</h3>
                  <p>Student</p>
                </div>
              </>
            ) : (
              <div className="date-time">
                <p>{dateString}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isStudent ? (
        <>
          <div className="welcome-banner">
            <div className="welcome-text">
              <h2>Speak with Confidence</h2>
              <p>
                Master your communication skills with our interactive courses
              </p>
            </div>
            <div className="accent-shape"></div>
          </div>

          <div className="stats-overview">
            <StatCard icon={<FaTrophy />} number="23" label="Achievements" />
            <StatCard icon={<FaBook />} number="38" label="Courses" />
          </div>

          <div className="dashboard-grid">
            <DashboardCard
              title={
                <>
                  <FaCalendar /> Upcoming Sessions
                </>
              }
            >
              {studentSessions.map((s, i) => (
                <div key={i} className="session-item">
                  <div className="session-time">
                    <FaClock />
                    <span>{s.time}</span>
                  </div>
                  <div className="session-info">
                    <h4>{s.title}</h4>
                    <p>{s.duration}</p>
                  </div>
                  <button className="join-btn">Join</button>
                </div>
              ))}
            </DashboardCard>

            <DashboardCard
              title={
                <>
                  <FaCheckCircle /> Course Progress
                </>
              }
            >
              {studentProgress.map((c, i) => (
                <div key={i} className="progress-item">
                  <div className="progress-header">
                    <h4>{c.course}</h4>
                    <span>{c.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${c.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </DashboardCard>
          </div>
        </>
      ) : (
        <>
          <div className="stats-grid">
            <StatCard
              icon={<FaGraduationCap />}
              number="156"
              label="Total Students"
              trend="+12%"
            />
            <StatCard
              icon={<FaBook />}
              number="8"
              label="Active Courses"
              trend="+2 new"
            />
            <StatCard
              icon={<FaClipboardList />}
              number="24"
              label="Assignments"
              trend="5 pending"
            />
            <StatCard
              icon={<FaChartLine />}
              number="85%"
              label="Average Score"
              trend="+5%"
            />
          </div>

          <div className="dashboard-grid">
            <DashboardCard title="Upcoming Classes">
              {teacherClasses.map((cls, i) => (
                <div key={i} className="class-item">
                  <div className="class-time">{cls.time}</div>
                  <div className="class-details">
                    <h4>{cls.subject}</h4>
                    <p>{cls.students} students enrolled</p>
                  </div>
                  <button className="start-class-btn">Start</button>
                </div>
              ))}
            </DashboardCard>

            <DashboardCard title="Recent Submissions">
              {submissions.map((sub, i) => (
                <div key={i} className="submission-item">
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
            </DashboardCard>

            <DashboardCard title="Recent Announcements">
              {announcements.map((a, i) => (
                <div key={i} className="announcement-item">
                  <div className="announcement-header">
                    <h4>{a.title}</h4>
                    <span className="announcement-date">{a.date}</span>
                  </div>
                  <p>{a.content}</p>
                </div>
              ))}
            </DashboardCard>
          </div>
        </>
      )}
    </div>
  );
};

const StatCard = ({ icon, number, label, trend }) => (
  <div className="stat-card">
    <div className="stat-content">
      <div className="stat-icon">{icon}</div>
      <h2 className="stat-number">{number}</h2>
      <p className="stat-label">{label}</p>
      {trend && <span className="stat-trend">{trend}</span>}
    </div>
  </div>
);

const DashboardCard = ({ title, children }) => (
  <div className="dashboard-card">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Dashboard;
