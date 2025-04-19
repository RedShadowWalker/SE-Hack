import React, { useState } from "react";
import "../teacherstyles/Grading.css";

const Grading = () => {
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      studentName: "John Doe",
      assignment: "React Components Project",
      course: "Web Development",
      submittedDate: "2024-01-15",
      status: "pending",
      file: "project.zip",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      assignment: "Database Quiz",
      course: "Database Management",
      submittedDate: "2024-01-16",
      status: "graded",
      grade: 85,
      feedback: "Good work on normalization concepts",
    },
  ]);

  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showGradingModal, setShowGradingModal] = useState(false);

  const handleGradeSubmit = (submissionId, grade, feedback) => {
    setSubmissions(
      submissions.map((sub) =>
        sub.id === submissionId
          ? { ...sub, grade, feedback, status: "graded" }
          : sub
      )
    );
    setShowGradingModal(false);
  };

  return (
    <div className="grading-container">
      <div className="grading-header">
        <h1>Grading & Feedback</h1>
        <div className="grading-filters">
          <select defaultValue="">
            <option value="">All Courses</option>
            <option value="web">Web Development</option>
            <option value="db">Database Management</option>
          </select>
          <select defaultValue="">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="graded">Graded</option>
          </select>
        </div>
      </div>

      <div className="submissions-list">
        {submissions.map((submission) => (
          <div key={submission.id} className="submission-card">
            <div className="submission-info">
              <div className="student-info">
                <h3>{submission.studentName}</h3>
                <span className={`status-badge ${submission.status}`}>
                  {submission.status}
                </span>
              </div>
              <p>Assignment: {submission.assignment}</p>
              <p>Course: {submission.course}</p>
              <p>Submitted: {submission.submittedDate}</p>
              {submission.status === "graded" && (
                <div className="grade-info">
                  <p>Grade: {submission.grade}/100</p>
                  <p>Feedback: {submission.feedback}</p>
                </div>
              )}
            </div>
            <div className="submission-actions">
              <button className="view-btn">View Submission</button>
              {submission.status === "pending" && (
                <button
                  className="grade-btn"
                  onClick={() => {
                    setSelectedSubmission(submission);
                    setShowGradingModal(true);
                  }}
                >
                  Grade
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showGradingModal && selectedSubmission && (
        <div className="modal-overlay">
          <div className="grading-modal">
            <h2>Grade Submission</h2>
            <div className="submission-details">
              <p>
                <strong>Student:</strong> {selectedSubmission.studentName}
              </p>
              <p>
                <strong>Assignment:</strong> {selectedSubmission.assignment}
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const grade = e.target.grade.value;
                const feedback = e.target.feedback.value;
                handleGradeSubmit(selectedSubmission.id, grade, feedback);
              }}
            >
              <div className="form-group">
                <label>Grade (out of 100)</label>
                <input type="number" name="grade" min="0" max="100" required />
              </div>
              <div className="form-group">
                <label>Feedback</label>
                <textarea name="feedback" rows="4" required></textarea>
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Submit Grade
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowGradingModal(false)}
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

export default Grading;
