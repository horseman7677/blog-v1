import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="email" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="password" />
        <button className="loginButton">Login</button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
