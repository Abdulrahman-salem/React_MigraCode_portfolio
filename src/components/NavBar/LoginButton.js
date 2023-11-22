import React, { useState, useContext } from "react";
import { JwtContext } from "../JwtContext";
import LoginAccount from "../LoginAccount/LoginAccount";
import "./index.scss";

const LoginButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClicked = (value = true) => {
    setClicked(value);
  };

  const { currentUserJwt, setCurrentUserJwt } = useContext(JwtContext);

  const handleLogin = async (email, password) => {
    handleButtonClicked(false);
    try {
      // Make a request to the login API
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Assuming the API returns a JSON object with a 'currentUserJwt' field
      const data = await response.json();
      const currentUserJwt = data.token;

      // Save the JWT to a cookie (You can use a library like js-cookie)
      // Also, consider adding additional security measures for storing tokens.
      document.cookie = `login=${currentUserJwt}; path=/`;

      // Update the state to trigger a re-render or use the token as needed
      setCurrentUserJwt(currentUserJwt);

      // Optionally, close the modal or perform other actions
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle login error (e.g., show an error message)
    }
  };

  const handleLogout = async () => {
    setCurrentUserJwt(null);
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const modalClass = clicked ? "modal" : "modal hidden";

  const overlayClass = clicked ? "overlay" : "'overlay hidden";

  return (
    <div className="login">
      <button
        className="btn--show-modal"
        onClick={currentUserJwt ? handleLogout : handleButtonClicked}
      >
        {currentUserJwt ? "Logout" : "Log in"}
      </button>

      <div className={modalClass}>
        <button
          className="btn--close-modal"
          onClick={() => {
            handleButtonClicked(false);
          }}
        >
          &times;
        </button>
        <LoginAccount onSubmit={handleLogin} />
      </div>
      <div className={overlayClass}></div>
    </div>
  );
};

export default LoginButton;
