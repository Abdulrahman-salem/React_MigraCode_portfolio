import "./index.scss";
import React, { useState } from "react";

function LoginAccount(props) {
  const onSubmit = props.onSubmit;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // You can use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Valid email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, call the onSubmit prop
      onSubmit(email, password);
    }

    // TO DO: Display error if validation fails
  };

  return (
    <div className="signup--infomation modal__form">
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address*
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              return handleSubmit(event);
            }
          }}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
      <div className="mb-3" id="password">
        <label htmlFor="inputPassword" className="form-label">
          Password*
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          id="inputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              return handleSubmit(event);
            }
          }}
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="check"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label className="form-check-label" htmlFor="check">
          Check me out
        </label>
      </div>
      <button className="btn btn-send" onClick={handleSubmit} type="submit">
        Send
      </button>
    </div>
  );
}

export default LoginAccount;
