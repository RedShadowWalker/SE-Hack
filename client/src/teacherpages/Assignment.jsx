import React, { useState } from "react";
import "../teacherstyles/Assignment.css";

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React Components Project",
      course: "Web Development",
      dueDate: "2024-02-01",
      type: "Project",
      submissions: 15,
      totalStudents: 25,
    },
    {
      id: 2,
      title: "Database Normalization Quiz",
      course: "Database Management",
      dueDate: "2024-01-25",
      type: "Quiz",
      submissions: 20,
      totalStudents: 25,
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [assignmentType, setAssignmentType] = useState("assignment");
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    course: "",
    dueDate: "",
    description: "",
    points: 100,
  });

  return (
    <div className="assignments-container">
      <div className="assignments-header">
        <h1>Assignments & Quizzes</h1>
        <button className="create-btn" onClick={() => setShowCreateForm(true)}>
          Create New
        </button>
      </div>

      <div className="assignments-filters">
        <select defaultValue="">
          <option value="">All Courses</option>
          <option value="web">Web Development</option>
          <option value="db">Database Management</option>
        </select>
        <select defaultValue="">
          <option value="">All Types</option>
          <option value="assignment">Assignment</option>
          <option value="quiz">Quiz</option>
          <option value="project">Project</option>
        </select>
      </div>

      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="assignment-card">
            <div className="assignment-status">
              <div
                className="status-circle"
                style={{
                  backgroundColor:
                    assignment.submissions === assignment.totalStudents
                      ? "#4CAF50"
                      : "#F8BB33",
                }}
              ></div>
            </div>
            <div className="assignment-info">
              <h3>{assignment.title}</h3>
              <p>Course: {assignment.course}</p>
              <p>Due Date: {assignment.dueDate}</p>
              <div className="submission-status">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${
                        (assignment.submissions / assignment.totalStudents) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <span>
                  {assignment.submissions}/{assignment.totalStudents}{" "}
                  Submissions
                </span>
              </div>
            </div>
            <div className="assignment-actions">
              <button className="view-btn">View Details</button>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {showCreateForm && (
        <div className="modal-overlay">
          <div className="create-modal">
            <h2>
              Create New {assignmentType === "quiz" ? "Quiz" : "Assignment"}
            </h2>
            <div className="type-selector">
              <button
                className={`type-btn ${
                  assignmentType === "assignment" ? "active" : ""
                }`}
                onClick={() => setAssignmentType("assignment")}
              >
                Assignment
              </button>
              <button
                className={`type-btn ${
                  assignmentType === "quiz" ? "active" : ""
                }`}
                onClick={() => setAssignmentType("quiz")}
              >
                Quiz
              </button>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newAssignment.title}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Course</label>
                <select
                  value={newAssignment.course}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      course: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Course</option>
                  <option value="web">Web Development</option>
                  <option value="db">Database Management</option>
                </select>
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  value={newAssignment.dueDate}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      dueDate: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newAssignment.description}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      description: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Points</label>
                <input
                  type="number"
                  value={newAssignment.points}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      points: parseInt(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Create
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
