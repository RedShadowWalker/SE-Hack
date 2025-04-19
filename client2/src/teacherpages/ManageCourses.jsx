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
    },
    {
      id: 2,
      title: "Database Management",
      description: "Understanding database concepts and SQL",
      students: 38,
      progress: 60,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    syllabus: null,
  });

  const handleAddCourse = (e) => {
    e.preventDefault();
    // Add course logic here
    setShowAddForm(false);
  };

  return (
    <div className="manage-courses-container">
      <div className="courses-header">
        <h1>Manage Courses</h1>
        <button className="add-course-btn" onClick={() => setShowAddForm(true)}>
          Add New Course
        </button>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <h3>{course.title}</h3>
              <div className="course-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
            <p>{course.description}</p>
            <div className="course-stats">
              <span>Students: {course.students}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddForm && (
        <div className="modal-overlay">
          <div className="add-course-modal">
            <h2>Add New Course</h2>
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
    </div>
  );
};

export default ManageCourses;
