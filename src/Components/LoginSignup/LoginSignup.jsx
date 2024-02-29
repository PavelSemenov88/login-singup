import React, { useState } from "react";
import "./LoginSignup.css";
import person_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {

  const [action, setAction] = useState("Login")

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action !== "Login" ? <div className="input">
          <img src={person_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div> : null}
        

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action !== "Sign Up" ? <div className="forgot-password">Lost Passworg? <span>Click Here!</span></div> : null}
      
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sing Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
