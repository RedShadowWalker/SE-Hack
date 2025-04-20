import React, { useState } from "react";
import "../teacherstyles/ManageCourses.css";

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Web Development",
      description: "Learn modern web development techniques",
      students: 45,
      progress: 75,
      lectures: [
        { id: 1, title: "HTML Fundamentals", file: "html_basics.pdf" },
        { id: 2, title: "CSS Styling", file: "css_styling.pdf" },
        { id: 3, title: "JavaScript Basics", file: "js_basics.pdf" },
      ],
      exams: [
        {
          id: 1,
          title: "Midterm Exam",
          date: "2025-03-15",
          file: "midterm.pdf",
        },
        {
          id: 2,
          title: "Final Project",
          date: "2025-04-30",
          file: "final_project.pdf",
        },
      ],
      results: [
        {
          id: 1,
          title: "Midterm Results",
          average: 78,
          file: "midterm_results.pdf",
        },
      ],
    },
    {
      id: 2,
      title: "Database Management",
      description: "Understanding database concepts and SQL",
      students: 38,
      progress: 60,
      lectures: [
        { id: 1, title: "Database Basics", file: "db_basics.pdf" },
        { id: 2, title: "SQL Fundamentals", file: "sql_fundamentals.pdf" },
      ],
      exams: [
        { id: 1, title: "SQL Quiz", date: "2025-03-10", file: "sql_quiz.pdf" },
        {
          id: 2,
          title: "Final Exam",
          date: "2025-05-05",
          file: "final_exam.pdf",
        },
      ],
      results: [
        {
          id: 1,
          title: "SQL Quiz Results",
          average: 82,
          file: "sql_results.pdf",
        },
      ],
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    syllabus: null,
  });
  const [newLecture, setNewLecture] = useState({
    title: "",
    file: null,
  });
  const [newExam, setNewExam] = useState({
    title: "",
    date: "",
    file: null,
  });
  const [newResult, setNewResult] = useState({
    title: "",
    average: "",
    file: null,
  });
  const [showAddLecture, setShowAddLecture] = useState(false);
  const [showAddExam, setShowAddExam] = useState(false);
  const [showAddResult, setShowAddResult] = useState(false);

  const handleAddCourse = (e) => {
    e.preventDefault();
    const newCourseObj = {
      id: courses.length + 1,
      title: newCourse.title,
      description: newCourse.description,
      students: 0,
      progress: 0,
      lectures: [],
      exams: [],
      results: [],
    };
    setCourses([...courses, newCourseObj]);
    setNewCourse({ title: "", description: "", syllabus: null });
    setShowAddForm(false);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
    if (activeCourse && activeCourse.id === id) {
      setActiveCourse(null);
    }
  };

  const handleAddLecture = (e) => {
    e.preventDefault();
    if (!activeCourse) return;

    const updatedCourses = courses.map((course) => {
      if (course.id === activeCourse.id) {
        return {
          ...course,
          lectures: [
            ...course.lectures,
            {
              id: course.lectures.length + 1,
              title: newLecture.title,
              file: newLecture.file ? newLecture.file.name : "lecture.pdf",
            },
          ],
        };
      }
      return course;
    });

    setCourses(updatedCourses);
    setActiveCourse(
      updatedCourses.find((course) => course.id === activeCourse.id)
    );
    setNewLecture({ title: "", file: null });
    setShowAddLecture(false);
  };

  const handleAddExam = (e) => {
    e.preventDefault();
    if (!activeCourse) return;

    const updatedCourses = courses.map((course) => {
      if (course.id === activeCourse.id) {
        return {
          ...course,
          exams: [
            ...course.exams,
            {
              id: course.exams.length + 1,
              title: newExam.title,
              date: newExam.date,
              file: newExam.file ? newExam.file.name : "exam.pdf",
            },
          ],
        };
      }
      return course;
    });

    setCourses(updatedCourses);
    setActiveCourse(
      updatedCourses.find((course) => course.id === activeCourse.id)
    );
    setNewExam({ title: "", date: "", file: null });
    setShowAddExam(false);
  };

  const handleAddResult = (e) => {
    e.preventDefault();
    if (!activeCourse) return;

    const updatedCourses = courses.map((course) => {
      if (course.id === activeCourse.id) {
        return {
          ...course,
          results: [
            ...course.results,
            {
              id: course.results.length + 1,
              title: newResult.title,
              average: parseInt(newResult.average),
              file: newResult.file ? newResult.file.name : "result.pdf",
            },
          ],
        };
      }
      return course;
    });

    setCourses(updatedCourses);
    setActiveCourse(
      updatedCourses.find((course) => course.id === activeCourse.id)
    );
    setNewResult({ title: "", average: "", file: null });
    setShowAddResult(false);
  };

  return (
    <div className="manage-courses-container">
      <div className="courses-header">
        <h1>Manage Courses</h1>
        <button className="add-course-btn" onClick={() => setShowAddForm(true)}>
          Add New Course
        </button>
      </div>

      <div className="dashboard-layout">
        <div className="courses-sidebar">
          <h2>Your Courses</h2>
          <div className="course-list">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`sidebar-course-item ${
                  activeCourse && activeCourse.id === course.id ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCourse(course);
                  setActiveTab("overview");
                }}
              >
                <h3>{course.title}</h3>
                <div className="course-mini-progress">
                  <div className="mini-progress-bar">
                    <div
                      className="mini-progress"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="student-count">
                    {course.students} students
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="course-detail">
          {activeCourse ? (
            <>
              <div className="course-detail-header">
                <div className="course-title-section">
                  <h2>{activeCourse.title}</h2>
                  <p className="course-description">
                    {activeCourse.description}
                  </p>
                </div>
                <div className="course-actions">
                  <button className="edit-btn">Edit Course</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteCourse(activeCourse.id)}
                  >
                    Delete Course
                  </button>
                </div>
              </div>

              <div className="course-tabs">
                <button
                  className={`tab-btn ${
                    activeTab === "overview" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`tab-btn ${
                    activeTab === "lectures" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("lectures")}
                >
                  Study-Material
                </button>
                <button
                  className={`tab-btn ${activeTab === "exams" ? "active" : ""}`}
                  onClick={() => setActiveTab("exams")}
                >
                  Exams
                </button>
                <button
                  className={`tab-btn ${
                    activeTab === "results" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("results")}
                >
                  Results
                </button>
              </div>

              <div className="tab-content">
                {activeTab === "overview" && (
                  <div className="overview-tab">
                    <div className="course-stats-cards">
                      <div className="stats-card">
                        <h3>Students</h3>
                        <div className="stat-value">
                          {activeCourse.students}
                        </div>
                      </div>
                      <div className="stats-card">
                        <h3>Lectures</h3>
                        <div className="stat-value">
                          {activeCourse.lectures.length}
                        </div>
                      </div>
                      <div className="stats-card">
                        <h3>Exams</h3>
                        <div className="stat-value">
                          {activeCourse.exams.length}
                        </div>
                      </div>
                      <div className="stats-card">
                        <h3>Completion</h3>
                        <div className="stat-value">
                          {activeCourse.progress}%
                        </div>
                      </div>
                    </div>
                    <div className="course-progress-section">
                      <h3>Course Progress</h3>
                      <div className="detailed-progress-bar">
                        <div
                          className="detailed-progress"
                          style={{ width: `${activeCourse.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "lectures" && (
                  <div className="lectures-tab">
                    <div className="tab-actions">
                      <button
                        className="add-item-btn"
                        onClick={() => setShowAddLecture(true)}
                      >
                        Add Notes
                      </button>
                    </div>
                    <div className="content-list">
                      {activeCourse.lectures.length === 0 ? (
                        <p className="no-content-message">
                          No lectures available for this course.
                        </p>
                      ) : (
                        activeCourse.lectures.map((lecture) => (
                          <div key={lecture.id} className="content-item">
                            <div className="content-info">
                              <div className="content-icon">
                                <i className="file-icon"></i>
                              </div>
                              <div className="content-details">
                                <h3>{lecture.title}</h3>
                                <span className="file-name">
                                  {lecture.file}
                                </span>
                              </div>
                            </div>
                            <div className="item-actions">
                              <button className="view-btn">View</button>
                              <button className="delete-item-btn">
                                Delete
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "exams" && (
                  <div className="exams-tab">
                    <div className="tab-actions">
                      <button
                        className="add-item-btn"
                        onClick={() => setShowAddExam(true)}
                      >
                        Add Exam
                      </button>
                    </div>
                    <div className="content-list">
                      {activeCourse.exams.length === 0 ? (
                        <p className="no-content-message">
                          No exams available for this course.
                        </p>
                      ) : (
                        activeCourse.exams.map((exam) => (
                          <div key={exam.id} className="content-item">
                            <div className="content-info">
                              <div className="content-icon">
                                <i className="exam-icon"></i>
                              </div>
                              <div className="content-details">
                                <h3>{exam.title}</h3>
                                <span className="file-date">
                                  Date: {exam.date}
                                </span>
                              </div>
                            </div>
                            <div className="item-actions">
                              <button className="view-btn">View</button>
                              <button className="delete-item-btn">
                                Delete
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "results" && (
                  <div className="results-tab">
                    <div className="tab-actions">
                      <button
                        className="add-item-btn"
                        onClick={() => setShowAddResult(true)}
                      >
                        Add Results
                      </button>
                    </div>
                    <div className="content-list">
                      {activeCourse.results.length === 0 ? (
                        <p className="no-content-message">
                          No results available for this course.
                        </p>
                      ) : (
                        activeCourse.results.map((result) => (
                          <div key={result.id} className="content-item">
                            <div className="content-info">
                              <div className="content-icon">
                                <i className="result-icon"></i>
                              </div>
                              <div className="content-details">
                                <h3>{result.title}</h3>
                                <span className="result-average">
                                  Class Average: {result.average}%
                                </span>
                              </div>
                            </div>
                            <div className="item-actions">
                              <button className="view-btn">View</button>
                              <button className="delete-item-btn">
                                Delete
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="no-course-selected">
              <div className="empty-state">
                <div className="empty-icon"></div>
                <h2>No Course Selected</h2>
                <p>
                  Select a course from the sidebar or create a new one to get
                  started.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Course</h2>
              <button
                className="close-modal"
                onClick={() => setShowAddForm(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAddCourse}>
              <div className="form-group">
                <label>Course Title</label>
                <input
                  type="text"
                  value={newCourse.title}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newCourse.description}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      description: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Syllabus (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      syllabus: e.target.files[0],
                    })
                  }
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Add Course
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddLecture && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Lecture</h2>
              <button
                className="close-modal"
                onClick={() => setShowAddLecture(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAddLecture}>
              <div className="form-group">
                <label>File Name</label>
                <input
                  type="text"
                  value={newLecture.title}
                  onChange={(e) =>
                    setNewLecture({
                      ...newLecture,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>File Upload</label>
                <input
                  type="file"
                  accept=".pdf,.ppt,.pptx,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) =>
                    setNewLecture({
                      ...newLecture,
                      file: e.target.files[0],
                    })
                  }
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Add Lecture
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowAddLecture(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddExam && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Exam</h2>
              <button
                className="close-modal"
                onClick={() => setShowAddExam(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAddExam}>
              <div className="form-group">
                <label>Exam Title</label>
                <input
                  type="text"
                  value={newExam.title}
                  onChange={(e) =>
                    setNewExam({
                      ...newExam,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Exam Date</label>
                <input
                  type="date"
                  value={newExam.date}
                  onChange={(e) =>
                    setNewExam({
                      ...newExam,
                      date: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Exam File (PDF)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setNewExam({
                      ...newExam,
                      file: e.target.files[0],
                    })
                  }
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Add Exam
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowAddExam(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddResult && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Results</h2>
              <button
                className="close-modal"
                onClick={() => setShowAddResult(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAddResult}>
              <div className="form-group">
                <label>Results Title</label>
                <input
                  type="text"
                  value={newResult.title}
                  onChange={(e) =>
                    setNewResult({
                      ...newResult,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Class Average (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newResult.average}
                  onChange={(e) =>
                    setNewResult({
                      ...newResult,
                      average: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Results File (PDF)</label>
                <input
                  type="file"
                  accept=".pdf,.xlsx,.csv"
                  onChange={(e) =>
                    setNewResult({
                      ...newResult,
                      file: e.target.files[0],
                    })
                  }
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Add Results
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowAddResult(false)}
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

export default ManageCourses;
