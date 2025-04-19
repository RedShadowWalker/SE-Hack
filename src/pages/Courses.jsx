import React from "react";
import "../styles/Courses.css";

const courseList = [
  { title: "React Basics", description: "Learn the fundamentals of React." },
  { title: "Advanced JS", description: "Deep dive into JavaScript." },
  { title: "Web Design", description: "Learn to design responsive UIs." },
];

function Courses() {
  return (
    <section className="courses">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courseList.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button>Enroll</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
