import React from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

function Tabs() {
  return (
    <div>
      <div className="tabsWrapper">
        <Link to="/admin/studentlist" style={{ textDecoration: "none" }}>
          <div className="tabs">
            <p>Student List</p>
          </div>
        </Link>
        <Link to="/admin/manage" style={{ textDecoration: "none" }}>
          <div className="tabs">
            <p>Manage</p>
          </div>
        </Link>
        <Link to="/admin/Reports" style={{ textDecoration: "none" }}>
          <div className="tabs">
            <p>Reports</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
