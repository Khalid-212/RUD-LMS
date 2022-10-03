import React from "react";
import { Link } from "react-router-dom";
import notification from "../../Assets/notification.svg";
import userIcon from "../../Assets/user.svg";
import "./Header.css";

function Header({ username }) {
  return (
    <div className="header">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <h1>R</h1>
            <h2>uwad</h2>
            <h3>LMS</h3>
          </div>
        </Link>
      </div>
      <div className="right">
        <div className="notification">
          <img src={notification} alt="notification" />
        </div>
        <div className="avatar">
          <img src={userIcon} alt="" />
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
