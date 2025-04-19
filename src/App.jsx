import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Account from "./pages/Account";
import Quizes from "./pages/Quiz";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/account" element={<Account />} />
        <Route path="/quizes" element={<Quizes />} />
      </Routes>
    </>
  );
}

export default App;
