import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/Courses.css";

// Importing images
import ccnImage from "../assets/ccn.jpg";
import osImage from "../assets/os.jpg";
import dbmsImage from "../assets/dbms.jpg";
import dsImage from "../assets/ds.jpg";
import coaImage from "../assets/coa.jpg";
import javaImage from "../assets/java.jpg";

const Courses = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const courses = [
    {
      id: 1,
      title: "Computer Communications and Networks",
      category: "Second Year",
      image: ccnImage,
      description:
        "Learn about network protocols, architecture, and communication systems",
      slug: "ccn",
    },
    {
      id: 2,
      title: "Operating Systems",
      category: "Second Year",
      image: osImage,
      description:
        "Understanding process management, memory management, and file systems",
      slug: "os",
    },
    {
      id: 3,
      title: "Database Management System",
      category: "Second Year",
      image: dbmsImage,
      description:
        "Master SQL, database design, and data management principles",
      slug: "dbms",
    },
    {
      id: 4,
      title: "Data Structures",
      category: "Second Year",
      image: dsImage,
      description:
        "Learn fundamental data structures and algorithms implementation",
      slug: "ds",
    },
    {
      id: 5,
      title: "Computer Organization and Architecture",
      category: "Second Year",
      image: coaImage,
      description:
        "Understanding computer architecture and hardware components",
      slug: "coa",
    },
    {
      id: 6,
      title: "Object Oriented Programming",
      category: "Second Year",
      image: javaImage,
      description: "Master object-oriented concepts and programming principles",
      slug: "java",
    },
  ];

  const handleViewDetails = (slug) => {
    navigate(`/course/${slug}`);
  };

  return (
    <div className={`courses-page ${isDarkMode ? "dark-mode" : ""}`}>
      <div className={`courses-hero ${isDarkMode ? "dark-mode" : ""}`}>
        <h1>My Courses</h1>
        <div className={`breadcrumb ${isDarkMode ? "dark-mode" : ""}`}>
          <span>Home</span>
          <span className="separator">/</span>
          <span>My Courses</span>
        </div>
      </div>

      <div className={`courses-grid ${isDarkMode ? "dark-mode" : ""}`}>
        {courses.map((course) => (
          <div
            key={course.id}
            className={`course-card ${isDarkMode ? "dark-mode" : ""}`}
          >
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <span
                className={`course-category ${isDarkMode ? "dark-mode" : ""}`}
              >
                {course.category}
              </span>
            </div>
            <div className={`course-content ${isDarkMode ? "dark-mode" : ""}`}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button
                className={`view-details ${isDarkMode ? "dark-mode" : ""}`}
                onClick={() => handleViewDetails(course.slug)}
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
