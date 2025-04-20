import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { useTheme } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import TeacherNavbar from "./components/teachernavbar.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Quiz from "./pages/Quiz.jsx";
import Account from "./pages/Account.jsx";
import ContentHub from "./pages/ContentHub.jsx";
import Assignments from "./pages/Assignments.jsx";
//import Quizz from "./components/Student/Quizz.jsx";

// Teacher Pages
import Dashboard from "./teacherpages/Dashboard.jsx";
import ManageCourses from "./teacherpages/ManageCourses.jsx";
import StudyMaterial from "./teacherpages/StudyMaterial.jsx";
import Assignment from "./teacherpages/Assignment.jsx";
import Grading from "./teacherpages/Grading.jsx";

import TeacherProfile from "./teacherpages/TeacherProfile.jsx";

import "./styles/global.css";

function TeacherContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <TeacherNavbar />
      <main className={isDarkMode ? "dark-mode" : ""}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/study-material" element={<StudyMaterial />} />
          <Route path="/assignments" element={<Assignment />} />
          <Route path="/grading" element={<Grading />} />
          {/* <Route path="/teacher/analytics" element={<Analytics />} /> */}
          <Route path="/profile" element={<TeacherProfile />} />
          <Route path="*" element={<Navigate to="/teacher/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function StudentContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar />
      <main className={isDarkMode ? "dark-mode" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/account" element={<Account />} />
          {/* New routes */}
          <Route path="/contenthub" element={<ContentHub />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </main>
    </div>
  );
}

function AppContent() {
  // You can implement actual auth logic here
  const isTeacher = window.location.pathname.startsWith("/teacher");

  return isTeacher ? <TeacherContent /> : <StudentContent />;
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/teacher/*" element={<TeacherContent />} />
        <Route path="/*" element={<StudentContent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
