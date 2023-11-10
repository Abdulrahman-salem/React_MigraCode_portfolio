import React, { useState } from "react";
import LoginAccount from "../LoginAccount/LoginAccount";
import "./index.scss";

const LoginButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClicked = (value = true) => {
    setClicked(value);
  };

  const modalClass = clicked ? "modal" : "modal hidden";

  const overlayClass = clicked ? "overlay" : "'overlay hidden";

  return (
    <div className="login">
      <button className="btn--show-modal" onClick={handleButtonClicked}>
        Log in
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
        <LoginAccount onSubmit={() => handleButtonClicked(false)} />
      </div>
      <div className={overlayClass}></div>
    </div>
  );
};

export default LoginButton;
