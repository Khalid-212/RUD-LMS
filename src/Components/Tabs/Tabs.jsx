import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectedRout } from "../../routSlice";
import "./Tabs.css";

function Tabs() {
  const [active, setActive] = useState("home");
  const selectedTab = (selected) => {
    localStorage.setItem("selectedTab", selected);
    console.log(selected);
    setActive(selected);
  };

  // setActive(localStorage.getItem("selectedTab"));

  return (
    <div>
      <div className="tabsWrapper">
        <Link
          to="/admin/studentlist"
          onClick={() => selectedTab("StudentList")}
          style={{ textDecoration: "none" }}
        >
          <div className={active === "StudentList" ? "tabs active" : "tabs"}>
            <p>Student List</p>
          </div>
        </Link>
        <Link
          to="/admin/manage"
          onClick={() => selectedTab("Manage")}
          style={{ textDecoration: "none" }}
        >
          <div className={active === "Manage" ? "tabs active" : "tabs"}>
            <p>Manage</p>
          </div>
        </Link>
        <Link
          to="/admin/Reports"
          onClick={() => selectedTab("Reports")}
          style={{ textDecoration: "none" }}
        >
          <div className={active === "Reports" ? "tabs active" : "tabs"}>
            <p>Rebaniya Reports</p>
          </div>
        </Link>
        <Link
          to="/admin/Assignmentreport"
          onClick={() => setActive("AssignmentReport")}
          style={{ textDecoration: "none" }}
        >
          <div
            className={active === "AssignmentReport" ? "tabs active" : "tabs"}
          >
            <p>Assignment Report</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
