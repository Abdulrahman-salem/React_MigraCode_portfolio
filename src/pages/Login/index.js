import React from "react";
import { useNavigate } from "react-router-dom";

import LoginButton from "../../components/NavBar/LoginButton";
import "./index.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  return <LoginButton onLogin={() => navigate("/")} />;
};

export default LoginPage;
