import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Courses from "./pages/Courses";
import Quizes from "./pages/Quizes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quizzes" element={<Quizes />} />
      </Routes>
    </div>
  );
}

export default App;
