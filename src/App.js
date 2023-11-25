import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { JwtContext } from "./components/JwtContext";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import Project from "./pages/project";
import Students from "./pages/Students";
import Student from "./pages/Student";
import Login from "./pages/Login";

function App() {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("login="));
  const jwt = cookie ? cookie?.split("=")[1] : null;

  const [currentUserJwt, setCurrentUserJwt] = useState(jwt);
  const jwtContext = { currentUserJwt, setCurrentUserJwt };

  return (
    <JwtContext.Provider value={jwtContext}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student" element={<Student />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </JwtContext.Provider>
  );
}
export default App;
