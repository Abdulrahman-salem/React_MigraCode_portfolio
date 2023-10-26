import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";


function App() {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
            <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    );
}

export default App;
