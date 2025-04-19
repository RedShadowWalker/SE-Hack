import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { useTheme } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Quiz from "./pages/Quiz.jsx";
import Account from "./pages/Account.jsx";
import "./styles/global.css";

function AppContent() {
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
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
