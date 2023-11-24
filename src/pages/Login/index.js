import React from "react";
import { useNavigate } from "react-router-dom";

import LoginButton from "../../components/NavBar/LoginButton";
import NavBar from "../../components/NavBar/NavBar";
import "./index.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="login-page">
        <LoginButton onLogin={() => navigate("/projects")} />{" "}
      </div>
    </div>
  );
};

export default LoginPage;
