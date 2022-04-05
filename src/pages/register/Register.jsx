import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form action="" className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="username" />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="email" />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="password"
        />
        <button className="registerButton">register</button>
      </form>

      <button className="registerLoginButton">
      <Link className="link" to='/login'>Login</Link>
      </button>
    </div>
  );
}
