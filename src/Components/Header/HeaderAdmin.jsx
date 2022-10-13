import React from "react";
import { Link } from "react-router-dom";
import notification from "../../Assets/notification.svg";
import userIcon from "../../Assets/user.svg";
import "./Header.css";
import logouticon from "../../Assets/logout.svg";
import { useSelector } from "react-redux";

function HeaderAdmin({ username }) {
  const onclick = () => {
    localStorage.clear();
    window.location.reload();
  };
  const user = useSelector((state) => state.adminstat).adminstat;
  return (
    <div className="header">
      <div className="left">
        <Link to="/admin" style={{ textDecoration: "none" }}>
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
        {user ? (
          <p className="signout" onClick={onclick}>
            <img src={logouticon} alt="" />
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default HeaderAdmin;
