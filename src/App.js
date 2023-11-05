import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/project";
import Students from "./pages/Students";
import AboutUs from "./pages/AboutUs";
import { StudentProvider } from "../src/components/StudentData"; 

function App() {
  return (
    <StudentProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/students" element={<Students />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </StudentProvider>
  );
}
export default App;
