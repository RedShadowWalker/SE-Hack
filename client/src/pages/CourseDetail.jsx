import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/CourseDetail.css";

// Import images
import ccnImage from "../assets/ccn.jpg";
import osImage from "../assets/os.jpg";
import dbmsImage from "../assets/dbms.jpg";
import dsImage from "../assets/ds.jpg";
import coaImage from "../assets/coa.jpg";
import javaImage from "../assets/java.jpg";

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const courseDetails = {
    ccn: {
      title: "Computer Communications and Networks",
      image: ccnImage,
      description:
        "Learn about network protocols, architecture, and communication systems. This course provides comprehensive knowledge about modern networking concepts and practices.",
      syllabus: [
        "Introduction to Computer Networks",
        "Network Topologies and Types",
        "OSI Model and TCP/IP Suite",
        "Data Link Layer and MAC",
        "Network Layer and Routing",
        "Transport Layer Protocols",
        "Application Layer Protocols",
        "Network Security",
      ],
      outcomes: [
        "Understand network architectures",
        "Implement basic networking protocols",
        "Configure network devices",
        "Analyze network performance",
        "Apply security measures",
      ],
    },
    os: {
      title: "Operating Systems",
      image: osImage,
      description:
        "Understanding process management, memory management, and file systems. Learn how modern operating systems work and manage computer resources.",
      syllabus: [
        "Introduction to Operating Systems",
        "Process Management",
        "Thread Management",
        "CPU Scheduling",
        "Memory Management",
        "Virtual Memory",
        "File Systems",
        "I/O Systems",
      ],
      outcomes: [
        "Understand OS concepts",
        "Implement process scheduling",
        "Manage system resources",
        "Handle file operations",
        "Resolve deadlocks",
      ],
    },
    dbms: {
      title: "Database Management Systems",
      image: dbmsImage,
      description:
        "Learn about database design, implementation, and management. Master SQL and understand database architecture.",
      syllabus: [
        "Introduction to DBMS",
        "Entity-Relationship Model",
        "Relational Model",
        "SQL Fundamentals",
        "Normalization",
        "Transaction Management",
        "Concurrency Control",
        "Database Security",
      ],
      outcomes: [
        "Design database schemas",
        "Write complex SQL queries",
        "Implement data security",
        "Manage transactions",
        "Optimize database performance",
      ],
    },
    ds: {
      title: "Data Structures",
      image: dsImage,
      description:
        "Master fundamental data structures and algorithms. Learn how to organize and manipulate data efficiently.",
      syllabus: [
        "Arrays and Linked Lists",
        "Stacks and Queues",
        "Trees and Graphs",
        "Sorting Algorithms",
        "Searching Algorithms",
        "Hash Tables",
        "Dynamic Programming",
        "Algorithm Analysis",
      ],
      outcomes: [
        "Implement basic data structures",
        "Analyze algorithm complexity",
        "Solve programming problems",
        "Optimize code performance",
        "Design efficient solutions",
      ],
    },
    coa: {
      title: "Computer Organization and Architecture",
      image: coaImage,
      description:
        "Understand computer hardware organization and architectural principles. Learn about processor design and memory systems.",
      syllabus: [
        "Digital Logic Design",
        "Computer Organization",
        "CPU Architecture",
        "Memory Hierarchy",
        "I/O Organization",
        "Pipelining",
        "Multiprocessor Systems",
        "Performance Evaluation",
      ],
      outcomes: [
        "Understand computer architecture",
        "Design basic digital circuits",
        "Analyze processor performance",
        "Optimize memory usage",
        "Implement basic hardware components",
      ],
    },
    java: {
      title: "Java Programming",
      image: javaImage,
      description:
        "Learn object-oriented programming using Java. Master Java fundamentals and advanced concepts.",
      syllabus: [
        "Java Basics",
        "Object-Oriented Programming",
        "Exception Handling",
        "Collections Framework",
        "Multithreading",
        "File I/O",
        "GUI Programming",
        "Database Connectivity",
      ],
      outcomes: [
        "Write Java applications",
        "Implement OOP concepts",
        "Handle exceptions effectively",
        "Create multithreaded applications",
        "Develop GUI applications",
      ],
    },
  };

  const course = courseDetails[slug];

  if (!course) {
    return (
      <div className={`error-page ${isDarkMode ? "dark-mode" : ""}`}>
        <h2>Course not found</h2>
        <button onClick={() => navigate("/courses")}>Return to Courses</button>
      </div>
    );
  }

  return (
    <div className={`course-detail-page ${isDarkMode ? "dark-mode" : ""}`}>
      <div
        className={`course-detail-hero ${isDarkMode ? "dark-mode" : ""}`}
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className={`hero-content ${isDarkMode ? "dark-mode" : ""}`}>
          <button
            className={`back-button ${isDarkMode ? "dark-mode" : ""}`}
            onClick={() => navigate("/courses")}
          >
            ← Back to Courses
          </button>
          <h1>{course.title}</h1>
        </div>
      </div>

      <div className={`course-detail-content ${isDarkMode ? "dark-mode" : ""}`}>
        <div className={`course-overview ${isDarkMode ? "dark-mode" : ""}`}>
          <h2>Course Overview</h2>
          <p>{course.description}</p>
        </div>

        <div className={`course-syllabus ${isDarkMode ? "dark-mode" : ""}`}>
          <h2>Syllabus</h2>
          <div className="syllabus-grid">
            {course.syllabus.map((topic, index) => (
              <div
                key={index}
                className={`syllabus-item ${isDarkMode ? "dark-mode" : ""}`}
              >
                <span
                  className={`topic-number ${isDarkMode ? "dark-mode" : ""}`}
                >
                  {index + 1}
                </span>
                <p>{topic}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`learning-outcomes ${isDarkMode ? "dark-mode" : ""}`}>
          <h2>Learning Outcomes</h2>
          <ul>
            {course.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
