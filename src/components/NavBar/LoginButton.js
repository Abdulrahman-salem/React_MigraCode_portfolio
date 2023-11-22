import React, { useState } from "react";
import LoginAccount from "../LoginAccount/LoginAccount";
import "./index.scss";

const LoginButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClicked = (value = true) => {
    setClicked(value);
  };

  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("login=")); // replace with logic for checking login cookie
  const cookieValue = cookie ? cookie?.split("=")[1] : null;
  const initialJwt = cookie ? cookieValue : null;

  const [jwt, setJwt] = useState(initialJwt);

  // get cookie

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

      // Assuming the API returns a JSON object with a 'jwt' field
      const data = await response.json();
      const jwt = data.token;

      // Save the JWT to a cookie (You can use a library like js-cookie)
      // Also, consider adding additional security measures for storing tokens.
      document.cookie = `login=${jwt}; path=/`;

      // Update the state to trigger a re-render or use the token as needed
      setJwt(jwt);

      // Optionally, close the modal or perform other actions
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle login error (e.g., show an error message)
    }
  };

  const handleLogout = async () => {
    setJwt(null);
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const modalClass = clicked ? "modal" : "modal hidden";

  const overlayClass = clicked ? "overlay" : "'overlay hidden";

  return (
    <div className="login">
      <button
        className="btn--show-modal"
        onClick={jwt ? handleLogout : handleButtonClicked}
      >
        {jwt ? "Logout" : "Log in"}
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
