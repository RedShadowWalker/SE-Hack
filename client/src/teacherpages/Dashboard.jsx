import React from "react";
import { Line, Pie } from "react-chartjs-2";
import "../teacherstyles/Dashboard.css";

const Dashboard = () => {
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
        data: [65, 70, 75, 68, 72, 70, 68],
        borderColor: "#1D82BE",
        backgroundColor: "rgba(29, 130, 190, 0.1)",
      },
      {
        label: "Total Classes",
        data: [75, 75, 80, 75, 80, 75, 75],
        borderColor: "#F8BB33",
        backgroundColor: "rgba(248, 187, 51, 0.1)",
      },
    ],
  };

  const assignmentData = {
    labels: ["Submitted", "Delayed", "Remaining"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#4CAF50", "#F8BB33", "#FF5252"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, Professor</h1>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>23</h3>
            <p>Achievements</p>
          </div>
          <div className="stat-card">
            <h3>38</h3>
            <p>Courses</p>
          </div>
          <div className="stat-card">
            <h3>156</h3>
            <p>Students</p>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h2>Attendance Overview</h2>
          <Line data={attendanceData} options={{ responsive: true }} />
        </div>
        <div className="chart-card">
          <h2>Assignment Status</h2>
          <Pie data={assignmentData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">📝</span>
            <div className="activity-content">
              <h4>New Assignment Submitted</h4>
              <p>Web Development - Assignment 3</p>
              <small>2 hours ago</small>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">📊</span>
            <div className="activity-content">
              <h4>Grades Updated</h4>
              <p>Database Management Quiz</p>
              <small>5 hours ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
