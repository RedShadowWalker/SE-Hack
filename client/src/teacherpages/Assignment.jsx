// src/pages/Assignments.jsx
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaPlus, FaEdit, FaTrash, FaFileAlt } from "react-icons/fa";
import "../teacherstyles/Assignment.css";
import CreateQuiz from "../components/Teacher/CreateQuiz";

const Assignments = () => {
  const { isDarkMode } = useTheme();

  const [assignments, setAssignments] = useState([
    { id: 1, title: "React Basics Quiz",    course: "Web Development",      dueDate: "2024-02-20", type: "Quiz",       submissions: 15, totalStudents: 20, status: "active" },
    { id: 2, title: "JavaScript Project",   course: "Web Development",      dueDate: "2024-02-25", type: "Project",    submissions: 12, totalStudents: 20, status: "active" },
    { id: 3, title: "Database Design",      course: "Database Management",  dueDate: "2024-02-28", type: "Assignment", submissions: 18, totalStudents: 20, status: "active" },
    { id: 4, title: "HTML Basics",          course: "Frontend Basics",      dueDate: "2024-01-15", type: "Assignment", submissions: 20, totalStudents: 20, status: "past"   },
    { id: 5, title: "CSS Layout",           course: "Frontend Basics",      dueDate: "2024-01-20", type: "Assignment", submissions: 19, totalStudents: 20, status: "past"   },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showQuizForm, setShowQuizForm]       = useState(false);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    course: "",
    dueDate: "",
    description: "",
    points: 100,
    type: "Assignment",
  });

  const handleCreate = (e) => {
    e.preventDefault();
    const entry = {
      ...newAssignment,
      id: assignments.length + 1,
      submissions: 0,
      totalStudents: 20,
      status: "active",
    };
    setAssignments([entry, ...assignments]);
    setNewAssignment({
      title: "", course: "", dueDate: "", description: "", points: 100, type: "Assignment",
    });
    setShowCreateForm(false);
  };

  const activeAssignments = assignments.filter(a => a.status === "active");
  const pastAssignments   = assignments.filter(a => a.status === "past");

  return (
    <div className={`assignments-container ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Header with two create buttons */}
      <div className="assignments-header">
        <h1>Assignments</h1>

        {/* Create Quiz */}
        <button
          className="create-btn"
          onClick={() => setShowQuizForm(true)}
        >
          <FaPlus /> Create New Quiz
        </button>

        {/* Create Assignment */}
        <button
          className="create-btn"
          onClick={() => setShowCreateForm(true)}
        >
          <FaPlus /> Create New Assignment
        </button>
      </div>

      {/* Assignments Grid */}
      <div className="assignments-grid">
        {/* Active */}
        <div className="assignments-section">
          <h2>Active Assignments</h2>
          <div className="assignment-list">
            {activeAssignments.map(a => (
              <div key={a.id} className="assignment-card">
                <div className="assignment-icon"><FaFileAlt /></div>
                <div className="assignment-info">
                  <h3>{a.title}</h3>
                  <p>Course: {a.course}</p>
                  <p>Due: {a.dueDate}</p>
                  <p>{a.submissions}/{a.totalStudents} submissions</p>
                </div>
                <div className="assignment-actions">
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past */}
        <div className="assignments-section">
          <h2>Past Assignments</h2>
          <div className="assignment-list">
            {pastAssignments.map(a => (
              <div key={a.id} className="assignment-card past">
                <div className="assignment-icon"><FaFileAlt /></div>
                <div className="assignment-info">
                  <h3>{a.title}</h3>
                  <p>Course: {a.course}</p>
                  <p>Due: {a.dueDate}</p>
                  <p>{a.submissions}/{a.totalStudents} submissions</p>
                </div>
                <div className="assignment-actions">
                  <button className="action-btn view">View Results</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Assignment Modal */}
      {showCreateForm && (
        <div className="modal-overlay">
          <div className="create-modal">
            <button
              className="modal-close"
              onClick={() => setShowCreateForm(false)}
            >
              ✕
            </button>
            <h2>Create New Assignment</h2>
            <form onSubmit={handleCreate}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newAssignment.title}
                  onChange={e => setNewAssignment({ ...newAssignment, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Course</label>
                <input
                  type="text"
                  value={newAssignment.course}
                  onChange={e => setNewAssignment({ ...newAssignment, course: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  value={newAssignment.dueDate}
                  onChange={e => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newAssignment.description}
                  onChange={e => setNewAssignment({ ...newAssignment, description: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Points</label>
                <input
                  type="number"
                  value={newAssignment.points}
                  onChange={e => setNewAssignment({
                    ...newAssignment,
                    points: parseInt(e.target.value, 10),
                  })}
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Create</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => window.location.reload()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Quiz Modal */}
      {showQuizForm && (
        <div className="modal-overlay">
          <div className="create-modal">
            <CreateQuiz onClose={() => setShowQuizForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
