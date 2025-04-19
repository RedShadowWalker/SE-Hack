import React from "react";
import "../styles/Courses.css";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript and React",
      duration: "12 weeks",
      level: "Beginner",
      image: "/images/web-dev.jpg",
    },
    {
      id: 2,
      title: "Data Structures",
      description: "Master fundamental data structures and algorithms",
      duration: "10 weeks",
      level: "Intermediate",
      image: "/images/dsa.jpg",
    },
    {
      id: 3,
      title: "Machine Learning",
      description: "Introduction to ML algorithms and Python",
      duration: "16 weeks",
      level: "Advanced",
      image: "/images/ml.jpg",
    },
    {
      id: 4,
      title: "Database Management",
      description: "SQL and NoSQL database fundamentals",
      duration: "8 weeks",
      level: "Intermediate",
      image: "/images/database.jpg",
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build iOS and Android applications",
      duration: "14 weeks",
      level: "Intermediate",
      image: "/images/mobile-dev.jpg",
    },
    {
      id: 6,
      title: "Cloud Computing",
      description: "AWS and Azure cloud services",
      duration: "10 weeks",
      level: "Advanced",
      image: "/images/cloud.jpg",
    },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-title">Available Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <div className="course-level">{course.level}</div>
            </div>
            <div className="course-content">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-footer">
                <span className="duration">
                  <i className="far fa-clock"></i> {course.duration}
                </span>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
